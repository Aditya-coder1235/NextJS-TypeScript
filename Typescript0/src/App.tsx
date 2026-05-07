import React from 'react'
import Card from './components/Card'
import Counter from './components/Counter'
import Post from './components/Post'
import { ThemeContext } from './context/Theme'

const App = () => {
  const themeContext = React.useContext(ThemeContext);
 const { theme, toggleTheme } = themeContext;
  return (
      <div>
          <h1>Hello, World!</h1>
          <Card name="aditya" email="adi@gmail.com" isMarry={false} />
          <br />
          <Counter />
          <br />
          <Post />
          <br />
          <p>Current Theme: {theme}</p>
          <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
  );
}

export default App
