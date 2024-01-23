import { Cards } from "./components/Cards";
import { Hero } from "./components/Hero";
import { InfoBlock } from "./components/InfoBlock";
import { ShowList } from "./components/ShowList";

export const App = () => {
  return (
    <div>
      <Hero />
      <InfoBlock />
      <ShowList />
      <Cards />
    </div>
  );
};

export default App;
