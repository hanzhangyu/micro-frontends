import React, {Component} from 'react';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({id: this.state.id + 1})
    }

    render(state = this.state) {
        const {id} = state;
        return <p onClick={this.handleClick}>HelloReactChild{id}</p>;
    }
}
