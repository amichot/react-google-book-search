//dependencies
import React, { Component } from "react";

//components

//css
import "./searchResultsList.css";

class SearchResultsList extends Component {
	amount = "Price: unavailable";
	currency = null;
	url = "url";

	render() {
		const addListItems = data => {
			console.log(data);
			if (data === null) {
				return null;
			} else {
				console.log(data);
				return data.map(item => {
					if (item[0].listPrice) {
						this.amount = item[0].listPrice.amount;
						this.currency = item[0].listPrice.currencyCode;
						this.url = item[0].buyLink;
					}
					const getAuthors = authors => {
						if (authors !== undefined) {
							return authors.map(author => {
								return <span> {author} </span>;
							});
						}
					};
					return (
						<li>
							<h2>{item[1].title}</h2>
							<h3>Author: {getAuthors(item[1].authors)} </h3>
							<div>
								<a href={this.url} target='_blank'>
									Price: {this.amount}
									{this.currency}
								</a>
							</div>
							<p>{item[1].description}</p>
						</li>
					);
				});
			}
		};
		return (
			<section>
				<ul className='searchResultsList'>{addListItems(this.props.data)}</ul>
			</section>
		);
	}
}

export default SearchResultsList;
