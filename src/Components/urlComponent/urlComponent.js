import React from 'react';

export default class UrlComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        url:""
    }
    submitUrl = (event) => {
        event.preventDefault();
        console.log("URL =", this.state.url);
    }

    render() {
        return(
            <form onSubmit={this.submitUrl}>
                <input type="text" placeholder="Enter the original url" value={this.state.url} 
                   onChange={(event) => this.setState({url: event.target.value})} />
                <button>Submit</button>
            </form>
        )
    }
}