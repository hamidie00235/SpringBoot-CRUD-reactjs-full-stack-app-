import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: []
        }
        this.addEmployee=this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        
    };
    editEmployee(id) {
        
        this.props.history.push(`/add-employee/${id}`);

    }
        componentDidMount() {
            EmployeeService.getEmployees().then((res ) => {
                this.setState({employees: res.data});
            });
        }
        addEmployee(){
            this.props.history.push('/add-employee/_add');
        }
    render() {
        return (
            <div>
                <h2 className="text-center ">Employees List</h2>
                <div className="row">
              <button className="btn btn-primary" onClick={this.addEmployee}> add Employee</button>
              </div>
              <br></br>
                <div className="row">
                    <table className="table table striped table bordered">
                     <thead>
                        <tr>

                            <th>Employee First Name</th>
                            <th>Employee Last Name</th>
                            <th>Employee Email Id</th>
                            <th>Actions</th>
                        </tr>

                     </thead>
                   <tbody>
                 

                 
                   {
                   this.state.employees.map(
                    employee =>
                    <tr key={employee.id}>
                        <td >{employee.firstName}</td>
                        <td >{employee.lastName}</td>
                        <td >{employee.emailId}</td>
                        <td>
                        <button onClick={() => this.editEmployee(employee.id)} className="btn btn-info">Update</button>

                        </td>

                        </tr>
                   )
                        }
                        </tbody>



                    </table>



                </div>
                
            </div>
        );
    }
}

export default ListEmployeeComponent;