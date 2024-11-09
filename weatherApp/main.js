const api_key = import.meta.env.VITE_API_KEY;
const ciudad = document.querySelector('#input-city');
const temperatura = document.querySelector('#span-temp');
const sensacion = document.querySelector('#span-sensacion')
const temp_max = document.querySelector('#span-temp-max')
const temp_min = document.querySelector('#span-temp-min')
const humedad = document.querySelector('#span-humedad');


const formulario = document.querySelector('.formulario')
formulario.addEventListener('submit',(e)=>{
  e.preventDefault();
  buscarData();
})

ciudad.addEventListener("keydown",(e)=>{
  if(e.key === "Enter"){
    if(ciudad.value !==""){

      e.preventDefault();
      buscarData();
    }
  }
})

async function buscarData(){
  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad.value}&appid=${api_key}&units=metric`)
      if(res.status ===401){
        DivNoApiKey()
      }
      else if(res.status ===404){
        DivCiudadNoExiste();
          ciudad.value= "";
          temperatura.innerHTML =`0&deg;C`;
          sensacion.innerHTML = `0&deg;C`;
          temp_max.innerHTML = `0&deg;C`;
          temp_min.innerHTML = `0&deg;C`;
          humedad.innerHTML = `0%`;
      }else if(res.status ===200){
        const data = await res.json();
        const clima = data.main;
        temperatura.textContent = `${clima.temp}°C`;
        sensacion.textContent = `${clima.feels_like}°C`;
        temp_max.textContent = `${clima.temp_max}°C`;
        temp_min.textContent = `${clima.temp_min}°C`;
        humedad.textContent = `${clima.humidity}%`;
      }
  } catch (error) {
    DivError();
    console.log(error);
  }
}

function DivCiudadNoExiste(){
  const div = document.createElement('div')
  div.style.position ='fixed';
  div.style.top ='20px';
  div.style.right ='20px';
  div.textContent = "No existe una ciudad con ese nombre";
  div.style.fontSize = '1.25rem'
  div.style.padding = '1.5rem';
  div.style.backgroundColor='red';
  div.style.color ='#fff';
  div.style.borderRadius = '0.75rem';

  document.body.appendChild(div)

  setTimeout(()=>{
    div.remove();
  },4000)
}

function DivNoApiKey(){
  const div = document.createElement('div')
  div.style.position ='fixed';
  div.style.top ='20px';
  div.style.right ='20px';
  div.textContent = "Necesitas una API_KEY valida de OpenWeatherMap";
  div.style.fontSize = '1.25rem'
  div.style.padding = '1.5rem';
  div.style.backgroundColor='red';
  div.style.color ='#fff';
  div.style.borderRadius = '0.75rem';

  document.body.appendChild(div)

  setTimeout(()=>{
    div.remove();
  },4000)
}

function DivError(){
  const div = document.createElement('div')
  div.style.position ='fixed';
  div.style.top ='20px';
  div.style.right ='20px';
  div.textContent = "ERROR";
  div.style.fontWeight="900";
  div.style.fontSize = '1.25rem'
  div.style.padding = '1.5rem';
  div.style.backgroundColor='red';
  div.style.color ='#fff';
  div.style.borderRadius = '0.75rem';

  document.body.appendChild(div)

  setTimeout(()=>{
    div.remove();
  },4000)
}