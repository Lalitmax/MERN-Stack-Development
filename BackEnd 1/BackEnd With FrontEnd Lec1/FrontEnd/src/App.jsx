import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/jokes');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setJokes(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  });

  return (
    <>
      <h1>Hello World</h1>
      <p>jokes = {jokes.length}</p>

      {jokes.map((joke, index) => (
        <div key={joke.id}>{joke.content}</div>
      ))}
    </>
  );
}

export default App;
