import React from 'react';
import './component-Third.scss';

class ComponentThird extends React.Component {

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
                <h1>Hello, {msg} - this is a test from comp 3333</h1>
            </div>
        )
    }
}

ComponentThird.defaultProps = {
    msg: '-' // msg
}

export default ComponentThird;