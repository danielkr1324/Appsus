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
    <EmailCompose/>
    <EmailFilter/>
    <EmailList :emails="emails"/>
    </section>
`,

    data() {
        return {
            emails: [],
            filterBy: {},
        }
    },
    methods: {

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
        EmailCompose
    }
}