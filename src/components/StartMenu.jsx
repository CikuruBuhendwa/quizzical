import PropTypes from 'prop-types';

function StartMenu({startQuiz}) {

    return (
        <main className="start-section" onClick={startQuiz}>
            <div className="start-section-image-container"/>
            <div className="start-section-middle-section">
                <h1>Quizzical</h1>
                <span className="start-section-middle-section-description">Some description if needed</span>
                <button>
                    <span className="start-section-middle-section-button-text">Start quiz</span>
                </button>
            </div>
        </main>
    )
}

StartMenu.propTypes = {
    startQuiz: PropTypes.func.isRequired, // Use the appropriate PropTypes for your prop
};

export default StartMenu