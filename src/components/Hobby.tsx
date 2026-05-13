export const Hobby = ({ setStatistic }) => {
  return (
    <>
      <button
        onClick={() =>
          setStatistic((prev) => ({ ...prev, body: prev.body + 1 }))
        }
      >
        Сходить в спортзал
      </button>
      <button
        onClick={() =>
          setStatistic((prev) => ({
            ...prev,
            satisfaction: prev.satisfaction + 1,
          }))
        }
      >
        Посмотреть фильм
      </button>
      <button
        onClick={() =>
          setStatistic((prev) => ({
            ...prev,
            satisfaction: prev.satisfaction + 1,
          }))
        }
      >
        Приготовить пирог
      </button>
    </>
  );
};
