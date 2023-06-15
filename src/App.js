import { useState } from 'react';
import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer';

function App() {

  const [currentlySelected, setCurrentlySelected] = useState('About Me');

  return (
    <>
      <Header 
        currentlySelected={currentlySelected}
        setCurrentlySelected={setCurrentlySelected}
      />
      <Container currentlySelected={currentlySelected} />
      <Footer />
    </>
  );
}

export default App;