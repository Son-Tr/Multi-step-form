import './styles/main.scss'
import Sidebar from './components/Sidebar/Sidebar';
import NavigationButtons from './components/NavigationButtons/NavigationButtons';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <NavigationButtons />
    </div>
  );
}

export default App;
