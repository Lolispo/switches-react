import { Component } from "react";
import React from 'react'
import { toggleIndex } from "../switchboard.actions";

class Switch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            on: props.on || false,
            index: props.index,
            attachedList: props.attachList,
            switchBoard: props.board,
        }
        console.log('PROPS:', props)
    };

    toggle = () => {
        const toggled = toggleIndex(this.state.index);
        this.setState({
            on: toggled,
        });
    };

    render() {
        const { render } = this.props;
        return (
            <div className={'switch'}>
                {render({
                    on: this.state.on,
                    toggle: this.toggle,
                })}
            </div>
        );
    }
}

export default Switch;