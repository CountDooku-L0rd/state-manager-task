export const Work = ({ setStatistic }) => {
  return (
    <>
      <button
        onClick={() =>
          setStatistic((prev) => ({
            ...prev,
            satisfaction: prev.satisfaction + 1,
          }))
        }
      >
        Закрыть задачу
      </button>
      <button
        onClick={() =>
          setStatistic((prev) => ({
            ...prev,
            satisfaction: prev.satisfaction + 1,
          }))
        }
      >
        Провести one-to-one
      </button>
      <button
        onClick={() =>
          setStatistic((prev) => ({
            ...prev,
            satisfaction: prev.satisfaction + 1,
          }))
        }
      >
        Поговорить о повышении
      </button>
    </>
  );
};
