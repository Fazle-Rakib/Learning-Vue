import { createStore } from "vuex";
import axios from "axios";

const accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTZjMTQ0ZmFmOTA4NzAwMTdjZTU3YjUiLCJpYXQiOjE2MzcyMTgxOTZ9.PBAEVWLDKC2fFc2P1Tdz7SEgSIBp5FuCU0849Vhw2S8";
const apiUrl = `https://api-nodejs-todolist.herokuapp.com`;

// Global setup
axios.interceptors.request.use(
  (config) => {
    config.headers.authorization = `Bearer ${accessToken}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// API centric axios setup | Ideal for all cases
const authAxios = axios.create({
  baseURL: apiUrl,
  headers: {
    authorization: `Bearer ${accessToken}`,
  },
});

export default createStore({
  //store the data of our app
  state: {
    todoList: [],
    taskInput: "",
    isDataReady: true,
  },
  // changes the data that are in the state by triggering
  // or commmiting a mutation. We can commit mutaion from
  // anywhere of our app. We can't trigger any asynchronous
  // code in mutaion
  mutations: {
    // getAllTaks(state){
    //   state.todoList.
    // },
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
    setIsDataReady(state) {
      state.isDataReady = !state.isDataReady;
    },
  },
  // methods | can't change the data in stage | but can access
  // actions can commit a mutation from within the action
  // asynchonous supported | dispatch()
  actions: {
    async getAllTasks({ commit }) {
      commit("setIsDataReady");
      const response = await authAxios(`/task`);
      // console.log("Getting all tasks:", response.data.data);
      this.state.todoList = response.data.data;
      commit("setIsDataReady");
    },
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
