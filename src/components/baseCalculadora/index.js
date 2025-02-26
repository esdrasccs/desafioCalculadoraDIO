import './index.css';


function Calculadora({children}) {
    return (
        <div>
            {/*Renderiza os childrens da calculadora*/}
            {children}
        </div>
    );
}


export default Calculadora;