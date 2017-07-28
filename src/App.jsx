import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
import {Form, FormControl, Button } from 'react-bootstrap';


class App extends Component {
    constructor(props) {
        super (props);
        this.state = {
            deadline: 'December 25, 2017',
            newDeadline: ''
        }
    }


changeDeadline(){
    /* Updates the state, which is the deadline. 
    Note: State can't be mutated or changed directly. Ex: this.state.deadline = 'November 25, 2017'. It has to be changed like written below*/
    this.setState({deadline:this.state.newDeadline});
}
    render() {
        document.body.style.backgroundColor = "#34495e";
        return (
            <div className="App">
                <div className="App-title">
                    Countdown to {this.state.deadline}
                </div>
                <Clock
                deadline={this.state.deadline}
                 />
                <Form inline>
                    <FormControl 
                    className="Deadline-input"
                    placeholder='new date'
                    onChange={event => this.setState({newDeadline: event.target.value})}
                    />
                    <Button onClick={() => this.changeDeadline()}> 
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default App;