//dependencies
import React, { Component } from "react";

//components
import BookSearch from "./components/bookSearch/bookSearch";
import SearchResultsList from "./components/searchResultsList/searchResultsList";

//css
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			q: null,
			printType: "all",
			filter: null,
			key: "AIzaSyAC1FAH0KR9SWwGt3nimGLdvuQ4GaY-slk",
			data: null
		};
	}
	url = "https://www.googleapis.com/books/v1/volumes?";

	makeUrl = () => {
		const url = this.url;
		const urlMaker = Object.keys(this.state).map(e => {
			if (this.state[e] === null || e === "data") {
			} else if (e !== "key") {
				let value = this.state[e];
				let newValue = value
					.split(" ")
					.join("+")
					.trim();
				return `${e}=${newValue}&`;
			} else {
				return `${e}=${this.state[e]}`;
			}
		});

		let newUrl = url + urlMaker;
		let newfetch = newUrl.replace(/,/g, "");
		console.log(newfetch);
		return newfetch;
	};

	setPrintType(printType) {
		this.setState({ printType });
	}
	setFilter(filter) {
		this.setState({ filter });
	}
	setSearch(q) {
		this.setState({ q });
	}
	setData(data) {
		this.setState({ data });
	}

	handleSubmit = e => {
		e.preventDefault();
		const url = this.makeUrl();
		fetch(url)
			.then(response => {
				if (!response.ok) {
					throw new Error("Something went wrong, please try again later");
				}
				return response.json();
			})
			.then(data => {
				let refinedData = data.items.map(item => {
					return [item.saleInfo, item.volumeInfo];
				});
				return this.setData(refinedData);
			})
			.catch(err => {
				this.setState({
					error: err.message
				});
			});
	};

	render() {
		const error = this.state.error ? (
			<div className='error'>{this.state.error}</div>
		) : (
			""
		);
		return (
			<main className='App'>
				<header role='banner'>
					<h1>Google Book Search</h1>
				</header>
				{error}
				<BookSearch
					changePrintType={printTypes => this.setPrintType(printTypes)}
					changeFilter={filters => this.setFilter(filters)}
					getSearch={search => this.setSearch(search)}
					handleSubmit={e => this.handleSubmit(e)}
				/>
				<SearchResultsList data={this.state.data} />
			</main>
		);
	}
}

export default App;
