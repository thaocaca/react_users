import React, { Component } from 'react';

class TableItem extends Component {
    setPermission = ()=>{
        let per = "";
        if(parseInt(this.props.permission) === 1){
            per = "Admin"
        }
        else if(parseInt(this.props.permission) === 2){
            per = "Moderetor"
        }
        else{
            per = "Nomer User"
        }
        return per;
    }
    editClick = () =>{
        this.props.editFunClick();
        this.props.changeEditUserForm();}
    render() {
        return (
            <tr>
                <td>{this.props.stt + 1}</td>
                <td>{this.props.userName}</td>
                <td>{this.props.tel}</td>
                <td>{this.setPermission()}</td>
                <td>
                    <div className="btn btn-warning mr-2" onClick={()=>{this.editClick()}}><i className="fa fa-pencil" aria-hidden="true"  /> Sửa</div>
                    <div className="btn btn-danger"><i className="fa fa-trash" aria-hidden="true" /> Xoá</div>
                </td>
            </tr>
        );
    }
}

export default TableItem;
