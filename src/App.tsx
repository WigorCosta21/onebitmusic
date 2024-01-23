import { Hero } from "./components/Hero";
import { InfoBlock } from "./components/InfoBlock";
import { ShowList } from "./components/ShowList";

export const App = () => {
  return (
    <div>
      <Hero />
      <InfoBlock />
      <ShowList />
    </div>
  );
};

export default App;
