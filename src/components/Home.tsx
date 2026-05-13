export const Home = ({ setStatistic }) => {
  return (
    <>
      <button
        onClick={() =>
          setStatistic((prev) => ({ ...prev, clean: prev.clean + 1 }))
        }
      >
        Полить цветы
      </button>
      <button
        onClick={() =>
          setStatistic((prev) => ({ ...prev, care: prev.care + 1 }))
        }
      >
        Покормить собаку
      </button>
      <button
        onClick={() =>
          setStatistic((prev) => ({ ...prev, clean: prev.clean + 1 }))
        }
      >
        Протереть пыль
      </button>
    </>
  );
};
