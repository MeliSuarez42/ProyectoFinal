let boton = document.getElementById('Resumen');
let respuesta = document.getElementById('Respuesta');




boton.addEventListener('click',cambio);


function cambio() {
  const Estudiante = document.getElementById('Estudiante').value;
  let amount1; 

  if (Estudiante == 'Estudiante') {
    amount1 = 40;
  
  } else (Estudiante == 'Estudiante') 
    amount1 = 40;
  
  respuesta.innerHTML = parseFloat(amount1);

}  

function cambio(){
  const Trainee = document.getElementById('Trainee').value;
  let amount2; 

  if (Estudiante == 'Trainee') {
    amount2 = 100;
  
  } else (categoria == 'Trainee') 
    amount2 = 100;
  
  
  respuesta.innerHTML = parseFloat(amount2);

}

function cambio(){
  const categoria = document.getElementById('Junior').value;
  let amount3; 


  
  if (Estudiante == 'Junior') {
    amount3 = 170;
  
  } else (categoria == 'Junior') 
    amount3 = 170;
  
  
  respuesta.innerHTML = parseFloat(amount3);

}





    





