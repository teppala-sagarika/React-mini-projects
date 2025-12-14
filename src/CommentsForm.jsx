import { useState } from "react";
import { useFormik } from 'formik';

 const validate = values => {
   const errors = {};
   if (!values.username) {
     errors.username = 'Username cannot be empty';
   }
 
   return errors;
 };

export default function CommentsForm({addNewComment}){
    // let [formData,setFormData]=useState({
    //     username:"",
    //     comment:"",
    //     rating:5
    // });
     const formik = useFormik({
     initialValues: {
       username: '',
       comment: '',
       rating: 5,
     },
     validate,
    onSubmit: values => {
  addNewComment(values);   //this adds the new div
  formik.resetForm();      // clears the form
},
   });
    // let handleInputChange=(event)=>{
    //     setFormData((curData)=>{
    //         return {...curData,[event.target.name]: event.target.value }; //[computed property value]
    //     });
    // };
    // let handleSubmit=(event)=>{
    //   //  console.log(formData);
    //     addNewComment(formData);
    //     event.preventDefault();
    //     setFormData({
    //         username:"",
    //         comment:"",
    //         rating:5
    //     });
    // };
    return(
        <>
        <h3>Add a Comment...</h3>
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input id="username" placeholder="username" type="text" name="username" value={formik.values.username}  onChange={formik.handleChange}/>
       {formik.errors.username ? <p style={{color:"red"}}>{formik.errors.username}</p> : null}
                <br/> <br/> <br/>
                <label htmlFor="comment">Remarks:</label>
                <textarea id="comment" placeholder="Add your Remarks here.." name="comment" value={formik.values.comment}  onChange={formik.handleChange}></textarea>
                <br/> <br/> <br/>
                <label htmlFor="rating">Rating:</label>
                <input id="rating" type="number" name="rating" value={formik.values.rating}  onChange={formik.handleChange}/>
                <br/> <br/> <br/>
                <button type="submit">Submit</button>
            </form>
        </div>       
        </>
    );
}