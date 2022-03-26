const app = Vue.createApp({
 data(){
   return {
     counter:0,
     name:'',
     confirmedName:''
   }
 }, 
 methods:{
   confirmInput(){
     this.confirmedName = this.name;
   },
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
