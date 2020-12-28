import { Component } from "react";
import React from 'react'
import Switch from "./Switch/Switch";

class SwitchBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: props.amount,
            listOfSwitches: []
        }
        console.log('PROPS:', props)
    };

    listForAttachedIndex = (i) => {
        return i === 1 ? [2] : [];
    }

    generateSwitches(amount) {
        const { listOfSwitches } = this.state;
        for(let i = 0; i < amount; i++) {
            listOfSwitches.push(<Switch
                // Attach to other switches and toggle
                board={this}
                attachList={this.listForAttachedIndex(i)}
                render={
                    ({ on, toggle }) => (
                        <div onClick={toggle}>
                            <h3 style={{backgroundColor: "gray"}}>{on ? '✓' : 'X'}</h3>
                        </div>
                    )}
            />);
        };
        return listOfSwitches;
    }

    render() {
        return (
            <div>
                {this.generateSwitches(this.props.amount)}
            </div>
        );
    }
}

export default SwitchBoard;