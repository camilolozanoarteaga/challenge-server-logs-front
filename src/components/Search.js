import React, { Component } from 'react';
import { AiOutlineMonitor } from 'react-icons/ai';

class Search extends Component {
  state = {
    search: '',
  };

  handleChenge = (e) => {
    this.setState({ search: e.target.value });
  };

  handleClick = () => {
    if (this.state.search) {
      this.props.onClick(this.state.search);
    }
  };

  render() {
    return (
      <div className="min-w-full flex flex-row justify-center items-center h-16 p-2 border-2 border-gray-300 rounded-t-md">
        <div className="flex justify-center items-center w-9 h-9 text-4xl text-gray-400 "></div>
        <input
          className="w-10/12 border-1 border-gray-300 rounded-md bg-gray-200 focus:bg-white"
          type="text"
          name="share"
          id="share"
          onChange={this.handleChenge}
          value={this.state.search}
        />
        <div className="inline-flex rounded-md shadow mx-2">
          <div
            onClick={this.handleClick}
            className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            <AiOutlineMonitor />
            <span>buscar</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
