/*=========================================================
            MURCIA EN MOVIMIENTO
        Programación Didáctica EF
=========================================================*/

/*---------------------------------------------
Desplazamiento suave del menú
---------------------------------------------*/

document.querySelectorAll('nav a').forEach(enlace => {

    enlace.addEventListener('click', function(e){

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute('href'));

        if(destino){

            destino.scrollIntoView({

                behavior:'smooth'

            });

        }

    });

});

/*---------------------------------------------
Animación al aparecer las unidades
---------------------------------------------*/

const elementos = document.querySelectorAll(".unidad,.card");

const observador = new IntersectionObserver((entradas)=>{

    entradas.forEach(entrada=>{

        if(entrada.isIntersecting){

            entrada.target.style.opacity="1";

            entrada.target.style.transform="translateY(0)";

        }

    });

},

{

    threshold:0.15

});

elementos.forEach(el=>{

    el.style.opacity="0";

    el.style.transform="translateY(40px)";

    el.style.transition="all .8s ease";

    observador.observe(el);

});

/*---------------------------------------------
Botón volver arriba
---------------------------------------------*/

const boton=document.createElement("button");

boton.innerHTML="⬆";

boton.id="volverArriba";

document.body.appendChild(boton);

boton.style.position="fixed";
boton.style.bottom="25px";
boton.style.right="25px";
boton.style.width="55px";
boton.style.height="55px";
boton.style.borderRadius="50%";
boton.style.border="none";
boton.style.background="#0f766e";
boton.style.color="white";
boton.style.fontSize="22px";
boton.style.cursor="pointer";
boton.style.boxShadow="0 8px 20px rgba(0,0,0,.25)";
boton.style.display="none";
boton.style.zIndex="999";

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        boton.style.display="block";

    }else{

        boton.style.display="none";

    }

});

boton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/*---------------------------------------------
Año automático del footer
---------------------------------------------*/

const pie=document.querySelector("footer");

if(pie){

    const año=new Date().getFullYear();

    const linea=document.createElement("p");

    linea.style.marginTop="15px";

    linea.innerHTML="Web interactiva · Murcia en Movimiento · "+año;

    pie.appendChild(linea);

}
