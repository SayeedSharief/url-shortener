import React from 'react';
import Display from './display';

export default class DisplayUrlComponent extends React.Component {
    urlList = this.props.urlList;
    constructor(props) {
        super(props)
    }
    

    render() {
        return (
            <div>
                <div>
                    <h3>History of Short Urls</h3>
                </div>
                <div>
                    {this.urlList.map((data) => <Display key={data._id} {...data} /> )}
                </div>
            </div>
        )
    }
}