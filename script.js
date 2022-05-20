version="1.1"
              id="Layer_1"
              width="20"
              height="20"
              stroke="black"
              x="0px"
              y="0px"
              viewBox="0 0 300.003 300.003"
              stroke="#F04F17"

              const getCurrentYear = () => {
                const d = new Date();
                return d.getFullYear(); // 2022
              };
              
              // Función que agrega el año actual en el Footer
              const setYearIdentifierSpan = () => {
                const printYearInDOM = document.getElementById("yearIdentifier");
                printYearInDOM.innerText = getCurrentYear();
              };
              
              // Arreglo de Redes sociales
              const SocialNetworks = [
                { name: "Twitter", url: "/twitter", icon: "" },
                { name: "Facebook", url: "https://www.facebook.com/", icon: "" },
                { name: "Linkedin", url: "/linkedin", icon: "" },
                { name: "Gmail", url: "/gmail", icon: "" },
              ];
              
              // Que se necita par imprimir estas redes sociales en el Front?
              // Necesitamos inyectar nodos HTML en el DOM desde alguna funcionalidad
              // 1- Iterar o recorrer los elementos
              // 2- Insertar cada iteracion como un elemento HTML
              // 3- Renderizar esos elementos en el Front     ->     InnerHTML, appendChild
              
              // Función que ejecuta todo el proceso de creación de red social y
              // lo inyecta en el HTML
              function setSocialNetworksInHTML() {
                const tagSocialNetworks = document.getElementById("socialNetworks");
                var innerHtmlSocialNetworks = "";
                SocialNetworks.forEach((social) => {
                  let socialTemp;
                  if (social.name === "Twitter") {
                    socialTemp = `<span class="social--burbble" style="background-color: #0EAADC;">${social.name}</span>`;
                  } else if (social.name === "Facebook") {
                    socialTemp = `<span class="social--burbble" style="background-color: #0E59DC;">${social.name}</span>`;
                  } else if (social.name === "Linkedin") {
                    socialTemp = `<span class="social--burbble" style="background-color: #2956CF;">${social.name}</span>`;
                  } else if (social.name === "Gmail") {
                    socialTemp = `<span class="social--burbble" style="background-color: #CF2956;">${social.name}</span>`;
                  }
              
                  innerHtmlSocialNetworks = innerHtmlSocialNetworks + socialTemp;
                });
                tagSocialNetworks.innerHTML = innerHtmlSocialNetworks;
              }
              
              const ProyectosDesarrollados = [
                {
                  name: "Portafolio",
                  descripcion: `This is a wider card with supporting text 
                      below as a natural lead-in to additional content. 
                      This content is a little bit longer.`,
                  imagen: "",
                  url: "",
                  tecnologias: ["Html", "CSS", "JS", "Bootstrap"],
                  tiempoDesarrollo: "5 días",
                },
                {
                  name: "Tienda de celulares",
                  descripcion: `This is a wider card with supporting text 
                  below as a natural lead-in to additional content. 
                  This content is a little bit longer.`,
                  imagen: "",
                  url: "",
                  tecnologias: ["Html", "CSS", "JS", "Bootstrap"],
                  tiempoDesarrollo: "10 días",
                },
              ];
              
              // Pila de ejecución hasta que el DOM esta completamente cargado
              document.addEventListener("DOMContentLoaded", function (e) {
                setYearIdentifierSpan();
                setSocialNetworksInHTML();
              });
              
              // Que es una instancia de una clase?
              // Basicamnete es una llamada a un set de funciones,
              // caracteristicas entre otras cosas que me permite reutilizar,
              // metodos, funciones o procesos de otros modulos ya desarrollados anteriormente
              // o des librerias de terceros o externas.
              
              // POO -> Programación orientada a objetos
              
              // Función anonima: Función que se
              // ejecuta pero que no tiene un nombre establecido
              // me permite hacer acciones sin declarar un nombre a la función
              
              // Ejemplos de iteracion con For y Foreach
              // const listaSuper = ["refresco", "agua", "jabon", "fruta"];
              
              // for (let i = 0; i < listaSuper.length; i++) {
              //   console.log(`Item: ${listaSuper[i]} comprado`);
              // }
              
              // listaSuper.forEach((productp) => {
              //   console.log(`Item: ${productp} comprado`);
              // });
              

              var swiper = new Swiper('.swiper-container', {
                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev'
                },
                slidesPerView: 1,
                spaceBetween: 10,
                // init: false,
                pagination: {
                  el: '.swiper-pagination',
                  clickable: true,
                },
                
                breakpoints: {
                  620: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                  },
                  680: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                  },
                  920: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                  },
                  1240: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                  },
                } 
                  });

                  momentoActual = new Date()
                  hora = momentoActual.getHours()
minuto = momentoActual.getMinutes()
segundo = momentoActual.getSeconds()
var horaImprimible = hora + " : " + minuto + " : " + segundo
document.form_reloj.reloj.value = horaImprimible
setTimeout("mueveReloj()",1000)
str_segundo = new String (segundo)
if (str_segundo.length == 1)
    segundo = "0" + segundo