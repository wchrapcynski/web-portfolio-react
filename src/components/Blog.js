import React, { useState, useEffect } from "react";
import "./components.css";

function Blog() {
  const [blogListData, setBlogListData] = useState(null);
  const [displayData, setDisplayData] = useState(null);
  const [next, setNext] = useState(null);
  const [previous, setPrevious] = useState(null);
  const [blogListUrl, setBlogListUrl] = useState(
    "http://wchrapcynski.pythonanywhere.com/"
  );
  const [pageNumber, setPageNumber] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(null);
  const itemsPerPage = 5;

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
          if (data.published) {
            return (
              <div className="blog" key={key}>
                <div className="blog-header">
                  <div className="blog-title">{data.title}</div>
                  <div className="blog-created">
                    {date.toString().substring(0, 10)},{" "}
                    {date.toString().substring(11, 15)}
                  </div>
                </div>
                <div className="blog-body">
                  <div className="blog-illustration">
                    <div className={data.image ? "blog-image" : "hidden"}>
                      <img src={data.image} alt="blog"></img>
                    </div>
                  </div>
                  <div className="blog-text">{data.text}</div>
                </div>
                <div className="blog-footer">
                  <div className="blog-link">
                    <a
                      href={data.link && data.link}
                      target="_blank"
                      rel="noopener noreferrer">
                      {data.link && data.link}
                    </a>
                  </div>
                </div>
              </div>
            );
          }
        })
      );

      if (blogListData.next) {
        setNext(blogListData.next);
      } else {
        setNext(null);
      }

      if (blogListData.previous) {
        setPrevious(blogListData.previous);
      } else {
        setPrevious(null);
      }

      setNumberOfPages(Math.ceil(blogListData.count / itemsPerPage));
    }
  }, [blogListData, pageNumber]);

  const nextPage = () => {
    setBlogListUrl(next);
    setPageNumber(pageNumber + 1);
  };

  const previousPage = () => {
    setBlogListUrl(previous);
    setPageNumber(pageNumber - 1);
  };

  return (
    <div>
      <div className="blog-pagination">
        <button
          className="blog-pagination-previous"
          onClick={() => previousPage()}
          disabled={!previous}>
          Prev 5
        </button>
        <div className="blog-page-number">
          {pageNumber} of {numberOfPages}
        </div>
        <button
          className="blog-pagination-next"
          onClick={() => nextPage()}
          disabled={!next}>
          Next 5
        </button>
      </div>
      <div className="blog-display">{displayData}</div>
    </div>
  );
}

export default Blog;
