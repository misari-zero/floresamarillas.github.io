// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Él la estaba esperando con una flor amarilla", time: 16 },
  { text: "ella lo estaba soñando con la luz en su pupila", time: 23 },
  { text: "y el amarillo del Sol iluminaba la esquina", time: 31 },
  { text: "lo sentía tan cercano", time: 38.8 },
  { text: "lo sentía desde niña", time: 39.3 },
  { text: "ella sabía que él sabía que algún día pasaría", time: 46 },
  { text: "que vendría a buscarla con sus flores amarillas", time: 50 },
  { text: "no te apures, no detengas", time: 57.8 },
  { text: "el instante del encuentro", time: 58 },
  { text: "esta dicho que es un hecho", time: 61.8 },
  { text: "no la pierdas, no hay derecho", time: 63 },
  { text: "no te olvides que la vida casi nunca está dormida", time: 65 },
  { text: "en ese bar tan desierto nos esperaba el encuentro", time: 93 },
  { text: "ella llegó en limusina", time: 100 },
  { text: "amarilla, por supuesto", time: 102 },
  { text: "él se acercó de repente, la miró tan de frente", time: 108 },
  { text: "toda una vida soñada y no pudo decir nada", time: 116 },
  { text: "ella sabía que él sabía que algún día pasaría", time: 122 },
  { text: "que vendría a buscarla con sus flores amarillas", time: 127 },
  { text: "no te apures, no detengas", time: 134.5 },
  { text: "el instante del encuentro", time: 135 },
  { text: "esta dicho que es un hecho", time: 139 },
  { text: "no la pierdas, no hay derecho", time: 141 },
  { text: "no te olvides que la vida casi nunca está dormida", time: 143 },
  { text: "flores amarillas", time: 159 },
  { text: "ella sabía que él sabía que algún día pasaría", time: 167 },
  { text: "que vendría a buscarla con sus flores amarillas", time: 172 },
  { text: "no te apures, no detengas", time: 180 },
  { text: "el instante del encuentro", time: 181 },
  { text: "esta dicho que es un hecho", time: 183 },
  { text: "no la pierdas, no hay derecho", time: 185 },
  { text: "no te olvides que la vida casi nunca está dormida", time: 188 },
  { text: "ella sabía que él sabía", time: 197 },
  { text: "el sabía, ella sabía", time: 198 },
  { text: "que él sabía, ella sabía", time: 200 },
  { text: "y se olvidaron de sus...", time: 204 },
  { text: "flores amarillas", time: 206 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
// setTimeout(ocultarTitulo, 216000);
setTimeout(ocultarTitulo, 10000);