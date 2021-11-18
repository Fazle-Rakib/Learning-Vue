import { createStore } from "vuex";

export default createStore({
  //store the data of our app
  state: {
    todoList: [],
    taskInput: "",
  },
  // changes the data that are in the state by triggering
  // or commmiting a mutation. We can commit mutaion from
  // anywhere of our app. We can't trigger any asynchronous
  // code in mutaion
  mutations: {
    addItem(state) {
      state.todoList.push({ task: state.taskInput, checked: false });
      state.taskInput = "";
    },
    deleteItem(state, idx) {
      state.todoList = state.todoList.filter((item, index) => index != idx);
    },
    setTaskInput(state, newTaskInput) {
      state.taskInput = newTaskInput;
    },
  },
  // methods | can't change the data in stage | but can access
  // actions can commit a mutation from within the action
  // asynchonous supported | dispatch()
  actions: {
    addItem({ commit }) {
      commit("addItem");
    },
    deleteItem({ commit }, index) {
      console.log("In delete action : ", index);
      commit("deleteItem", index);
    },
    setTaskInput({ commit }, newValue) {
      commit("setTaskInput", newValue);
    },
  },
  // acces of data | can filter the data that is available to components
  getters: {},
  // breakup our store to multiple modules; each separate module have
  // can have it's own [state,mutaions,actions]
  modules: {},
});
