function digitarNumerosNoInputComButton(inputId, valor) {
    return () => {
      const input = document.getElementById(inputId);
      if (input) {
        input.focus();
        if (valor === 'C') {
            input.value = '';
            return;
          }
    
          if (valor === '<=') {
            input.value = input.value.slice(0, -1);
            return;
          }
    
          
          const symbols = ['+', '-', '*', '/'];
          if (valor === ',') {
            const lastSymbolIndex = Math.max(
              input.value.lastIndexOf('+'),
              input.value.lastIndexOf('-'),
              input.value.lastIndexOf('*'),
              input.value.lastIndexOf('/')
            );
            const lastNumber = input.value.slice(lastSymbolIndex + 1);
            if (lastNumber.indexOf(',') === -1) {
              input.value += valor;
            }
            return;
          }
    
          if (symbols.includes(valor)) {            
            input.value = input.value.replace(/[+\-*/]$/, '') + valor;
            return;
          }
        
          if (valor === '=') {
            try {              
              input.value = eval(input.value.replace(/,/g, '.')).toString().replace(/\./g, ',');
            } catch (e) {
              input.value = 'Erro';
            }
            return;
          }

        input.value += valor;
      }
    };
  }
  
  export default digitarNumerosNoInputComButton;