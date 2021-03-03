//Components
import Header from './_header.js';
import Footer from './_footer.js';
import image from '../images/error404.png';
import '../css/error404.css';

//App
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <h1>Página não encontrada</h1>
        <h2>Error 4 0 4</h2>
        <img src={image} id="errorImage" />
        <a href="javascript:window.history.back()">
          Voltar para a página anterior.
        </a>
      </main>
      <Footer />
    </>
  );
}
