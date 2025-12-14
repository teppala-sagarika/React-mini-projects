function sayHello(){
    console.log("hello");
}
function sayBye(){
    console.log("Bye ra bittu");
}
function sayHi(){
    console.log("hai haai hai");
}
function ButtonClick(){
    return(
        <>
        <button onClick={sayHello}>Click for Hello</button> {/* click event */}
        <p onMouseOver={sayBye}>Cheppu akka bye</p> {/*non click event*/}
        <button onDoubleClick={sayHi}>Click for Hi</button>
        </>
    );
}
export default ButtonClick;