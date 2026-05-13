import { useState } from "react";
import { Tabs } from "./components/Tabs";
import { ETab, initialStatistic } from "./lib/constants";
import { Home } from "./components/Home";
import { Work } from "./components/Work";
import { Hobby } from "./components/Hobby";
import { Statistic } from "./components/Statistic";

function App() {
  const [selectedTab, setSelectedTab] = useState(ETab.HOME);
  const [statistic, setStatistic] = useState(initialStatistic);
  return (
    <>
      <Tabs setSelectedTab={setSelectedTab} />
      {
        {
          HOME: <Home setStatistic={setStatistic} />,
          WORK: <Work setStatistic={setStatistic} />,
          HOBBY: <Hobby setStatistic={setStatistic} />,
        }[selectedTab]
      }
      <Statistic statistic={statistic} setStatistic={setStatistic} />
    </>
  );
}

export default App;
