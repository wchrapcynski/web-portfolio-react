import React, { useState, useEffect } from "react";
import "./components.css";

function BlogThree() {
  const [blogListData, setBlogListData] = useState();
  const [displayData, setDisplayData] = useState();
  const blogList3Url = "http://127.0.0.1:8000/list3";

  const getThreePosts = (url) => {
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
    getThreePosts(blogList3Url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if(blogListData) {
      setDisplayData(
        blogListData.results.map((data, key) => {
          return (
            <div key={key}>
              <div>{data.title}</div>
              <div>{data.text}</div>
              <div>{data.created_date}</div>
            </div>
          );
        })
      );
    }
  }, [blogListData]);

  return <div>{displayData}</div>;
}

export default BlogThree;
