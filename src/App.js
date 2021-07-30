import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar'
import Header from './components/Header'
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contacts from './components/Contacts';

import Particles from 'react-particles-js';

function App() {
  return (
      <>
        <Navbar />
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
        <Header />
        <AboutMe />
        <Services />
        <Experience />
        <Portfolio />
        <Testimonials />
        <Contacts />
      </>
  );
}

export default App;
