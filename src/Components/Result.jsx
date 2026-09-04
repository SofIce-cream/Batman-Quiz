function Result({score, total, onRestart}){
    return (
        <div className = "result-screen">
            <h1>✨ QUIZ TERMINADO ✨</h1>
            <p>Tu puntaje es.. </p>
            <h2>{Math.round(score)} pts</h2>
            <p>Respondist {total} preguntas.</p>
            <button onClick ={onRestart}>Jugar de nuevo</button>
        </div>
    );
}
export default Result
