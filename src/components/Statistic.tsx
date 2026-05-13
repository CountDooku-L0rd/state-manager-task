import { initialStatistic } from "../lib/constants";

export const Statistic = ({
  statistic: { satisfaction, clean, care, body },
  setStatistic,
}) => {
  return (
    <>
      <ul>
        <li>Удовлетворенность жизнью: {satisfaction}</li>
        <li>Чистота: {clean}</li>
        <li>Забота: {care}</li>
        <li>Тело: {body}</li>
      </ul>
      <button onClick={() => setStatistic(initialStatistic)}>Очистить</button>
    </>
  );
};
