import {useUnit} from "effector-react";
import {setBody, setSatisfaction} from "../store/store.ts";

export const Hobby = () => {
    const [onBody, onSatisfaction] = useUnit([setBody, setSatisfaction])
  return (
    <>
      <button
        onClick={() =>
          onBody()
        }
      >
        Сходить в спортзал
      </button>
      <button
        onClick={() =>
          onSatisfaction()
        }
      >
        Посмотреть фильм
      </button>
      <button
        onClick={() =>
          onSatisfaction()
        }
      >
        Приготовить пирог
      </button>
    </>
  );
};
