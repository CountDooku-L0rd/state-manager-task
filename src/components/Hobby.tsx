import {store} from "../store/store.ts";
import {observer} from "mobx-react-lite";

export const Hobby = observer(() => {
  return (
    <>
      <button
        onClick={() =>
          store.setBody()
        }
      >
        Сходить в спортзал
      </button>
      <button
        onClick={() =>
          store.setSatisfaction()
        }
      >
        Посмотреть фильм
      </button>
      <button
        onClick={() =>
          store.setSatisfaction()
        }
      >
        Приготовить пирог
      </button>
    </>
  );
});
