const app = Vue.createApp({
    // template: '<h1>Hello {{firstName}}!</h1>',
    data(){
        return {
            firstName : 'Random',
            lastName : 'Smith',
            email : 'random@email.com',
            gender : 'male',
            picture : 'https://randomuser.me/portraits/men/1.jpg'
        }
    },

    methods : {
        async getUser(){
            const res = await fetch('https://randomuser.me/api/')
            const {results} = await res.json();
            console.log(res,results)
            // console.log(this)
            this.firstName = results[0].name.first,
            this.lastName =  results[0].name.last,
            this.email = results[0].email,
            this.gender = results[0].gender,
            this.picture = results[0].picture.large
        }
    }
})

app.mount('#app');