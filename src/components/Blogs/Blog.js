import React, { useState, useEffect } from "react";
import axios from "axios";
import './Blog.css';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@masterrajpatel").then((response) => {
      setBlogs(response.data.items);
    });
  }, []);

  return (
    <div className="blog-container" id="blog">
      {blogs.map((blog) => (
        <div className="blog-card" key={blog.guid}>
                  <span></span>

          <div className="blog-thumbnail">
            <img src={blog.thumbnail} alt="Blog Thumbnail" />
          </div>
          <div className="blog-details">
            <h2 className="blog-title">
              <a href={blog.link}>{blog.title}</a>
            </h2>
            {/* <p className="blog-description">{blog.description}</p> */}
            {/* <p className="blog-author">By {blog.author}</p> */}
            <p className="blog-date">Published: {blog.pubDate}</p>
            <p className="blog-category">Category: {blog.categories[0]}</p>
            
              <a href={blog.link}><button>Learn</button></a>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;