import { emailService } from '../services/email.service.js'

import EmailFilter from '../cmps/EmailFilter.js'
import EmailList from '../cmps/EmailList.js'
import EmailNav from '../cmps/EmailNav.js'
import EmailCompose from '../cmps/EmailCompose.js'

export default {
    props: [],
    template: `
    <section class="email-index">
        <EmailNav/>
        <EmailFilter/>
        <EmailList :emails="emails"
        @removeEmail="removeEmail"
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
        removeEmail(emailId) {
            console.log('Here')
            emailService.removeEmail(emailId)
                .then(() => {
                    const idx = this.emails.findIndex(email => email.id === emailId)
                    this.emails.splice(idx, 1)
                    // showSuccessMsg('Email removed')
                })
                .catch(err => {
                    // showErrorMsg('Email remove failed')
                })
        },
        updateToRead(emailId) {
            emailService.updateToRead(emailId).then(email => this.emails.push(email))

        }
    },
    computed: {

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