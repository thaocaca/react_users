import React, { Component } from 'react';
import TableItem from './TableItem';

class TableData extends Component {
    mappingDataUSer = ()=>
        this.props.dataUserProps.map((value, key)=>(
            <TableItem changeEditUserForm = {()=>this.props.changeEditUserForm()} editFunClick={(abc)=>this.props.edit(value)} key = {key} stt = {key}  userName = {value.name} tel = {value.tel} permission = {value.Permission}/>
        ))
    
    render() {
        return (
            <div className="col">
            <table className="table table-striped table-inverse table-hover">
                <thead className="thead-inverse">
                <tr>
                    <th>STT</th>
                    <th>Họ tên</th>
                    <th>Điện thoại</th>
                    <th>Quyền</th>
                    <th>Chức Năng</th>
                </tr>
                </thead>
                <tbody>
                    {this.mappingDataUSer()}
                </tbody>
            </table>
            </div>

        );
    }
}

export default TableData;
