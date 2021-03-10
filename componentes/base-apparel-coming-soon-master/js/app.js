console.log('working...')

const emailValidator = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
const boton = document.querySelector('#boton');
const input = document.querySelector('input');

const validar = () => {
    const boton = document.querySelector('#boton'),
          respuesta = document.querySelector('#respuesta'),
          email = document.querySelector('input');    
    if(emailValidator.test(email.value)){
        respuesta.innerHTML = '';    
        boton.classList.remove('right');
        email.classList.remove('error');
    }else{
        respuesta.innerHTML = 'Please provide a valid email';
        boton.classList.add('right');
        email.classList.add('error');
    }   
}


boton.addEventListener('click',validar);
input.addEventListener('keypress', (e) => e.keyCode === 13 ? validar() : false);