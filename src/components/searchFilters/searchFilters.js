//dependencies
import React, { Component } from "react";

//components

//css
import "./searchFilters.css";

class SearchFilters extends Component {
	changeSelection(value) {
		if (value === "No Filter") {
			this.props.changeFilter(null);
		} else {
			this.props.changeFilter(value);
		}
	}

	render() {
		const filterOptions = {
			printTypes: ["all", "books", "magazines"],
			filters: [
				"No Filter",
				"partial",
				"full",
				"free-ebooks",
				"paid-ebooks",
				"ebooks"
			]
		};

		const options = array => {
			return array.map(item => {
				return (
					<option name={item} value={item}>
						{item}
					</option>
				);
			});
		};

		return (
			<div className='searchFilters'>
				<label htmlFor='printType'>Print Type:</label>
				<select
					id='printType'
					name='printType'
					onChange={e => this.props.changePrintType(e.target.value)}>
					{options(filterOptions.printTypes)}
				</select>
				<label htmlFor='bookType'>Book Type:</label>
				<select
					id='bookType'
					name='bookType'
					onChange={e => this.changeSelection(e.target.value)}>
					{options(filterOptions.filters)}
				</select>
			</div>
		);
	}
}

export default SearchFilters;
