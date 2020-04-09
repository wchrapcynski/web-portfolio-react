import React, { useState, useEffect } from "react";
import "./components.css";

function Blog() {
  const [blogListData, setBlogListData] = useState();
  const [displayData, setDisplayData] = useState();
  const [next, setNext] = useState(null);
  const [previous, setPrevious] = useState(null);
  const [blogListUrl, setBlogListUrl] = useState("http://127.0.0.1:8000/");

  const getPosts = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setBlogListData(res);
      })
      .catch((err) => {
        console.log("There was an error retreiving the data.");
      });
  };

  useEffect(() => {
    getPosts(blogListUrl);
  }, [blogListUrl]);

  useEffect(() => {
    if (blogListData) {
      setDisplayData(
        blogListData.results.map((data, key) => {
          let date = new Date(data.created_date);
          console.log(date);
          return (
            <div className="blog" key={key}>
              <div className="blog-header">
                <div className="blog-title">{data.title}</div>
                <div className="blog-created">
                  {date.toString().substring(0, 10)},{" "}
                  {date.toString().substring(11, 15)}{" "}
                </div>
              </div>
              <div className="blog-body">
                <div className="blog-text">{data.text}</div>
              </div>
            </div>
          );
        })
      );

      if(blogListData.next) {
        setNext(blogListData.next)
      } else {
        setNext(null)
      }

      if(blogListData.previous) {
        setPrevious(blogListData.previous)
      } else {
        setPrevious(null)
      }
    }
  }, [blogListData]);

  const nextPage = () => {
    console.log("Done")
    setBlogListUrl(next);
  }

  const previousPage = () => {
    console.log("Done")
    setBlogListUrl(previous);
  }

  return (
    <div>
      <div className="blog-pagination">
        <button className="blog-pagination-previous" onClick={() => previousPage()} disabled={!previous}>Previous 5</button>
        <button className="blog-pagination-next" onClick={() => nextPage()} disabled={!next}>Next 5</button>
      </div>
      <div className="blog-display">{displayData}</div>
    </div>
  );
}

export default Blog;
