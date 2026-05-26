import {create} from "zustand";

type AppStoreState = {
    satisfaction: number,
    clean: number,
    care: number,
    body: number,
}

type AppStoreActions = {
    setSatisfaction: (satisfaction:
                          AppStoreState['satisfaction']
                          | ((currentSatisfaction: AppStoreState['satisfaction'])
                          => AppStoreState["satisfaction"])) => void,
    setCare: (care: AppStoreState['care']
        | ((currentCare: AppStoreState['care'])
        => AppStoreState["care"])) => void,
    setBody: (body: AppStoreState['body']
        | ((currentBody: AppStoreState['body'])
        => AppStoreState["body"])) => void,
    setClean: (clean: AppStoreState['clean']
        | ((currentClean: AppStoreState['clean'])
        => AppStoreState["clean"])) => void,
    clear: () => void,
}

type AppStore = AppStoreState & AppStoreActions;

const useAppStore = create<AppStore>()((set) => ({
    satisfaction: 0,
    clean: 0,
    care: 0,
    body: 0,
    setSatisfaction: (nextSatisfaction) => {
        set((state) => ({
            satisfaction: typeof nextSatisfaction === 'function' ? nextSatisfaction (state.satisfaction) : nextSatisfaction,
        }))
    },
    setClean: (nextClean) => {
        set((store) => ({
            clean: typeof nextClean === 'function' ? nextClean(store.clean) : nextClean,
        }))
    },
    setCare: (nextCare) => {
        set((store) => ({
            care: typeof nextCare === 'function' ? nextCare(store.care) : nextCare,
        }))
    },
    setBody: (nextBody) => {
        set((store) => ({
            body: typeof nextBody === 'function' ? nextBody(store.body) : nextBody,
        }))
    },
    clear: () => {
        set(() => ({
            clean: 0,
            satisfaction: 0,
            care: 0,
            body: 0,
        }))
    }
}))

export default useAppStore;