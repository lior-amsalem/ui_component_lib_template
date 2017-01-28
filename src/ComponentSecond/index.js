import React from 'react';
import './component-second.scss';

class ComponentSecond extends React.Component {

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
                <h1>Hello, {msg}</h1>
            </div>
        )
    }
}

ComponentSecond.defaultProps = {
    msg: '' // msg
}

export default ComponentSecond;