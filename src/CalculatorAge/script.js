const btn = document.querySelector('button');
var day = document.getElementById('day');
var month = document.getElementById('month');
var year = document.getElementById('year');
var calendary = [day, month, year]
var aviso = document.querySelectorAll('.aviso');
var label = document.querySelectorAll('label');


btn.addEventListener('click', CheckInputs)


function CheckInputs(){
  for (let i = 0; i < 3; i++) {
    aviso[i].style.opacity = 0;
    label[i].style.color = 'var(--Smokey-grey)'
    calendary[i].style.borderColor = 'var(--Smokey-grey)' 
  }

  let contador = 0;
  calendary.forEach(element => {
    if(element.value == ''){
      aviso[contador].style.opacity = 1
      label[contador].style.color = `var(--Light-red)`
      element.style.borderColor = `var(--Light-red)`
      aviso[contador].textContent = 'This field is required'
    }
    contador++  
  })

  if (year.value > new Date().getFullYear() || year.value <= 0) {
    aviso[2].textContent = 'Must be in a past'
    aviso[2].style.opacity = 1
    label[2].style.color = `var(--Light-red)`
    year.style.borderColor = `var(--Light-red)`
    if(year.value <= 0){
        aviso[2].textContent = 'Must be a valid year'
        return btn.removeEventListener('click', CheckYourAge)
    }
    return btn.removeEventListener('click', CheckYourAge)
  } 
  if (month.value > 12 || month.value < 1) {
    aviso[1].textContent = 'Must be a valid month'
    aviso[1].style.opacity = 1
    label[1].style.color = `var(--Light-red)`
    month.style.borderColor = `var(--Light-red)`
    return btn.removeEventListener('click', CheckYourAge)
  }
  
  if(day.value > 28){

    aviso[0].style.opacity = 1
    label[0].style.color = `var(--Light-red)`
    day.style.borderColor = `var(--Light-red)`
    

    if(month.value == 2){
      aviso[0].textContent = 'Must be a valid day'
      return btn.removeEventListener('click', CheckYourAge)
    }

    else if (day.value == 31){

      if ([4, 6, 9, 11].includes(Number(month.value))) {
        aviso[0].textContent = 'Must be a valid day' 
        return btn.removeEventListener('click', CheckYourAge)
      }
    }
    else if(day.value >= 32){
      aviso[0].textContent = 'Must be a valid day'
      return btn.removeEventListener('click', CheckYourAge)
    }

   
  }
  else if (day.value < 1){
    aviso[0].style.opacity = 1
    label[0].style.color = `var(--Light-red)`
    day.style.borderColor = `var(--Light-red)`
    aviso[0].textContent = 'Must be a valid day'
    return btn.removeEventListener('click', CheckYourAge)
  }
  
  return btn.addEventListener('click', CheckYourAge)
}


btn.addEventListener('click', CheckYourAge)

function CheckYourAge(){
  let tela = document.querySelectorAll('pre');
    for (let i = 0; i <= 2; i++) {
          tela[i].style.fontSize = 5 + 'rem'
    }

  let esseAno = new Date().getFullYear()
  let InputYear = esseAno - Number(year.value)
  
  let esseMes = new Date().getMonth()+1
  let InputMonth = esseMes - Number(month.value)
    
  let esseDia = new Date().getDate()
  let InputDay = esseDia - Number(day.value)
    
    
    if(InputMonth < 0){
        InputYear--
        InputMonth=+ 12
    }

    if(InputDay < 0){
      if([1, 3, 5, 7, 8, 10, 12].includes(InputMonth)){
        InputDay+=31
        }
        else if([4, 6, 9, 11].includes(InputMonth)){
          InputDay+=30
        }
        else{
          InputDay+=28
        }
      InputMonth--
    }

  let i = 0
    for (var inputCalend of [InputYear, InputMonth, InputDay]) {
      if(inputCalend < 0 ){
        aviso[i].style.opacity = 1
        label[i].style.color = `var(--Light-red)`
        calendary[i].style.borderColor = `var(--Light-red)`
        aviso[i].textContent = 'Must be in a past'
        return tela[i].textContent = `--`
      }
      if(inputCalend < 10){
      inputCalend = `0${inputCalend}`
      }
      tela[i].textContent = inputCalend
      i++
    }
  }