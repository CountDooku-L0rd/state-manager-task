import { useState } from "react";
import { Tabs } from "./components/Tabs";
import { ETab } from "./lib/constants";
import { Home } from "./components/Home";
import { Work } from "./components/Work";
import { Hobby } from "./components/Hobby";
import { Statistic } from "./components/Statistic";

function App() {
  const [selectedTab, setSelectedTab] = useState(ETab.HOME);
  return (
    <>
      <Tabs setSelectedTab={setSelectedTab} />
      {
        {
          HOME: <Home />,
          WORK: <Work/>,
          HOBBY: <Hobby/>,
        }[selectedTab]
      }
      <Statistic />
    </>
  );
}

export default App;
