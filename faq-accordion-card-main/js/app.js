console.log('working...')

const datos = [    
    {id:1, contenido:'How many team menbers can I invite?',
         respuesta: 'invite'},
    {id:2, contenido:'What is the maximum file upload size?',
         respuesta: 'No more than 2GB. All files in your account must fit your allotted storage space.'},
    {id:3, contenido:'How do I reset my password?',
         respuesta: 'password resest'},
    {id:4, contenido:'Can I cancel my subscription?',
         respuesta: 'cancel subscription'},
    {id:5, contenido:'Do you provide additional support?',
         respuesta: 'additional support'},    
];

window.onload = cargarDatos();

function cargarDatos(){    

    const faq = document.querySelector('#faq');     
    
    for(let parrafo of datos){
        faq.innerHTML += `<div id="${parrafo.id}">
                            <p>${parrafo.contenido} 
                            <img class="flecha" src="./images/icon-arrow-down.svg" alt="">
                            </p>
                            <span class="hidden">${parrafo.respuesta}</span>
                         </div>
                         <hr>`;
    }    
}

const faq = document.getElementById('faq');

faq.addEventListener('click', elegirTag);



function elegirTag(e){
    
    const verificar = e.target.tagName;
    
    if(verificar === "P") girarFlecha(e.target.childNodes[1], e.path[0], e.path[1].childNodes[3])
    if(verificar === "IMG") girarFlecha(e.target, e.path[1], e.path[2].childNodes[3])
}

function girarFlecha(etiqueta,etiquetaParrafo, etiquetaSpan){             
    
    if(!etiquetaSpan.classList[0]){        
        etiquetaSpan.classList.add('hidden');
        etiqueta.classList.remove('arrow-up');
        etiquetaParrafo.classList.remove('bold');
        return        
    } 
    
    //reinicia la lista a su estado inicial 
    limpiarEleccion();
    
    //muestra la respuesta del elemento seleccionado
    etiquetaSpan.classList.remove('hidden'); 
    etiqueta.classList.add('arrow-up');    
    etiquetaParrafo.classList.add('bold');              
    
}


function limpiarEleccion(){    
    for(let item of datos){        

        let parrafoId = document.getElementById(item.id);

        let span = parrafoId.childNodes[3];            
            span.classList.add('hidden');
        let p = parrafoId.childNodes[1];
            p.classList.remove('bold');
        let i = parrafoId.childNodes[1].childNodes[1];
            i.classList.remove('arrow-up');
    }
}



