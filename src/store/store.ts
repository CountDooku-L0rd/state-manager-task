import {makeAutoObservable} from "mobx";

class Store {
    satisfaction = 0;
    clean = 0;
    body = 0;
    care = 0;
    constructor() {
        makeAutoObservable(this)
    }
    setSatisfaction() {
        this.satisfaction += 1;
    }
    setBody() {
        this.body += 1;
    }
    setClean() {
        this.clean += 1;
    }
    setCare() {
        this.care += 1;
    }
    clear() {
        this.satisfaction = 0;
        this.clean = 0;
        this.body = 0;
        this.care = 0;
    }
}

export const store = new Store();