import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import SearchForm from "./Components/SearchForm";
import TableData from "./Components/TableData";
import AddUSer from "./Components/AddUser";
import DataUser from "./Components/data.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayForm: false,
      displayButton: false,
      data: DataUser,
      textSearch: "",
      editUserStatus: false,
    };
  }

  checkConnect = (data) => {
    this.setState({
      textSearch: data,
    });
  };
  changeState = () => {
    this.setState({
      displayForm: !this.state.displayForm,
    });
  };

  getNewUser = (id, name, tel, Permission) => {
    var item = {};
    item.id = id;
    item.name = name;
    item.tel = tel;
    item.Permission = Permission;

    var items = this.state.data;
    items.push(item);
    console.log(items);
    this.setState({
      data: items,
    });
  };
  editUser = (abc) => {
    console.log(abc);
  };
  changeEditUserForm = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus,
    });
  };
  render() {
    var resultSearch = []; //khai báo mảng để lưu kết quả ban đầu

    this.state.data.forEach((item) => {
      if (item.name.indexOf(this.state.textSearch) !== -1) {
        resultSearch.push(item);
      }
    });

    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <SearchForm
              changeEditUserForm={() => this.changeEditUserForm()}
              editUserStatus={this.state.editUserStatus}
              checkConnect={(data) => this.checkConnect(data)}
              ketNoi={() => {
                this.changeState();
              }}
              displayForm={this.state.displayForm}
              displayButton={this.state.displayButton}
            />
            <TableData
              changeEditUserForm={() => this.changeEditUserForm()}
              edit={(abc) => this.editUser(abc)}
              dataUserProps={resultSearch}
            />
            <AddUSer
              displayForm={this.state.displayForm}
              getNewUser={(name, tel, Permission) => {
                this.getNewUser(name, tel, Permission);
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;