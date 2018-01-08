import { createStore } from 'redux';

const reducer = function(state, action){
  if(action.type === "ADD_TOPICS"){
      state = {...state};
      state.articles = action.articles ;
  }

  return state;
}
const Store = createStore(reducer, 0);

console.log("store created"+Store);
/*
Store.subscribe(()=> {
  console.log("inside subscribe: "+Store.getState());
})
*/
Store.dispatch({type: "ADD_TOPICS", articles: []});

export default Store;
