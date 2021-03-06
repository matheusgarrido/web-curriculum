import React, { useState } from 'react';
import '../css/changeThemeButton.css';

export default function ChangeThemeButton() {
  const [darkThemeChecked, setDarkThemeChecked] = useState(false);
  function updateTheme() {
    const theme = document.body;
    if (darkThemeChecked) {
      theme.classList.remove('dark');
      setDarkThemeChecked(false);
    } else {
      theme.classList.add('dark');
      setDarkThemeChecked(true);
    }
  }
  return (
    <div class="switch" onClick={updateTheme}>
      <p id="tooltipChangeTheme"></p>
      <input type="checkbox" checked={darkThemeChecked} />
      <span class="slider round"></span>
    </div>
  );
}
