//Components
import Header from './_header.js';
import Footer from './_footer.js';
import Main from './_main.js';

//App
export default function Home() {
  const content = {
    title: 'Breve História',
    content: [
      {
        subtitle: 'Resumo',
        text: [
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt consequuntur architecto minus in, numquam laborum aliquid ullam nisi nostrum doloribus sint suscipit aperiam ipsum voluptas molestias cum ex error et?',
        ],
      },
      {
        subtitle: 'Curso Técnico',
        text: [
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt consequuntur architecto minus in, numquam laborum aliquid ullam nisi nostrum doloribus sint suscipit aperiam ipsum voluptas molestias cum ex error et?',
        ],
      },
      {
        subtitle: 'Curso Superior',
        text: [
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt consequuntur architecto minus in, numquam laborum aliquid ullam nisi nostrum doloribus sint suscipit aperiam ipsum voluptas molestias cum ex error et?',
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt consequuntur architecto minus in, numquam laborum aliquid ullam nisi nostrum doloribus sint suscipit aperiam ipsum voluptas molestias cum ex error et?',
        ],
      },
    ],
  };
  return (
    <>
      <Header />
      <Main content={content} />
      <Footer />
    </>
  );
}
