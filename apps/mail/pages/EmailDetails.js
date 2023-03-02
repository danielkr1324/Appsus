import { emailService } from '../services/email.service.js'

import EmailFilter from '../cmps/EmailFilter.js'
import EmailNav from '../cmps/EmailNav.js'
import EmailCompose from '../cmps/EmailCompose.js'

export default {
    props: [],
    template: `
        <section class="email-details">
            <EmailNav/>
            <EmailCompose/>
            <EmailFilter/>
            <h1>Email Details</h1>
            
            <!-- <h2> class="details-from"> {{ email.from }} </h2> |
    <span class="details-subject"> {{ email.subject }} </span> |
    <span class="details-body"> {{ email.body }} </span> -->
        </section>
    `,

    data() {
        return {

        }
    },
    methods: {
        // loadEmail() {
        //     console.log('email : ', email)
        //     emailService.getEmail(this.email.id)
        //         .then(email => this.email = email)
        // }

    },
    computed: {

    },
    created() {

    },
    components: {
        EmailCompose,
        EmailNav,
        EmailFilter,
    },
    emits: [],
}