console.log('working...')

const usuarios = [
    {id:1,nombre:'Tanya Sinclair',carrera:'UX Engineer',texto:'“ I’ve been interested in coding for a while but never taken the jump, until now.     I couldn’t recommend this course enough. I’m now in the job of my dreams and so     excited about the future. ”', imagen:'image-tanya.jpg'},
    {id:2,nombre:'John Tarkpor',carrera:'Junior Front-end Developer',texto:'“ If you want to lay the best foundation possible I’d recommend taking this course.     The depth the instructors go into is incredible. I now feel so confident about     starting up as a professional developer. ”', imagen: 'image-john.jpg'}    
];


const cargarDatos = () => {

    const main = document.getElementsByTagName('MAIN')[0]; 
    
    main.innerHTML = `
    <section id="${0}">
        <article>
            <p class="comillas">${usuarios[0].texto}</p>
            <p class="nombre">${usuarios[0].nombre}
                <span class="profecion">${usuarios[0].carrera}</span>
            </p>
        </article>
        <figure>
            <img src="images/${usuarios[0].imagen}" alt="">
        </figure>
    </section>
`;
           
}


const imagenSiguiente = (e) => {
    const id = e.path[2].childNodes[1].childNodes[1].id;
    const siguiente = parseInt(id) + 1;   
    
    const usuario = usuarios.find((value, key) => key == siguiente);   
    if(usuario) {
        pintar(usuario,siguiente);      
    }else{
        cargarDatos();
    }
    
}

const imagenAnterior = (e) => {
    const id = e.path[2].childNodes[1].childNodes[1].id;
    const anterior = parseInt(id) - 1;    

    const usuario = usuarios.find((value, key) => key == anterior);   
    if(usuario) {
        pintar(usuario,anterior);      
    }else{
        ultimo();
    }
              
}

const ultimo = () => {
    const ultimoUsuario = usuarios[usuarios.length-1];
    pintar(ultimoUsuario,usuarios.length - 1);    
}

const pintar = (usuario, key) => {    
    const main = document.getElementsByTagName('MAIN')[0]; 
                main.innerHTML = `
                <section id="${key}">
                    <article>
                        <p class="comillas">${usuario.texto}</p>
                        <p class="nombre">${usuario.nombre}
                            <span class="profecion">${usuario.carrera}</span>
                        </p>
                    </article>
                    <figure>
                        <img src="images/${usuario.imagen}" alt="">
                    </figure>
                </section>
            `;
}






// ==== EVENTOS =======

window.onload = cargarDatos();


const prev = document.getElementById('prev');
const next = document.getElementById('next');

prev.addEventListener('click',imagenAnterior);
next.addEventListener('click',imagenSiguiente);
