import { createEvent, createStore } from "effector";

interface RatingState {
    satisfaction: number;
    clean: number;
    care: number;
    body: number;
}

const initialState: RatingState = {
    satisfaction: 0,
    clean: 0,
    care: 0,
    body: 0,
};

export const $store = createStore<RatingState>(initialState);

export const setSatisfaction = createEvent<void>();
export const setClean = createEvent<void>();
export const setCare = createEvent<void>();
export const setBody = createEvent<void>();
export const clear = createEvent<void>();

$store.on(setSatisfaction, (state) => ({
    ...state,
    satisfaction: state.satisfaction + 1
}));

$store.on(setClean, (state) => ({
    ...state,
    clean: state.clean + 1
}));

$store.on(setCare, (state) => ({
    ...state,
    care: state.care + 1
}));

$store.on(setBody, (state) => ({
    ...state,
    body: state.body + 1
}));

$store.on(clear, () => initialState);