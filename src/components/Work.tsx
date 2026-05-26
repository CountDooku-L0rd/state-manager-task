import {store} from "../store/store.ts";
import {observer} from "mobx-react-lite";

export const Work = observer(() => {
  return (
    <>
      <button
        onClick={() =>
          store.setSatisfaction()
        }
      >
        Закрыть задачу
      </button>
      <button
        onClick={() =>
            store.setSatisfaction()
        }
      >
        Провести one-to-one
      </button>
      <button
        onClick={() =>
            store.setSatisfaction()
        }
      >
        Поговорить о повышении
      </button>
    </>
  );
});
