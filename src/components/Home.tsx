import useAppStore from "../store/store.ts";

export const Home = () => {
    const {setClean, setCare} = useAppStore();
  return (
    <>
      <button
        onClick={() =>
          setClean((currentClean) => currentClean + 1)
        }
      >
        Полить цветы
      </button>
      <button
        onClick={() =>
          setCare((currentCare) => currentCare + 1)
        }
      >
        Покормить собаку
      </button>
      <button
        onClick={() =>
          setClean((currentClean) => currentClean + 1)
        }
      >
        Протереть пыль
      </button>
    </>
  );
};
