import React from 'react';
import './component-two.scss';

class ComponentTwo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            msg: this.props.msg
        };
    }

    render() {

        const {
            msg
        } = this.props;

        return (
            <div>
                <h1>Hello, {msg} - this is a test from comp - this comp number 2</h1>
            </div>
        )
    }
}

ComponentTwo.defaultProps = {
    msg: '-' // msg
}

export default ComponentTwo;