import { AppProps } from 'next/app';
import '../styles/globals.css'; // Importa los estilos globales

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;