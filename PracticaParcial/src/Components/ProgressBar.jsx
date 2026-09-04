function ProgressBar({actual, total}){
    const porcentaje = (actual / total) * 100;
    return(
        <div className="progress-bar-container">
            <div className="progress-bar-fill" style={{width : `${porcentaje}`}}/>
                <span className="progress-bar-text">{actual +1} / {total}</span>
        </div>
    );
}

export default ProgressBar