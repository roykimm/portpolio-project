import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar'
import Header from './components/Header'
import AboutMe from './components/AboutMe';

import Particles from 'react-particles-js';

function App() {
  return (
      <>
        <Particles 
          className="particles-canvas"
          params={{
            number : {
              value : 30,
              density : {
                enable : true,
                value_area : 900
              }
            },
            shape : {
              type : "square",
              stroke: {
                width : 6,
                color : "#f9ab00"
              }
            }
          }}
        />
        <Navbar />
        <Header />
        <AboutMe />
      </>
  );
}

export default App;
