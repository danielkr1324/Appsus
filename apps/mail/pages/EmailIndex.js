import { emailService } from '../services/email.service.js'

import EmailFilter from '../cmps/EmailFilter.js'
import EmailList from '../cmps/EmailList.js'
import EmailNav from '../cmps/EmailNav.js'
// import EmailCompose from '../cmps/EmailCompose.js'

export default {

    template: `
    <section class="email-index">
        <EmailNav/>
        <EmailFilter/>
        <EmailList 
            :emails="emails"
            @emailRemoved="onRemoveEmail"
            @updateToRead="updateToRead" />
        <!-- <EmailCompose/> -->
    </section>
    `,

    data() {
        return {
            emails: [],
            filterBy: {},
        }
    },

    methods: {
        onRemoveEmail(emailId) {
            console.log('index', emailId)
            emailService.removeEmail(emailId)
            let emailIndx = this.emails.findIndex(email => email.id === emailId)
            this.emails.splice(emailIndx, 1)
        },
        updateToRead(emailId) {
            emailService.updateToRead(emailId)
                .then(email => this.email = email)
        }
    },

    created() {
        emailService.emailsQuery()
            .then(emails => this.emails = emails)
    },

    components: {
        EmailNav,
        EmailFilter,
        EmailList,
        // EmailCompose,
    }
}