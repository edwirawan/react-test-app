import {observable} from 'mobx';

class ObservableState {
  @observable data = [];
  currID = 0;

  @computed get currID() {
    return this.data.length;
  }

  addComment(author,text) {
    this.data.push({id:this.currID,author,text});
  }

}

export default ObservableState;
