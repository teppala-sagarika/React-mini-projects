function handleSubmit(event){
    event.preventDefault();
    console.log("form submitted");
}
function Form(){
    return(
        <form onSubmit={handleSubmit}>
            <input placeholder="enter something"/>
            <button>Click Me</button>
        </form>
    );
}

export default Form;