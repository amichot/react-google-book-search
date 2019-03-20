import React from "react";
import ReactDOM from "react-dom";
import SearchFilters from "./searchFilters";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<SearchFilters />, div);
	ReactDOM.unmountComponentAtNode(div);
});
