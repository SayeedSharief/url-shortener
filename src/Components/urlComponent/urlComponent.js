import React from 'react';
import axios from "axios";

export default class UrlComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        url:""
    }
    submitUrl = async (event) => {
        event.preventDefault();
        console.log("URL =", this.state.url);
        let serviceUrl = "http://localhost:4000/api/getShortUrl";
        let getListUrl = "http://localhost:4000/api/getUrlList";
        let body = {
            "url": this.state.url
        }
        let response = await axios.post(serviceUrl, body);
        this.setState({
            url: ""
        })
        console.log("🚀 ~ file: urlComponent.js ~ line 19 ~ UrlComponent ~ submitUrl= ~ response", response);        

        let urlList = await axios.get(getListUrl);
        console.log("🚀 ~ file: urlComponent.js ~ line 26 ~ UrlComponent ~ submitUrl= ~ urlList", urlList);
        this.props.functionRef(urlList.data);
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