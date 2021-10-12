<template>
    <header>
        <h1>
            <!-- Task Manager  -->
            {{title}}
        </h1>
        <Button @btn-click="$emit('toggle-add-task')" :text = "showAddTask ? 'Close' : 'Add Task' " :color = "showAddTask ? 'red' : 'green' "/>
    </header>
</template>

<script>
import Button from './Button.vue'

export default {
    name : 'Header',
    // props : ['title']

    props :{
        title : String,
        showAddTask : Boolean,
    },

    // props :{
    //     title : {
    //         type: String,
    //         default: 'Default string'
    //     }
    // }

    components:{
        Button
    }
}
</script>

<style scoped>
    header{
        display: flex;
        justify-content: space-between;
        align-content: center;
        margin-bottom: 20px;
    }
</style>