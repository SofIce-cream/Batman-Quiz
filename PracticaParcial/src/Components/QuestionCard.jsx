function QuestionCard({pregunta, onAnswer}){
    return(
        <div className="question-card">
            <h2>{pregunta.question}</h2>
            <div className="options-grid">
                {pregunta.options.map(option => (
                    <button key={option} onClick={() => onAnswer(option)}>
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
}
export default QuestionCard