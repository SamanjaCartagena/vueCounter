const app = Vue.createApp({
 data(){
   return {
     counter:0,
     name:''
   }
 }, 
 methods:{
   add(num){
     this.counter= this.counter+num;
   },
   submitForm(){
    // event.preventDefault();
     alert('Submitted!')
   },
   setName(event){
     this.name = event.target.value;
   },
 }
});

app.mount('#events');
