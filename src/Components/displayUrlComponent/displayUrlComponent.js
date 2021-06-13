import React from 'react';

export default class DisplayUrlComponent extends React.Component {
    
    constructor(props) {
        super(props)
    }
    urlList = this.props.urlList;

    render() {
        return (
            <div>
                <div>
                    <h2>History of Short Urls</h2>
                </div>
                <div>
                    {this.urlList.map((url) => <div key="url._id" >{url.shortUrl}</div>)}
                </div>
            </div>
        )
    }
}