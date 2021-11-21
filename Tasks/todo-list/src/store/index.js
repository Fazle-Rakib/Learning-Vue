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

const headers = {};

export default createStore({
  //store the data of our app
  state: {
    todoList: [],
    taskInput: "",
    isDataReady: true,
    errorMessage: null,
  },
  // changes the data that are in the state by triggering
  // or commmiting a mutation. We can commit mutaion from
  // anywhere of our app. We can't trigger any asynchronous
  // code in mutaion
  mutations: {
    // getAllTaks(state){
    //   state.todoList.
    // },
    setAllTasks(state, data) {
      state.todoList = data;
    },
    addItem(state, newTask) {
      state.todoList.push(newTask);
      state.taskInput = "";
      console.log(state.todoList);
    },
    deleteItem(state, idx) {
      state.todoList = state.todoList.filter((item) => item["_id"] != idx);
    },
    setTaskInput(state, newTaskInput) {
      state.taskInput = newTaskInput;
    },
    setIsDataReady(state) {
      state.isDataReady = !state.isDataReady;
    },
    errorHandling(state, message) {
      state.errorMessage = message;
    },
    updateItem(state, idx) {
      const taskId = this.state.todoList.findIndex(
        (element) => element["_id"] == idx
      );
      state.todoList[taskId].completed = !state.todoList[taskId].completed;
    },
  },
  // methods | can't change the data in stage | but can access
  // actions can commit a mutation from within the action
  // asynchonous supported | dispatch()
  actions: {
    async getAllTasks({ commit }) {
      commit("setIsDataReady");
      // console.log(await axios.get(`${apiUrl}/task`));
      const response = await authAxios(`/task`);
      // console.log("Getting all tasks:", response.data.data);
      commit("setAllTasks", response.data.data);
      commit("setIsDataReady");
    },
    async addItem({ commit }) {
      commit("setIsDataReady");
      const newTask = {
        description: this.state.taskInput,
      };
      try {
        const response = await authAxios.post(`/task`, newTask);
        commit("addItem", response.data.data);
      } catch (error) {
        console.log(error);
        commit("errorHandling", `Can't add the task. ${error}`);
        setTimeout(() => {
          commit("errorHandling", null);
        }, 2000);
      }
      commit("setIsDataReady");
    },
    async deleteItem({ commit }, index) {
      commit("setIsDataReady");

      console.log("In delete action : ", index);
      const response = await authAxios.delete(`/task/${index}`);
      console.log(response);
      commit("deleteItem", index);
      commit("setIsDataReady");
    },
    setTaskInput({ commit }, newValue) {
      commit("setTaskInput", newValue);
    },
    async updateItem({ commit }, index) {
      const findTask = this.state.todoList.find(
        (element) => element["_id"] == index
      );
      console.log(index, findTask);
      const updatedTask = {
        completed: !findTask.completed,
      };
      try {
        commit("updateItem", index);
        const response = await authAxios.put(`/task/${index}`, updatedTask);
        console.log(response);
      } catch (error) {
        console.log(error);
        commit("errorHandling", `Can't update the task. ${error}`);
        setTimeout(() => {
          commit("errorHandling", null);
        }, 2000);
      }
    },
  },
  // acces of data | can filter the data that is available to components
  getters: {},
  // breakup our store to multiple modules; each separate module have
  // can have it's own [state,mutaions,actions]
  modules: {},
});
