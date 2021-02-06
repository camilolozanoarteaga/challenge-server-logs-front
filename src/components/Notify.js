import React, { Component, Fragment } from 'react';
import { DateTime } from 'luxon';

class Notify extends Component {
  render() {
    return (
      <Fragment>
        <div className="h-1"></div>
        <div
          className="flex flex-row p-2 content-center space-x-4  border-l-4 border-green-700 bg-gray-200"
          role="alert"
        >
          <p className="p-1 text-green-700 ">
            [{DateTime.fromISO(this.props.notifyData.createdAt).toFormat('yyyy-mm-dd hh:mm:ss')}]
          </p>
          <p className="p-1 text-black ">
            {' '}
            server-name[{' '}
            <span className="text-yellow-500">
              {this.props.notifyData.server_name}--{this.props.notifyData.server_type}
            </span>{' '}
            ]
          </p>

          <p className=" rounded-2xl py-1 px-2 text-red-400 border-red-200  font-bold">
            {this.props.notifyData.description}
          </p>
          <p className="p-1 text-green-600 font-bold"></p>
        </div>
        <div className="h-1"></div>
      </Fragment>
    );
  }
}

export default Notify;
