import useAppStore from "../store/store.ts";

export const Hobby = () => {
    const {setBody, setSatisfaction} = useAppStore();
  return (
    <>
      <button
        onClick={() =>
          setBody((currentBody) => currentBody + 1)
        }
      >
        Сходить в спортзал
      </button>
      <button
        onClick={() =>
          setSatisfaction((currentSatisfaction) => currentSatisfaction + 1)
        }
      >
        Посмотреть фильм
      </button>
      <button
        onClick={() =>
          setSatisfaction((currentSatisfaction) => currentSatisfaction + 1)
        }
      >
        Приготовить пирог
      </button>
    </>
  );
};
