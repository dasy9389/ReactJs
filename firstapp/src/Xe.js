import React from "react";
class Xe extends React.Component {
    constructor(props){
        console.log('Xe constructor', props);
        super(props);
        this.state  = {
            color: props.color,
            value: props.value
        }
    }
    render() {
        //return <h3 style={{color: this.props.color}}>Hi, {this.props.value}!</h3>;
        return <h3 style={{color: this.state.color}}>Hi, {this.state.value}!</h3>;
    }
}
export default Xe;