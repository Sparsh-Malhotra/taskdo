import './App.css';
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'

function App() {
  return (
    <div>
        <Navbar></Navbar>
        <div className="container">
            <Sidebar></Sidebar>
            <Main></Main>
        </div>
    </div>
  );
}

export default App;
