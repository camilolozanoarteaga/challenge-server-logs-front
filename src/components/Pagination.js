import React, { Component } from 'react';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

// TODO: PENDIENTE IMPLEMENTAR
class Pagination extends Component {
  render() {
    return (
      <div className="min-w-full h-12 border-2 border-gray-300 rounded-b-md">
        <div className="flex justify-end pt-1 pr-1">
          <div className="flex justify-center items-center w-9 h-9 border-2 border-gray-400 rounded-md">
            <AiFillCaretLeft />
          </div>
          <div className="flex justify-center items-center w-9 h-9 border-2 border-gray-400 rounded-md">
            1
          </div>
          <div className="flex justify-center items-center w-9 h-9 border-2 border-gray-400 rounded-md">
            2
          </div>
          <div className="flex justify-center items-center w-9 h-9 border-2 border-gray-400 rounded-md">
            3
          </div>
          <div className="flex justify-center items-center w-9 h-9 border-2 border-gray-400 rounded-md">
            <AiFillCaretRight />
          </div>
        </div>
      </div>
    );
  }
}

export default Pagination;
