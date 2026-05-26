import {useUnit} from "effector-react/compat";
import {$store, clear} from "../store/store.ts";

export const Statistic = () => {
    const [{satisfaction, clean, care, body}, onClear] = useUnit([$store, clear])
  return (
    <>
      <ul>
        <li>Удовлетворенность жизнью: {satisfaction}</li>
        <li>Чистота: {clean}</li>
        <li>Забота: {care}</li>
        <li>Тело: {body}</li>
      </ul>
      <button onClick={() => onClear()}>Очистить</button>
    </>
  );
};
