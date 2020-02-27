export default {
    template: `
    <section>
        <article v-if="email" class="big-prev-continer">
            <div class="main-content">
        <h2 class="big-prev-header">{{email.subject}}</h2>
        <h4>{{email.sender}}</h4> <h4 class="sender"> {{emailForDisplay}} </h4>
        <p>{{email.body}}</p>        
            </div>
            <div class="buttons-continer">
            <router-link :to="'/email/'+email.id" :email="email"> 
        <img src="img/expand.png" class="add-img"/>
        </router-link>
        <img src="img/trash.png" @click="onDelelteMail(book)" class="trash-img"/>
            </div>
        </article>               
    </section>
 `,
    props: ['email'],
    computed: {
        emailForDisplay() {
            return '<' + this.email.adress + '>'
        }
    },
    created() {
        // console.log(this.email.id);
        
    },
}