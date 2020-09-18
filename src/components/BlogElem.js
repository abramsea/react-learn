import React from 'react';
import './BlogElem.css';
import axios from 'axios';

const API = 'http://www.randomtext.me/api/gibberish/';


class BlogElem extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          blogData: [],
        };
      }

    componentDidMount = () => {
        axios.get(API)
          .then((res) => {
            this.setState( {blogData: res.data.text_out });
          });
      }


    render() {
        return (
            <div className="blog-elem">
                <img className="blog-elem-pic" src='https://picsum.photos/400/300' />
                <h2 className="blog-elem-title">
                    Random title
                </h2>
                {this.state.blogData}
            </div>
        )
    }
}

export default BlogElem;