import "./App.scss";
import Basics from "./components/01-Basics";
import GithubCardsApp from "./components/02-GithubCardsApp";
import StarMatchGame from "./components/03.StarMatchGame";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Practice!</h1>
      <Basics />
      <GithubCardsApp title="The GitHub Cards App" />
      <StarMatchGame title="Star Match Game" />
    </div>
  );
}

export default App;
