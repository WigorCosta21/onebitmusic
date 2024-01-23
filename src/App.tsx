import { Cards } from "./components/Cards";
import { Hero } from "./components/Hero";
import { InfoBlock } from "./components/InfoBlock";
import { Investors } from "./components/Investors";
import { ShowList } from "./components/ShowList";

export const App = () => {
  return (
    <div>
      <Hero />
      <InfoBlock />
      <ShowList />
      <Cards />
      <Investors />
    </div>
  );
};

export default App;
