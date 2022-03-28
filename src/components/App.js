import React, {useState, useEffect} from "react";

function App() {
  const [theDog, changeDog] = useState({
    message: '',
    status: ''
  });
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(r => r.json())
      .then(dog => {
        changeDog(dog);
        setLoaded(true);
      });
  }, []);
  
  if (!isLoaded) return <p>Loading...</p>;

  return (
    <img src={theDog.message} alt="A Random Dog" />
  )
}

export default App;