import "./Comments.css";
import { useState } from "react";
import CommentsForm from "./CommentsForm"; 

export default function Comments(){
    const [commentss,setCommentss]=useState([{
        username:"@sagarika",
        comment:"great job!",
        rating:4
    }]);
    
    let addNewComment=(comment)=>{
        setCommentss((curComments)=>[...curComments,comment]);
    }

    return(
        <>
        <div>
        <h3>All Comments</h3>
        {commentss.map((comment,idx)=>(
            <div className="comment" key={idx}>
                <span>{comment.comment}</span>
                &nbsp;
                <span>(rating={comment.rating})</span>
                <p>-{comment.username}</p>
            </div>
        ))}
        </div>
        <hr></hr>
        <CommentsForm addNewComment={addNewComment}></CommentsForm>
        </>
    );
}