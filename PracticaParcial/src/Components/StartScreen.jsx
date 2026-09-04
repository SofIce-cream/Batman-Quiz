function StartScreen({onStart}) {
    return(
        <div className="start-screen">
            <h1>🦇Batman Quiz</h1>
            <p>¡Responde rápido para obtener mayor puntaje!</p>
            <button onClick ={onStart}>Comenzar</button>
        </div>
    );
}
export default StartScreen