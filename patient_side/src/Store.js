import {makeAutoObservable, observable} from 'mobx';

class Store {
  hosData = {};

  constructor() {
    makeAutoObservable(this);
  }
  setHosData(val) {
    this.hosData = val;
  }
}

export default new Store();