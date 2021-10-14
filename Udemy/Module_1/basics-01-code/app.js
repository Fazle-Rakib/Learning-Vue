const app = Vue.createApp({
    data(){
        return {
            courseGoal : 'Learn the basic of Vue!',
            welcomeMsg : 'Welcome to Vue',
            vueLink : 'https://www.vuemastery.com/courses/intro-to-vue-3/intro-to-vue3',
            vueHTML : '<p> This is from Vue-Html</p>'
        }
    },
    methods:{
        outputGoal(){
            const rand = Math.random();
            return (rand < 0.5 ?  this.courseGoal : this.welcomeMsg)
        }
    }
})

app.mount('#user-goal')