

const menu = document.querySelectorAll('#navegacion div ul li a');

const secciones = document.querySelectorAll('main section');



let elementoSeleccionado ='';

const perfil = document.querySelector('.section_profile');
const habilidades = document.querySelector('.section_skills');
const experiencia = document.querySelector('.section_experience');
const portafolio = document.querySelector('.section_briefcase');
const certificacion = document.querySelector('.section_certificates');

let map = new Map();

map.set('Perfil',perfil)
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
    if(seccionSeleccionada.classList.contains('no-mostrar')){
        seccionSeleccionada.classList.remove('no-mostrar');
    }
    menu.forEach(elemento =>{
        if(elemento.textContent !== seleccion.textContent){
            let otros = map.get(elemento.textContent);
            if(!otros.classList.contains('no-mostrar')){
                otros.classList.add('no-mostrar');
            }
        }
    });
};