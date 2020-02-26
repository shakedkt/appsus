export default {
    template: `
        <article v-if="email" class="show">
        <h2>{{email.subject}}</h4>
        <h4>{{email.sender}}</h4> <h4 class="sender"> {{emailForDisplay}} </h4>
        <div class="icons">
        <img src="img/expand.png" @click="onOpenDeatils()" class="add-img"/>
        <img src="img/trash.png" @click="onDelelteMail(book)" class="add-img"/>

        </div>
        </article>               
    `,
   methods: {

},
        props: ['email'],
    computed: {
        emailForDisplay() {
           return '<' + this.email.sender + '>'
        }
    },
}

img