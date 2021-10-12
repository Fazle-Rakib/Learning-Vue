<template>
  <div class="container">
    <Header @toggle-add-task="toggleAddTask" title = "Task Manager " :showAddTask="showAddTask"/>
    <!-- <div v-if = "showAddTask"> -->
    <div v-show="showAddTask">
      <AddTask @add-task = "addTask"/>
    </div>
    <Tasks @toggle-reminder="toggleReminder" @delete-task = "deleteTask" :tasks = "tasks"/>
    <!-- <Header /> -->
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Tasks from './components/Tasks.vue'
import AddTask from './components/AddTask.vue'
export default {
  name: 'App',
  components: {
    Header,
    Tasks,
    AddTask
  },
  data(){
    return {
      tasks:[],
      showAddTask : false
    }
  },
  methods:{
    deleteTask(id){
      // console.log('task',id)
      if(confirm('Are you sure?'))
      {
        this.tasks = this.tasks.filter((task)=> task.id !== id)
      }
    },

    toggleReminder(id){
      this.tasks = this.tasks.map((task)=>{
        return task.id === id ? {...task,reminder : !task.reminder} : task;
      })
    },

    addTask(newTask){
      // console.log(newTask)
      // this.tasks.push(newTask);
      this.tasks = [...this.tasks,newTask];
    },

    toggleAddTask(){
      // console.log(e);
      this.showAddTask = ! this.showAddTask;
    }

  },
  created(){
    this.tasks = [
      {
        id: 1,
        text: 'Task 1',
        day: 'March 1st at 2:30pm',
        reminder : true,
      },
      {
        id: 2,
        text: 'Task 2',
        day: 'Jan 3rd at 9:15am',
        reminder : true,
      },
      {
        id: 3,
        text: 'Food Shoping',
        day: 'Feb 5th at 1:00pm',
        reminder : false,
      },
    ]
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
