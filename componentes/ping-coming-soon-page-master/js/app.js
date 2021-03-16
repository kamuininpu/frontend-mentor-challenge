console.log('working...')

const emailValidator = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
const boton = document.querySelector('button');

const validar = () => {
    const input = document.querySelector('input');    
    if(!emailValidator.test(input.value)){    
        document.querySelector('.message-error').innerHTML = 'Please provide a valid email address';
        input.classList.add('input-error');                
    }else{        
        document.querySelector('.message-error').innerHTML = '';
        input.classList.remove('input-error');          
    }
}

boton.addEventListener('click', validar);
