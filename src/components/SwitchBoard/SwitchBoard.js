import { Component } from "react";
import React from 'react'
import Switch from "./Switch/Switch";

class SwitchBoard extends Component {
    constructor(props) {
        super(props);
        const listOfSwitches = this.generateSwitches(this.props.amount);
        this.state = {
            amount: props.amount,
            listOfSwitches,
            props: props,
        }
        console.log('PROPS:', props)
    };

    // Holds all switches that toggle this lamp index
    // Returns a list of all toggled switches
    listForAttachedIndex = (i) => {
        // Check mapping of switch to lamps
        const mapping = [1,2,3];

        // Check which switches of these are toggled
        
        return mapping.filter((index) => {
            return true;
        });
        //return i === 1 ? [2] : [];
    }

    checkToggled = (i) => {
        return this.listForAttachedIndex(i).length % 2 === 1;
    }



    generateSwitches(amount) {
        const listOfSwitches = [];
        for(let i = 0; i < amount; i++) {
            listOfSwitches.push(<Switch
                // Attach to other switches and toggle
                board={this}
                index={i}
                key={'switch'+i}
                render={
                    ({ on, toggle }) => (
                        <div className={'innerSwitch'} onClick={toggle}>
                            <h3 style={{backgroundColor: "gray"}}>
                                {on ? '✓' : 'X'}
                            </h3>
                        </div>
                    )}
            />);
        };
        return listOfSwitches;
    }

    lamps() {
        const { listOfSwitches } = this.state;
        return listOfSwitches.map((el, i) => {
            const checked = this.checkToggled(i);
            console.log('@lamps:', i, checked, this.listForAttachedIndex(i))
            return <div key={'lamp'+i}>
                <h3>
                    {checked ? 'X' : 'Y'}
                </h3>
            </div>
        })
    }

    render() {
        return (
            <div className={'switchBoard'}>
                {this.lamps()}
                {this.state.listOfSwitches}
            </div>
        );
    }
}

export default SwitchBoard;