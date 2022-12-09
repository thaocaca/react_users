import React, { Component } from "react";
import EditUser from "./EditUser";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueSearch: "",
    };
  }

  isChange = (event) => {
    this.setState({
      valueSearch: event.target.value,
    });
    this.props.checkConnect(this.state.valueSearch);
  };
  isShowEdit = () => {
    if (this.props.editUserStatus === true) {
      return (
        <EditUser changeEditUserForm={() => this.props.changeEditUserForm()} />
      );
    }
  };

  render() {
    return (
      <div className="col-12">
        <div className="row">
          {/* <EditUser/> */}
          {this.isShowEdit()}
        </div>
        <div className="row">
          <div className="col-9">
            <div className="searchForm ">
              <div className="form-group">
                <div className="btn-group">
                  <input
                    type="text"
                    onChange={(event) => {
                      this.isChange(event);
                    }}
                    style={{ width: 600 }}
                    className="form-control"
                    placeholder="Nhập từ khoá để tìm kiếm"
                  />
                  <div
                    className="btn btn-info"
                    onClick={(data) =>
                      this.props.checkConnect(this.state.valueSearch)
                    }
                  >
                    Tìm
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="btn-group">
              <div
                className="btn btn-outline-info mr-2 "
                onClick={() => this.props.ketNoi()}
              >
                Thêm mới
              </div>
              <div
                className="btn btn-outline-secondary "
                onClick={() => this.props.ketNoi()}
              >
                Đóng lại
              </div>
            </div>
          </div>
        </div>

        <hr />
      </div>
    );
  }
}

export default SearchForm;
