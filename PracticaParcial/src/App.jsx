import { useState } from 'react'
import './App.css'
import questions from './Data/Questions.js'
import StartScreen from './Components/StartScreen.jsx'
import QuestionCard from './Components/QuestionCard.jsx'
import ProgressBar from './Components/ProgressBar.jsx'
import Result from './Components/Result.jsx'

function App() {
  //Funcionamiento de puntaje y tiempo
  const[juegoIniciado, setJuegoIniciado] = useState(false);
  const [score, setScore] = useState(0);
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [tiempoInicio, setTiempoInicio] = useState(Date.now());
  const [juegoTerminado, setJuegoTerminado] = useState(false);
  
  // out of service por ahora const [tiempoMax, setTiempoMax] = useState(0);
  const tiempoMax = 30; // Tiempo máximo en segundos para responder cada pregunta

  //Funcionamieento de preguntas
  const pregunta = questions[preguntaActual];
  
  //Para funcionalidad del juego
  function iniciarJuego() {
    setJuegoIniciado(true);
    setScore(0);
    setPreguntaActual(0);
    setJuegoTerminado(false);
    setTiempoInicio(Date.now());
  }

  function sumarPreguntaActual(){
    if( preguntaActual + 1 >= questions.length){
      setJuegoTerminado(true);
    } else{
      setPreguntaActual(preguntaActual + 1);
      setTiempoInicio(Date.now()); //Reiniciar el tiempo para el calculo de puntaje
    }
  }

function manejarRespuesta(respuestaUsuario){
  const tiempoRespuesta = Date.now();
    if(respuestaUsuario === pregunta.answer){
      setScore(score + newScore(tiempoInicio, tiempoRespuesta, tiempoMax));
    }
    sumarPreguntaActual();
}

function newScore(tiempoInicio, tiempoRespuesta, tiempoMax){
  const tiempoTranscurrido = (tiempoRespuesta - tiempoInicio) / 1000;
  const puntos =  Math.max(0, 200 * (1 - tiempoTranscurrido / tiempoMax));
  return Math.round(puntos);
}

function reiniciarJuego() {
  iniciarJuego();
}

if (!juegoIniciado) {
  return<StartScreen onStart={iniciarJuego} />;
}

if (juegoTerminado){
  return<Result score={score} total={questions.length} onRestart={reiniciarJuego} />;
}

return (
  <div className="quiz-container"> 
    <ProgressBar actual={preguntaActual} total={questions.length}/>
    <QuestionCard pregunta={pregunta} onAnswer={manejarRespuesta}/>
  </div>
  );
}

export default App
//Para hacer una api :D
/*async function obtenerDatos() {
async function obtenerDatos() {
  try {
    const respuesta = await fetch('https://ejemplo.com');
    
    // Verificar si la respuesta es correcta
    if (!respuesta.ok) {
      throw new Error('Error en la petición');
    }
    
    // Convertir la respuesta a formato JSON
    const datos = await respuesta.json();
    console.log(datos);
  } catch (error) {
    console.error('Hubo un error:', error);
  }
}
  obtenerDatos();*/




