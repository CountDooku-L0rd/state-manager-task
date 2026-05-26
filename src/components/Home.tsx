import {store} from "../store/store.ts";
import {observer} from "mobx-react-lite";

export const Home = observer(() => {
  return (
    <>
      <button
        onClick={() =>
          store.setClean()
        }
      >
        Полить цветы
      </button>
      <button
        onClick={() =>
          store.setCare()
        }
      >
        Покормить собаку
      </button>
      <button
        onClick={() =>
          store.setClean()
        }
      >
        Протереть пыль
      </button>
    </>
  );
});
