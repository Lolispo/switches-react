import { Component } from "react";
import React from 'react'

class Switch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            on: props.on || false,
            attachedList: props.attachList,
            switchBoard: props.board,
        }
        console.log('PROPS:', props)
    };

    toggle = () => {
        this.state.attachedList.forEach((el) => {
            // el.toggle();
            const toggled = this.state.switchBoard.state.listOfSwitches[el].on;
            console.log('attachedList:', el, toggled);
            const newListOfSwitches = this.state.switchBoard.state.listOfSwitches;
            console.log('2: ', newListOfSwitches, newListOfSwitches[el])
            newListOfSwitches[el].setState({
                ...newListOfSwitches[el].state,
                on: !toggled,
            })
            this.state.switchBoard.setState({
                ...this.state.switchBoard.state,
                newListOfSwitches
            })
        });
        this.setState({
            on: !this.state.on,
        });
    };

    render() {
        const { render } = this.props;
        return (
            <div>
                {render({
                    on: this.state.on,
                    toggle: this.toggle,
                })}
            </div>
        );
    }
}

export default Switch;