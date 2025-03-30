// pages/_app.js
import '../styles/globals.css';  // Importa tu archivo globals.css
import '../styles/styles.css';   // Importa el archivo de estilos que acabamos de crear

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />; // El componente se renderiza aquí
}

export default MyApp;