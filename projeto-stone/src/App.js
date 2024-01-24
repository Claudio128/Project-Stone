import './App.css';
import Circulos from './componentes/Circulos';
import Logo from './componentes/Logo';
import Data from './componentes/Data';
import Conversao from './componentes/Conversao';

function App() {
    return(
        <div className="App">
            <Logo/>
            <Data/>
            <Conversao/>
            <Circulos/>
        </div>
    )
}

export default App;
