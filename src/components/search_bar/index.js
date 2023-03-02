import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    searchTerm: ''
  }

  handleInputChange = event => {
    const searchTerm = event.target.value;
    this.setState({ searchTerm });
    this.props.onSearchTermChange(searchTerm);
    console.log(searchTerm);
  }
  handleSubmit = searchTerm => {
    
  }

  render() {
    return (
      <div>
        <label>Search</label>
        <input
          onSubmit={this.handleSubmit}  
          type="text"
          placeholder="Search..."
          value={this.state.searchTerm}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default SearchBar;