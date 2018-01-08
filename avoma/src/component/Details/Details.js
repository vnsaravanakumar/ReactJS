import React, { Component } from 'react';
import Store from '../redux/AppStore';
import './Details.css';

class Details extends Component {
  constructor() {
    super();
     this.state={article:"", heading: ""};
  }
  componentDidMount(){
      Store.subscribe(()=> {
            let val = this.getArticle()[0];
            this.setState({article:val["content:encoded"]["#cdata-section"], heading: val.title["#cdata-section"]});
      });
  }

  getArticle(){
      let topicId = this.props.match.params.topicId;
      return Store.getState("articles").articles.filter(function(obj, i){
                                                  let guid = obj.guid.split("/");
                                                  return topicId === guid[guid.length-1];
                                              });
  }

  rawMarkup(){
      let rawMarkup = this.state.article;
      return { __html: rawMarkup };
  }

  render() {
      let article = this.getArticle();

      if(article.length > 0 && article[0]){
          this.state.article = article[0]["content:encoded"]["#cdata-section"];
          this.state.heading = article[0].title["#cdata-section"];
      }

      return <div className="article">
            <div className="heading">{this.state.heading}
            <div className="pull-right"><div className="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button_count" data-size="small" data-mobile-iframe="true"><a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse">Share</a></div></div>
            </div>
            <div dangerouslySetInnerHTML={this.rawMarkup()}></div>
      </div>;
  }
}

export default Details;
