export default {
    template: `
        <article v-if="email">
        <h4>{{email.subject}}</h4>
    
        </article>               
    `,
  
   created(){
    console.log(this.email)
   } ,
    props: ['email']
}

