import { emailService } from '../services/email.service.js'

import EmailFilter from '../cmps/EmailFilter.js'
import EmailNav from '../cmps/EmailNav.js'
import EmailCompose from '../cmps/EmailCompose.js'

export default {
    props: [],
    template: `
        <section class="email-details" if="email">
            <EmailNav/>
            <EmailCompose/>
            <EmailFilter/>
            <!-- <pre> {{email}} </pre> -->
            <div class="email-body">
                <h2 class="details-from"> {{ email.from }} </h2>
                <h3 class="details-subject"> {{ email.subject }} </h3> 
                <h3 class="details-body"> {{ email.body }} </h3>
            </div>
        </section>
    `,
    data() {
        return {
            email: null
        }
    },
    methods: {
        loadEmail() {
            emailService.getEmail(this.emailId)
                .then(email => {
                    this.email = email
                    console.log('email : ', email)
                })
        }
    },
    computed: {
        emailId() {
            return this.$route.params.emailId
        }
    },
    created() {
        this.loadEmail()
    },
    components: {
        EmailCompose,
        EmailNav,
        EmailFilter,
    },
    emits: [],
}