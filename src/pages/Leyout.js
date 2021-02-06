import React, { Component } from 'react';

import { getAllAlerts } from '../services/Api';

import Notify from '../components/Notify';
import Search from '../components/Search';
import Pagination from '../components/Pagination';

class Leyout extends Component {
  state = {
    loading: false,
    isNotData: true,
    error: null,
    data: undefined,
    search: '',
    page: 0,
    limit: 10,
  };

  componentDidMount() {
    this.fetchData();
  }

  handleClick = (e) => {
    this.setState({
      search: e,
    });

    this.fetchData(e);
  };

  fetchData = async (spell) => {
    this.setState({ loading: true, error: null });
    try {
      const response = await getAllAlerts(spell, this.state.page, this.state.limit);
      const { items } = response.scheme;

      if (items.lenght > 0) {
        this.setState({ loading: false, data: response.scheme.items, isNotData: true });
      } else {
        this.setState({ loading: false, data: response.scheme.items, isNotData: false });
      }
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  loadData() {
    if (this.state.loading === true) {
      return <h1>Loading...</h1>;
    } else if (this.state.isNotData) {
      return <h1>No se encontro información</h1>;
    } else {
      return (
        <div className="h-4/5 min-w-full overflow-scroll">
          {this.state.data.map((notify) => {
            return (
              <div key={notify.id}>
                <Notify notifyData={notify} />
              </div>
            );
          })}
        </div>
      );
    }
  }

  render() {
    return (
      <div className="container">
        <div className="flex justify-center items-center w-screen h-screen bg-gray-100 ">
          <div className="w-4/6	h-4/6">
            <Search
              // onChange={this.handleChange}
              onClick={this.handleClick}
              value={this.state.search}
            />

            {this.loadData()}

            <Pagination />
          </div>
        </div>
      </div>
    );
  }
}

export default Leyout;
