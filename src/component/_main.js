import React, { useState, useEffect } from 'react';
import '../css/main.css';

export default function _main({ content, title }) {
  document.title = title;
  const AsidePrefixLink = 'text';

  const [asideList, setAsideList] = useState(null);
  const [subtitles, setSubtitles] = useState(
    content.content.map(({ subtitle, text }, index) => {
      const paragraphs = text.map((element, i) => <p key={i}>{element}</p>);
      return (
        <div key={index}>
          <h2 id={AsidePrefixLink + (index + 1)}>{subtitle}</h2>
          {paragraphs}
        </div>
      );
    })
  );

  useEffect(() => {
    const getTagsToAsideList = document.getElementsByTagName('h2');
    const asideListContent = Array.from(getTagsToAsideList);
    setAsideList(
      asideListContent.map((element, index) => {
        return (
          <li>
            <a href={`#${AsidePrefixLink}${index + 1}`}>
              {element.textContent}
            </a>
          </li>
        );
      })
    );
  }, []);

  return (
    <main>
      <h1>{content.title}</h1>
      <section>
        <aside>
          <ol>{asideList}</ol>
        </aside>
        <article>{subtitles}</article>
      </section>
    </main>
  );
}
