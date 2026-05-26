import useAppStore from "../store/store.ts";

export const Work = () => {
    const {setSatisfaction} = useAppStore();
  return (
    <>
      <button
        onClick={() =>
          setSatisfaction((currentSatisfaction) => currentSatisfaction + 1)
        }
      >
        Закрыть задачу
      </button>
      <button
        onClick={() =>
            setSatisfaction((currentSatisfaction) => currentSatisfaction + 1)
        }
      >
        Провести one-to-one
      </button>
      <button
        onClick={() =>
            setSatisfaction((currentSatisfaction) => currentSatisfaction + 1)
        }
      >
        Поговорить о повышении
      </button>
    </>
  );
};
