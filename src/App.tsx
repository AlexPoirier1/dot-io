import './App.css'
import { Revealer } from './components/Revealer'

function App() {
    return (
        <div className="app">
            <header className="app-header">
                <h1>Alexandre Poirier</h1>
                <Revealer title="Senior Software Engineer" color="red" />
            </header>
        </div>
    )
}

export default App
