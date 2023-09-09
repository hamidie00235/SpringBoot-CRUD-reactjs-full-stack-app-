//step1
import React, { Component } from 'react';

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.state ={
            id:this.props.match.params.id,
        };
        }
    render() {
        
        return (
            <div>
                <h3>View Employee Page </h3>
            </div>
        );
    }
}

export default ViewEmployeeComponent;