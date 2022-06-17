import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos de los cursos de freeCodeCamp</h1>
        <Testimonio
          nombre='Emma Bostian'
          pais='Suecia'
          imagen='1'
          empresa='Spotify'
          cargo='Ingeniero de Software'
          testimonio='I have always struggled with learning JavaScript. I have taken many courses but freeCodeCamps course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify.' />
        <Testimonio
          nombre='Sarah Chima'
          pais='Nigeria'
          imagen='2'
          empresa='ChatDesk'
          cargo='Ingeniera de Software'
          testimonio='freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company' />
        <Testimonio
          nombre='Shawn Wang'
          pais='Singapore'
          imagen='3'
          empresa='Amazon'
          cargo='Ingeniero de Software'
          testimonio='It is scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life.'/>
      </div>
    </div>
  );
}

export default App;
