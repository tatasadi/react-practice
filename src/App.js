import "./App.scss";
import Basics from "./components/01-Basics";
import GithubCardsApp from "./components/02-GithubCardsApp";
import StarMatchGame from "./components/03.StarMatchGame";
import SearchFilter from "./components/04-SearchFilter";
import Accordion from "./components/05.Accordion";
import ImageSlider from "./components/06-ImageSlider";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Practice!</h1>
      <Basics />
      <GithubCardsApp title="The GitHub Cards App" />
      <StarMatchGame title="Star Match Game" />
      <SearchFilter title="Search Filter" />
      <Accordion title="Accordion" />
      <ImageSlider title="Image Slider" />
    </div>
  );
}

export default App;
