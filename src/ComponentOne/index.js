import React from 'react';
import './component-one.scss';

class ComponentOne extends React.Component {

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
            <div className="hello-world">
                <h1>Hello, {msg} - this is a test from comp one</h1>
            </div>
        )
    }
}

ComponentOne.defaultProps = {
    msg: '-' // msg
}

export default ComponentOne;