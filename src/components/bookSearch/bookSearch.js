//dependencies
import React, { Component } from "react";

//components
import Search from "../search/search";
import SearchFilters from "../searchFilters/searchFilters";
//css
import "./bookSearch.css";

class BookSearch extends Component {
	render() {
		return (
			<form className='bookSearch' onSubmit={e => this.props.handleSubmit(e)}>
				<Search getSearch={this.props.getSearch} />
				<SearchFilters
					changePrintType={this.props.changePrintType}
					changeFilter={this.props.changeFilter}
				/>
			</form>
		);
	}
}

export default BookSearch;
