<template>
     <!-- <div v-if = "showAddTask"> -->
    <div>
        <AddTask  v-show="showAddTask" @add-task = "addTask"/>
        <Tasks @toggle-reminder="toggleReminder" @delete-task = "deleteTask" :tasks = "tasks"/>
    </div>
</template>

<script>
import Tasks from '../components/Tasks.vue'
import AddTask from '../components/AddTask.vue'
export default {
   name : 'Home',
   components: {
       Tasks,
       AddTask
   },
   props:{
       showAddTask : Boolean
   },
   data(){
       return {
           tasks:[],
       }
   },
   methods:{
    async deleteTask(id){
      // console.log('task',id)
      if(confirm('Are you sure?'))
      {
        const res = await fetch(`api/tasks/${id}`,{
          method : "DELETE"
        })
        res.status === 200 ? this.tasks = this.tasks.filter((task)=> task.id !== id) : alert('Something went wrong!')
      }
    },

    async toggleReminder(id){
      const taskToToggle = await this.fetchTask(id);
      console.log(taskToToggle)
      const updatedtask = {...taskToToggle, reminder : !taskToToggle.reminder}
      const res =  await fetch(`api/tasks/${id}`,{
        method : 'PUT',
        headers : {
          'content-type' : 'application/json'
        },
        body : JSON.stringify(updatedtask)
      })
      const data = await res.json();

      this.tasks = this.tasks.map((task)=>{
        return task.id === id ? {...task,reminder : data.reminder} : task;
      })
    },

    async addTask(newTask){
      // console.log(newTask)
      // this.tasks.push(newTask);
      const res = await fetch('api/tasks',{
        method: 'POST',
        headers : {
          'content-type' : 'application/json'
        },
        body : JSON.stringify(newTask)
      })
      const data = await res.json();
      this.tasks = [...this.tasks,data];
    },

   

    async fetchTasks(){
      const res = await fetch('api/tasks');
      const data = await res.json();
      return data;
    },

    async fetchTask(id){
      const res = await fetch(`api/tasks/${id}`);
      const data = await res.json();
      return data;
    }

    

  },
  async created(){
    // console.log(this.fetchTasks());
    // this.tasks = data;
    this.tasks = await this.fetchTasks();
    console.log(this.tasks);
  }
}
</script>