let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');

}

window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
  }

  const faqs = document.querySelectorAll(".bloque-faq");

  faqs.forEach((faq)=>{
    faq.addEventListener("click", () =>{

        faq.classList.toggle("active");
    });



  });




  const form = document.getElementById("promo")
  const email = document.getElementById("correo")
  const parrafo = document.getElementById("warnings")
  const mensaje = document.getElementById("mensaje")
  
  form.addEventListener("submit", e=>{
      e.preventDefault()
      let warnings = ""
 
      let noEntrar = false
      let regexEmail = /^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail|edu)\.(?:|com|ar)+$/
      parrafo.innerHTML = ""
      mensaje.innerHTML = ""
      if(!regexEmail.test(email.value)){
          warnings += `El email no es valido <br>`
          
          noEntrar = true
      }
  
      if(noEntrar){
        
          parrafo.innerHTML = warnings
          
      }else{
          parrafo.innerHTML = "SUSCRIPCION EXISTOSA"
          mensaje.innerHTML = "Enviado"
          email.value = ""
          
      }
      setTimeout(() => {
        limpiar()
      }, 3000);
  })

  function limpiar(){
    parrafo.innerHTML = ""
    mensaje.innerHTML = ""
  }
