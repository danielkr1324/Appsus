import { emailService } from '../services/email.service.js'

import EmailFilter from '../cmps/EmailFilter.js'
import EmailList from '../cmps/EmailList.js'
import EmailNav from '../cmps/EmailNav.js'
import EmailCompose from '../cmps/EmailCompose.js'

export default {

    template: `
    <section class="email-index">
    <button class="btn-compose" @click="toggleCompose">🖊️ Compose</button>
        <EmailNav/>
        <EmailFilter/>
        <EmailList 
            :emails="emails"
            @emailRemoved="onRemoveEmail"
            @updateToRead="updateToRead" />
        <EmailCompose v-if="compose" />
    </section>
    `,

    data() {
        return {
            emails: [],
            filterBy: {},
            compose: emailService.toggleCompose(),
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
        },
        toggleCompose() {
            let isCompose = emailService.toggleCompose()
            this.compose = isCompose
            console.log('isCompose : ', isCompose)
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
        EmailCompose,
    }
}