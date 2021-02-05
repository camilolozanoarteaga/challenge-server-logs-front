import React, { Component } from 'react';

class LogConsole extends Component {
  render() {
    return (
      <div className="container mx-auto">
        <div class="flex justify-center h-24 py-2 border-solid border-4 border-light-blue-500 ">
          <h1 className="flex items-center ">
            <span className="text-2xl text-green-800">
              SERVER ALERT LOGGER
            </span>
          </h1>
        </div>

        <div class="flex justify-center h-24 py-2 border-dashed border-4 border-light-blue-500 ">
          <h1 className="flex items-center ">
            <span className="text-2xl text-green-800">
              CONTENT
            </span>
          </h1>
        </div>
      </div>
    );
  }
}

export default LogConsole;
