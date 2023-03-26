

const menu = document.querySelectorAll('.navegacion ul li a');

console.log(menu);
const secciones = document.querySelectorAll('main section');




// Ocultar y mostrar secciones
let elementoSeleccionado ='';

const perfil = document.querySelector('.section_profile');
const habilidades = document.querySelector('.section_skills');
const experiencia = document.querySelector('.section_experience');
const portafolio = document.querySelector('.section_briefcase');
const certificacion = document.querySelector('.section_certificates');

let map = new Map();

map.set('Acerca de mí',perfil)
   .set('Habilidades',habilidades)
   .set('Experiencia',experiencia)
   .set('Portafolio',portafolio)
   .set('Certificados',certificacion);

menu.forEach(elemento =>{ 
    elemento.onclick = cambiarSeccion;
});


function cambiarSeccion(e){
    console.log(e.target)

    const seleccion = e.target;
    let seccionSeleccionada = map.get(seleccion.textContent);
    console.log(seccionSeleccionada);
    if(seccionSeleccionada.classList.contains('no-mostrar')){
        seccionSeleccionada.classList.remove('no-mostrar');
        
    }
    menu.forEach(elemento =>{
        console.log(elemento.textContent);
        console.log(seleccion.textContent)
        if(elemento.textContent !== seleccion.textContent){
            let otros = map.get(elemento.textContent);
            console.log(otros);
            if(!otros.classList.contains('no-mostrar')){
                otros.classList.add('no-mostrar');
                
            }
        }
    });
    subrayar(e);
};

// Añadir clase de subrayado al enlace
function subrayar(e){
    
    const enlace = e.target;
    menu.forEach(seccion =>{
        if(seccion.classList.contains('subrayado')){
            seccion.classList.remove('subrayado');
        }
    })

    if(!enlace.classList.contains('subrayado')){
        enlace.classList.add('subrayado');
    }
    
}