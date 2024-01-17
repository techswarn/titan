import React from "react";

const BlogCard = ({ subject, para }) => {
  console.log(subject);
  return (
    <>
      <div className="card-h">
        <h2>{subject}</h2>
        <div>{para}</div>
      </div>
    </>
  );
};

export default BlogCard;
