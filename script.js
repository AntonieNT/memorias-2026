const fotosBoda = [
  "imagenes/boda/1.jpg",
  "imagenes/boda/2.jpg",
  "imagenes/boda/3.jpg",
];

const fotosBloopers = [
  "imagenes/bloppers/1.jpg",
  "imagenes/bloppers/2.jpg",
  "imagenes/bloppers/3.jpg",
];

const fotosLosDos = Array.from({ length: 21 }, (_, i) => `imagenes/losDos/${i + 1}.jpg`);

const fotosPao = [
  "imagenes/pao/1.jpg",
  "imagenes/pao/2.jpg",
  "imagenes/pao/3.jpg",
  "imagenes/pao/4.jpg",
  "imagenes/pao/5.jpg",
  "imagenes/pao/6.jpg",
  "imagenes/pao/7.jpg",
];

const frasesLosDos = [
  "De todos los caminos, mi favorito es el que camino contigo.",
  "Hay días que se vuelven recuerdos solo porque tú estabas ahí.",
  "Gracias por hacer que la vida se sienta menos pesada y más bonita.",
  "Contigo aprendí que el amor también se construye con paciencia.",
  "Me gusta que seamos equipo, incluso cuando toca echarle más ganitas.",
  "Tus abrazos tienen una forma muy bonita de hacerme sentir en casa.",
  "Cada foto contigo me recuerda que sí vale la pena seguir adelante.",
  "Me encanta compartir contigo lo simple, lo raro, lo nuevo y lo nuestro.",
  "A tu lado, hasta los días normales terminan teniendo algo especial.",
  "Gracias por ser mi compañera en esta etapa tan bonita de mi vida.",
  "Me gusta crecer contigo, cambiar contigo y seguir eligiéndote.",
  "Tú haces que las aventuras tengan más sentido.",
  "No necesito un lugar perfecto si estás conmigo.",
  "Nuestra historia está hecha de momentos pequeños que valen muchísimo.",
  "Me gusta mirarte y pensar: qué bonito es tenerte en mi vida.",
  "Gracias por caminar conmigo aun cuando el camino cambia.",
  "Eres mi lugar seguro en medio de todo.",
  "Me encanta que lo nuestro sea real, con amor, esfuerzo y corazón.",
  "Cada recuerdo contigo se queda guardado en mi corazoncito.",
  "Tú y yo, aprendiendo, riendo y construyendo algo nuestro.",
  "Si pudiera volver a elegir, te elegiría otra vez.",
];

const frasesPao = [
  "Eres una mujer valiente, incluso cuando el miedo intenta hablar primero.",
  "Tu forma de seguir adelante me inspira más de lo que imaginas.",
  "Tienes una luz muy tuya, de esas que se sienten bonito en el corazón.",
  "Admiro tu resiliencia y esa manera tan tuya de levantarte.",
  "Eres ternura, fuerza y corazón en una sola personita.",
  "Me encanta tu curiosidad por descubrir el mundo.",
  "Mi niña hermosa, gracias por existir y por hacer mi vida más bonita.",
];

function crearCarrusel(id, fotos, captions = []) {
  const contenedor = document.getElementById(id);
  if (!contenedor) return;

  fotos.forEach((src, index) => {
    const slide = document.createElement("article");
    slide.className = "slide";

    const img = document.createElement("img");
    img.src = src;
    img.alt = `Foto ${index + 1}`;
    img.loading = "lazy";

    slide.appendChild(img);

    if (captions.length) {
      const caption = document.createElement("div");
      caption.className = "caption";
      caption.textContent = captions[index] || "";
      slide.appendChild(caption);
    }

    contenedor.appendChild(slide);
  });
}

crearCarrusel("galeriaBoda", fotosBoda, [
  "El día más feliz de mi vida: el día en que supe que quería caminar contigo para siempre.",
  "Ese día no solo celebramos una boda; celebramos el inicio de una vida compartida.",
  "Verte como mi esposa fue una de las emociones más bonitas que he sentido.",
]);

crearCarrusel("galeriaBloopers", fotosBloopers, [
  "Porque nuestra historia también tiene risas que no necesitan explicación.",
  "Este lado espontáneo también es parte de lo mucho que amo de nosotros.",
  "Para cerrar con una sonrisa, porque contigo hasta lo chistoso se vuelve recuerdo.",
]);

crearCarrusel("galeriaLosDos", fotosLosDos, frasesLosDos);
crearCarrusel("galeriaPao", fotosPao, frasesPao);

function scrollCarousel(id, direction) {
  const el = document.getElementById(id);
  if (!el) return;
  const amount = Math.min(window.innerWidth * 0.9, 620);
  el.scrollBy({ left: direction * amount, behavior: "smooth" });
}

function toggleMusic() {
  const audio = document.getElementById("music");
  if (!audio) return;

  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}
