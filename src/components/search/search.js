//dependencies
import React, { Component } from "react";

//components

//css
import "./search.css";

class Search extends Component {
	render() {
		return (
			<div className='search'>
				<label htmlFor='search'>Search:</label>
				<input
					type='text'
					name='search'
					id='search'
					placeholder='henry'
					onChange={e => this.props.getSearch(e.target.value)}
				/>
				<button type='submit'>Submit</button>
			</div>
		);
	}
}

export default Search;
