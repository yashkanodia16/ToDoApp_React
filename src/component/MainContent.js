
import React, { Component } from 'react';

class MainContent extends Component {
    render() {
        const style1 = { textDecoration: "line-through" };
    return(
    <div>
        <input type="checkbox"
            id={this.props.mainContent.id}
            checked={this.props.mainContent.completed}
            onChange={() => this.props.onchange(this.props.mainContent.id)}></input>
        <label style={this.props.mainContent.completed ? style1 : null}>{this.props.mainContent.text}</label><br></br>
        </div >);
    }
}

export default MainContent;