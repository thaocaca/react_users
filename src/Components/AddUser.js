import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

uuidv4(); 

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state={
            status: true,
            id: "",
            name: "",
            tel: "",
            Permission: ""
        }
    }
    isChange = (event) =>{
        const nameControl = event.target.name;
        const valueCOntrol = event.target.value;

        this.setState({
            id: uuidv4() ,
            [nameControl]: valueCOntrol
        })
    }
    hienForm = ()=>{
        if(this.props.displayForm === true){
            return(
                <form>
                <div className="card border-primary mb-3 mt-3" style={{maxWidth: '18rem'}}>
                    <div className="card-header">Thêm mới thành viên</div>
                    <div className="card-body text-primary">
                    <div className="form-group">
                        <input type="text" onChange = { (event) =>{this.isChange(event)}} name = "name" className="form-control" placeholder="Tên thành viên" />
                    </div>
                    <div className="form-group">
                        <input type="text" onChange = { (event) =>{this.isChange(event)}} name = "tel" className="form-control" placeholder="Điện thoại" />
                    </div>
                    <div className="form-group">                       
                        <select className="form-control" onChange = { (event) =>this.isChange(event)} name = "Permission">
                        <option>Choose...</option>
                        <option value={1}>Admin</option>
                        <option value={2}>User</option>
                        <option value={3}>Modrater</option>
                        </select>
                    </div>
                    {/* <div className="btn btn-primary btn-block " onClick = {(name, tel,Permission)=>this.props.getNewUser(this.state.name, this.state.tel, this.state.Permission)} >Thêm thành viên</div> */}
                    <input type="reset" value = "Thêm thành viên" className="btn btn-primary btn-block " onClick = {(id,name, tel,Permission)=>this.props.getNewUser(this.state.id,this.state.name, this.state.tel, this.state.Permission)} />
                    </div>
                </div>
                </form>
            )
        }
    }
    
    render() {
        // console.log(this.state);
        return (
            <div>
                <div className="col-12">
                {/* {this.hienNut()} */}
                {this.hienForm()}
                
                </div>
            </div>

        );
    }
}

export default AddUser;
