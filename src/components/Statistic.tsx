import useAppStore from "../store/store.ts";

export const Statistic = () => {
    const {satisfaction, clean, care, body, clear} = useAppStore();
  return (
    <>
      <ul>
        <li>Удовлетворенность жизнью: {satisfaction}</li>
        <li>Чистота: {clean}</li>
        <li>Забота: {care}</li>
        <li>Тело: {body}</li>
      </ul>
      <button onClick={() => clear()}>Очистить</button>
    </>
  );
};
