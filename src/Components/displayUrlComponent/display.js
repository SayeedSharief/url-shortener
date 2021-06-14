import React from "react";

export default class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div style={{ display: "inline-flex" }}>
          <div>url : </div>
          <div>{this.props.shortUrl}</div>
        </div>
      </div>
    )
  }
}
