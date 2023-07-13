import "./search-panel.scss";

import { Component } from "react";

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchStr: "",
    };
  }

  searchInputValue = (e) => {
    this.setState({
      searchStr: e.target.value,
    });

    this.props.onSearch(e.target.value);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Найти бро"
        onChange={this.searchInputValue}
        value={this.state.searchStr}
      />
    );
  }
}

export default SearchPanel;
