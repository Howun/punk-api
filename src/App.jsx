import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main/Main";


const App = () => {
  return <div className="home">
          <NavBar />
          <Main />
        </div>;
};

export default App;
