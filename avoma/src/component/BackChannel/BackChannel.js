import React, { Component } from 'react';
import Request from 'superagent';
import Helper from '../Helper/Helper';
import AvomaTable from '../AvomaTable/AvomaTable';
import Details from '../Details/Details';
import Store from '../redux/AppStore';
import {Route} from 'react-router-dom';
import './BackChannel.css';

class BackChannel extends Component {
  constructor() {
    super();
     this.state={articles:[]};
  }

  componentDidMount(){
    Request.get('/backchannel').then(result=> {
      let val = Helper.xmlStrToJson(result.text).rss.channel.item;
      Store.dispatch({type: "ADD_TOPICS", articles: val});
      this.setState({articles:val});
    });
  }

  render() {
    return <div className="main-content">
        <div className="left-panel"><AvomaTable articles={this.state.articles}></AvomaTable></div>
        <div className="right-panel">
            <Route path="/backchannel/:topicId" component={Details}/>
            <Route exact path="/backchannel" render={() => (
              <h3>Please select a topic.</h3>
            )}/>
            <Route exact path="/" render={() => (
              <h3>Please select a topic.</h3>
            )}/>
          </div>
        </div>;
  }
}

export default BackChannel;
