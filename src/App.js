import React from 'react';
import './App.css';
import UrlComponent from './Components/urlComponent/urlComponent';
import DisplayUrlComponent from './Components/displayUrlComponent/displayUrlComponent';

export default class App extends React.Component {
  state = {
    urlHistoryList: []
  }

  displayUrlHistory = (urlList) => {
    console.log("___urlList___ =", urlList);
    this.setState({
      urlHistoryList: urlList
    })
    console.log("___state____", this.state);
  };

  render() {
  return (
    <div className="App">
      <div className="App-body">
        <div>
          <UrlComponent functionRef={this.displayUrlHistory}/>
        </div>
        <div>
          <DisplayUrlComponent urlList={this.state.urlHistoryList} />
        </div>
      </div>
    </div>
  );
}
}
