// Obtener una referencia al elemento de título del encabezado
const headerTitle = document.querySelector('.header__title h1');

// Cambiar el texto del título del encabezado
headerTitle.textContent = '¡Hola Kitty y Amigos!';

// Obtener una referencia al elemento de resumen
const summary = document.querySelector('.summary');

// Agregar contenido al elemento de resumen
summary.innerHTML = `
  <h2>¡Conoce a Hello Kitty y sus Amigos!</h2>
  <p>Bienvenidos a este sitio web donde podrás aprender más sobre los personajes populares de Sanrio, como Hello Kitty, Badtz Maru, Cinnamonroll y muchos más. Explora nuestras secciones y descubre las personalidades únicas de cada personaje.</p>
`;

// Obtener una referencia al elemento de personalidades
const personalities = document.querySelector('.personalities');

// Agregar contenido al elemento de personalidades
personalities.innerHTML = `
  <h2>Personalidades</h2>
  <ul>
    <li>Hello Kitty: Amable, curiosa y siempre lista para hacer nuevos amigos.</li>
    <li>Badtz Maru: Travieso y rebelde, pero con un buen corazón.</li>
    <li>Cinnamonroll: Tierno, gentil y un amigo leal.</li>
    <li>Pocchaco: Enérgico, extrovertido y siempre listo para la aventura.</li>
    <li>Kuromi: Un poco rebelde y sarcástico, pero con un lado tierno y vulnerable.</li>
    <li>My Melody: Dulce, gentil y siempre dispuesta a ayudar a los demás.</li>
    <li>PomPom Purin: Amigable, relajado y siempre listo para hacer nuevos amigos.</li>
    <li>Keroppi: Enérgico, aventurero y siempre listo para probar cosas nuevas.</li>
    <li>Chococat: Tranquilo, curioso y un poco tímido.</li>
  </ul>
`;

// Aquí puedes agregar más código JavaScript personalizado según tus necesidades