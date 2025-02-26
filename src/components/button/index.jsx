import "./index.css";

function Button({id, backgroundColor = 'rgb(182, 182, 182)', width='60px', children = '', onClick}) {
    return(
        <button id={id} style={{backgroundColor, width} } onClick={onClick}>
            {children}
        </button>
    )
}


export default Button;