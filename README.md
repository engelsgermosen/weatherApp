# Aplicacion del clima
Este proyecto es una aplicación web sencilla donde los usuarios ingresan el nombre de una ciudad para obtener información climática actual, incluyendo temperatura, sensación térmica, temperatura máxima y mínima, y humedad. La interfaz está construida con HTML y CSS, mientras que JavaScript utiliza la API de OpenWeatherMap para obtener y mostrar datos del clima en tiempo real.

# Guía para Ejecutar el Proyecto

<ol>
  <li>Clona el repositorio del proyecto.</li>
  <li>Asegúrate de tener Node.js y npm instalados.</li>
  <li>Dentro de la carpeta del proyecto, ejecuta <code>npm install</code> para instalar las dependencias.</li>
  <li>
    Obtener una API Key en OpenWeatherMap:
    <ul>
      <li>Ve a <a href="https://openweathermap.org/">OpenWeatherMap</a> y crea una cuenta (o inicia sesión si ya tienes una).        </li>
      <li>Dirígete a tu perfil y selecciona "API Keys".</li>
      <li>Copia tu API Key (puedes generar una nueva si es necesario)</li>
      <li>Luego en el proyecto en la raiz del mismo crea una archivo <code>.env</code></li>
      <li>En este archivo escribe<code>VITE_API_KEY=API_Key</code>sin espacios ni comillas justo como se muestra aqui.</li>
    </ul>
  </li>
  <li>
    Ejecuta <code>npm run dev</code>para iniciar el proyecto en modo de desarrollo.
    <ul>
      <li>Esto iniciará el proyecto en modo desarrollo, abriéndolo en tu navegador.
      </li>
    </ul>
  </li>
</ol>
