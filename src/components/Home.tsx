import {useUnit} from "effector-react";
import {setCare, setClean} from "../store/store.ts";

export const Home = () => {
    const [onClean, onCare] = useUnit([setClean, setCare])
  return (
    <>
      <button
        onClick={() =>
          onClean()
        }
      >
        Полить цветы
      </button>
      <button
        onClick={() =>
          onCare()
        }
      >
        Покормить собаку
      </button>
      <button
        onClick={() =>
          onClean()
        }
      >
        Протереть пыль
      </button>
    </>
  );
};
