import {store} from "../store/store.ts";
import {observer} from "mobx-react-lite";

export const Statistic = observer(() => {
  return (
    <>
      <ul>
        <li>Удовлетворенность жизнью: {store.satisfaction}</li>
        <li>Чистота: {store.clean}</li>
        <li>Забота: {store.care}</li>
        <li>Тело: {store.body}</li>
      </ul>
      <button onClick={() => store.clear()}>Очистить</button>
    </>
  );
});
