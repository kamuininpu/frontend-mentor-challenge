console.log('working...')
const emailValidator = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

const boton = document.querySelector('#boton');

const validarCampos = () => {        
    const name = document.querySelector('#name'),
          last = document.querySelector('#last'),
          address = document.querySelector('#address'),
          password = document.querySelector('#password');          
    
    if(name.value == ''){
        document.querySelector('#nameError').innerHTML = 'First Name cannot be empty';
        name.classList.add('alert');
    }else{
        document.querySelector('#nameError').innerHTML = '';
        name.classList.remove('alert');
        name.classList.remove('alert');
    }
    if(last.value == ''){
        document.querySelector('#lastError').innerHTML = 'Last Name cannot be empty';
        last.classList.add('alert');
    }else{
        document.querySelector('#lastError').innerHTML = '';
        last.classList.remove('alert');
    }
    if(address.value == ''){
        document.querySelector('#addressError').innerHTML = 'Email cannot be empty';
        address.classList.add('alert');  
        address.classList.remove('error-email');   
        address.placeholder = 'Email Address';   
    }else if(!emailValidator.test(address.value)){
        document.querySelector('#addressError').innerHTML = 'Looks like this is not an email';
        address.classList.add('alert');
        address.value = '';
        address.placeholder = 'email@example/com';
        address.classList.add('error-email');
    }else{
        document.querySelector('#addressError').innerHTML = '';
        address.classList.remove('alert');
        address.classList.remove('error-email');
        address.placeholder = 'Email Address';
    }
    if(password.value == ''){
        document.querySelector('#passwordError').innerHTML = 'Password cannot be empty';
        password.classList.add('alert');
    }else{
        document.querySelector('#passwordError').innerHTML = '';
        password.classList.remove('alert');
    }
    
}


boton.addEventListener('click', validarCampos);