import { ETab } from "../lib/constants";

export const Tabs = ({ setSelectedTab }) => {
  return (
    <ul>
      <li>
        <button
          onClick={() => {
            setSelectedTab(ETab.HOME);
          }}
        >
          Дом
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            setSelectedTab(ETab.WORK);
          }}
        >
          Работа
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            setSelectedTab(ETab.HOBBY);
          }}
        >
          Хобби
        </button>
      </li>
    </ul>
  );
};
