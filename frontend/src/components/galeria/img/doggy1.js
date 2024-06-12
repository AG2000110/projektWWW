import React, { useState, useEffect } from "react";
import Comment from "./comment";
import CommentForm from "./commentForm";
import "./doggy.css"

const Doggy1 = () => {
    
  const [comments, setComments] = useState([]); //create new blank table, setComments to updating comments

  useEffect(() => {
    const savedComments = localStorage.getItem("comments");  //dowload comments from localStorage to savedComments
    if (savedComments) {
      setComments(JSON.parse(savedComments));               //now comments is not blank
    }
  }, []);

  const addComment = (text) => {
    const newComments = [...comments, text];        //create table with old comments and new comment 
    setComments(newComments);                       //now 'comments' => 'newComments'
    localStorage.setItem("comments", JSON.stringify(newComments));   //"comments" on LocalStorage => "newComments"
    window.scrollTo(0,document.body.scrollHeight);
  };

  const deleteComment = (index) => {
    const newComments = [...comments];
    newComments.splice(index, 1);           //delete 1 element on index position
    setComments(newComments);
    localStorage.setItem("comments", JSON.stringify(newComments));
  };

  return (
    <div className="doggy-container">
      <img className="doggy-img" src="https://i.wpimg.pl/800x0/kochamyzwierzaki-pl.wpcdn.pl/img/2019/08/slodkie-pieski-1.jpg" alt="Obrazek" />
      <br></br>
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

export default Doggy1;
