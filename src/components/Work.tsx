import {useUnit} from "effector-react";
import {setSatisfaction} from "../store/store.ts";

export const Work = () => {
    const onSatisfaction = useUnit(setSatisfaction);
  return (
    <>
      <button
        onClick={() =>
          onSatisfaction()
        }
      >
        Закрыть задачу
      </button>
      <button
        onClick={() =>
            onSatisfaction()
        }
      >
        Провести one-to-one
      </button>
      <button
        onClick={() =>
            onSatisfaction()
        }
      >
        Поговорить о повышении
      </button>
    </>
  );
};
