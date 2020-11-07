import React, { Component } from "react";

class SearchAppointments extends Component {
  constructor() {
    super();
    this.handler = this.handler.bind(this);
    this.changeOrderHandler = this.changeOrderHandler.bind(this);
  }
  handler(e) {
    this.props.searchApts(e.target.value);
  }
  changeOrderHandler(key, value) {
    this.props.changeOrder(key, value);
  }
  render() {
    return (
      <div className='search-appointments row justify-content-center my-4'>
        <div className='col-md-6'>
          <div className='input-group'>
            <input
              id='SearchApts'
              type='text'
              className='form-control'
              aria-label='Search Appointments'
              onChange={this.handler}
            />
            <div className='input-group-append'>
              <button
                type='button'
                className='btn btn-primary dropdown-toggle'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                Sort by: <span className='caret' />
              </button>

              <div className='sort-menu dropdown-menu dropdown-menu-right'>
                <button
                  className={
                    "sort-by dropdown-item " +
                    (this.props.orderBy === "petName" ? "active" : "")
                  }
                  onClick={(e) =>
                    this.changeOrderHandler("petName", this.props.orderDir)
                  }
                  href='#'
                >
                  Pet Name
                </button>
                <button
                  className={
                    "sort-by dropdown-item " +
                    (this.props.orderBy === "aptDate" ? "active" : "")
                  }
                  onClick={(e) =>
                    this.changeOrderHandler("aptDate", this.props.orderDir)
                  }
                  href='#'
                >
                  Date
                </button>
                <button
                  className={
                    "sort-by dropdown-item " +
                    (this.props.orderBy === "ownerName" ? "active" : "")
                  }
                  onClick={(e) =>
                    this.changeOrderHandler("ownerName", this.props.orderDir)
                  }
                  href='#'
                >
                  Owner
                </button>
                <div role='separator' className='dropdown-divider' />
                <button
                  className={
                    "sort-by dropdown-item " +
                    (this.props.orderDir === "asc" ? "active" : "")
                  }
                  onClick={(e) =>
                    this.changeOrderHandler(this.props.orderBy, "asc")
                  }
                  href='#'
                >
                  Asc
                </button>
                <button
                  className={
                    "sort-by dropdown-item " +
                    (this.props.orderDir === "desc" ? "active" : "")
                  }
                  onClick={(e) =>
                    this.changeOrderHandler(this.props.orderBy, "desc")
                  }
                  href='#'
                >
                  Desc
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchAppointments;
