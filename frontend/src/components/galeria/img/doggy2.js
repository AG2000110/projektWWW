import React, { useState, useEffect } from "react";
import Comment from "./comment";
import CommentForm from "./commentForm";
import "./doggy.css"

const Doggy2 = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
      const savedComments = localStorage.getItem("comments2");
      if(savedComments){
        setComments(JSON.parse(savedComments));
      }
    }, []);

    const addComment = (text) => {
      const newComments = [...comments, text];
      setComments(newComments);
      localStorage.setItem("comments2", JSON.stringify(newComments));
      window.scrollTo(0,document.body.scrollHeight);
    };

    const deleteComment = (index) => {
      const newComments = [...comments];
      newComments.splice(index, 1);
      setComments(newComments);
      localStorage.setItem("comments2", JSON.stringify(newComments));
    }

  return (
    <div className="doggy-container">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZcyxZbdVv2QYAlTv2gcGkqhsXNs7eBPJwCw&s" alt="doggy2" className="doggy-img" />
      <div className="comment-section">
      {comments.map((comment, index) => (
        <div className="comment-frame" key={index}>
          <Comment text={comment} />
          <button onClick={() => deleteComment(index)}>Usuń komentarz</button>
        </div>
      ))}
      <br></br>
      <CommentForm addComment={addComment} />
      </div>
    </div>
  );
};

export default Doggy2;
