import React from 'react';
import './msg-component.scss';

class MsgComponent extends React.Component {

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
                <h1>Hello {msg}</h1>
            </div>
        )
    }
}

MsgComponent.defaultProps = {
    msg: '' // msg
}

export default MsgComponent;