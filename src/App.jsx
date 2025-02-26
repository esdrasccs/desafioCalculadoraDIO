import './App.css';
import Calculadora from './components/baseCalculadora/index';
import Input from './components/input';
import Button from './components/button';
import digitarNumerosNoInputComButton from './functions/digitarNumerosNoInputComButton';

function App() {
  return (
    <div id='App'>
      <Calculadora>
        <Input id="input1"></Input>
        <div className='row'>
          <Button onClick={digitarNumerosNoInputComButton("input1", '7')} children='7'></Button>
          <Button onClick={digitarNumerosNoInputComButton("input1", '8')} children='8'></Button>
          <Button onClick={digitarNumerosNoInputComButton("input1", '9')} children='9'></Button>
          <Button onClick={digitarNumerosNoInputComButton("input1",'C')}  backgroundColor='#99ff99' children='C'></Button>
          <Button onClick={digitarNumerosNoInputComButton("input1",'<=')} backgroundColor='red' children='<='></Button>
        </div>
        
        <div className='row'>
          <Button onClick={digitarNumerosNoInputComButton("input1", '4')} children='4'></Button>
          <Button onClick={digitarNumerosNoInputComButton("input1", '5')} children='5'></Button>
          <Button onClick={digitarNumerosNoInputComButton("input1", '6')} children='6'></Button>
          <Button onClick={digitarNumerosNoInputComButton("input1", '/')} children='/'></Button>
          <Button onClick={digitarNumerosNoInputComButton("input1", '*')} children='X'></Button>
        </div>

        <div className='row'>
          <Button onClick={digitarNumerosNoInputComButton("input1", '1')} children='1'></Button>
          <Button onClick={digitarNumerosNoInputComButton("input1", '2')} children='2'></Button>
          <Button onClick={digitarNumerosNoInputComButton("input1", '3')} children='3'></Button>
          <Button onClick={digitarNumerosNoInputComButton("input1", '-')} children='-'></Button>
          <Button onClick={digitarNumerosNoInputComButton("input1", '+')} children='+'></Button>
        </div>

        <div className='row'>
          <Button onClick={digitarNumerosNoInputComButton("input1", '0')} children='0'></Button>
          <Button onClick={digitarNumerosNoInputComButton("input1", '00')} children='00'></Button>
          <Button onClick={digitarNumerosNoInputComButton("input1", ',')} children=','></Button>
          <Button onClick={digitarNumerosNoInputComButton("input1", '=')} backgroundColor='#99ff99' width='120px' children='='></Button>
        </div>

      </Calculadora>
    </div>
  );
    

}

export default App;
