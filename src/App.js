import React from "react";
import axios from "axios";
import "./App.css";
import UrlComponent from "./Components/urlComponent/urlComponent";
import DisplayUrlComponent from "./Components/displayUrlComponent/displayUrlComponent";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    urlHistoryList: [],
  };
  componentDidMount() {
    console.log("Inside componentDidMount");
    this.getData();
  }

  getData = async () => {
    let getListUrl = "http://localhost:4000/api/getUrlList";

    let urlList = await axios.get(getListUrl);
    console.log(
      "🚀 ~ file: urlComponent.js ~ line 26 ~ UrlComponent ~ submitUrl= ~ urlList",
      urlList
    );
    this.setState({
      urlHistoryList: urlList.data,
    });
  };

  displayUrlHistory = (urlList) => {
    console.log("___urlList___ =", urlList);
    this.setState({
      urlHistoryList: urlList,
    });
    console.log("___state____", this.state);
  };

  render() {
    return (
      <div className="App">
        <div className="App-body">
          <div>
            <UrlComponent functionRef={this.displayUrlHistory} />
          </div>
          <div>
            <DisplayUrlComponent urlList={this.state.urlHistoryList} />
          </div>
        </div>
      </div>
    );
  }
}
