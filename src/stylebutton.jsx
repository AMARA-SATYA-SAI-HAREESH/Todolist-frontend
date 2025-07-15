import "./stylebutton.css";
function ButtonStyle(props) {
    const { text,onClick } = props;
    return ( 
        
        <button className="styleButton" onClick={onClick}>{text}</button>
        
     );
}

export default ButtonStyle;