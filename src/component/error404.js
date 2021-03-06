//Components
import Header from './_header.js';
import Footer from './_footer.js';
import image from '../images/error404.png';
import '../css/error404.css';

//App
export default function Error404({ title }) {
  document.title = title;
  return (
    <>
      <Header />
      <main id="errorScreen">
        <h1>Página não encontrada</h1>
        <div id="errorFace">
          <h2 id="error404">Error 4 0 4</h2>
          <img src={image} id="errorImage" />
        </div>
        <a href="javascript:window.history.back()">
          Voltar para a página anterior.
        </a>
      </main>
      <Footer />
    </>
  );
}
