
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let inputs = document.querySelectorAll('#formulario input')
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//    

let title = document.querySelector('#title')
title.focus()


const expresiones = {               
	title: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	rating: /^([VE]-)?[0-9]{1,2}$/i, 
  release_date:/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/,
    length: /^([VE]-)?[0-9]{2,3}$/i,
}

 const campos = {
    titulo:false,
     rating: false,
     awards: false,
     release_date: false,
     length: false,
     genre_id: false
   }



const validarFormulario = (e) => {
    switch (e.target.name) {
      case "title":
      validarCampo(expresiones.title, e.target, "titulo")
       
      break;
     
      case "rating":
          validarCampo(expresiones.rating, e.target, "rating")
          let rating = document.getElementById("rating")
          if(rating.value > 10){
            campos["rating"] = false
          }
      
      break;
   
      case "awards":
        validarCampo(expresiones.rating, e.target, "awards")
        if(inputs.value > 10){
          campos['awards'] = false
        }
       
      break;

      case "release_date":
        validarCampo(expresiones.release_date, e.target, "release_date")
        break;

      
      case "length":
        validarCampo(expresiones.length, e.target, "length")
        if(length.value > 60 < 360){
          campos['length'] = true
        }
       
      break;

      case "genre_id":
        validarGenre()

      break
   
    }
   
   }

   function validarGenre(){
    var genre =document.getElementById('grupo__genre_id');
    if(genre.value.trim() == 0 || genre.value.trim() == ""){
     genre.classList.add("is-invalid");
     campos["genre_id"] = false
      } else {
        genre.classList.remove("is-invalid");
        genre.classList.add("is-valid");
        campos["genre_id"] = true
      }
    }




   const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.add('is-valid');
		document.getElementById(`grupo__${campo}`).classList.remove('is-invalid');
	  campos[campo]= true;
  } else {
		document.getElementById(`grupo__${campo}`).classList.remove('is-valid');
		document.getElementById(`grupo__${campo}`).classList.add('is-invalid');	
    document.querySelector(".errores").innerHTML = ""
    campos[campo]= false;
  }
}


console.log(campos)



inputs.forEach((input)=>{
    input.addEventListener('keyup', validarFormulario)
    input.addEventListener('blur', validarFormulario)
  })

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    const elements = e.target.elements;
  let error = false;

  for (let i = 0; i < elements.length -4; i++) {
  if (elements[i].value === ""){
    error = true
    document.getElementById("grupo__" + elements[i].name).classList.add('is-invalid')
  }

}
if(campos.title && campos.rating && campos.awards && campos.length && campos.release_date && campos.genre_id){
  formulario.submit();
}

})

