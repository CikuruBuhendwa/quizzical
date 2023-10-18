import { useState } from 'react'
import StartMenu from './components/StartMenu.jsx'

function App() {
    const [start, setStart] = useState(false)

    const startQuiz = () => {
        setStart(true)
    }

    return (
        start
            ? <h1>Quiz Time!</h1>
            : <StartMenu
                startQuiz={startQuiz}
            />
    )
}

export default App
