// import { emailService } from '../services/email.service.js'

import EmailFilter from '../cmps/EmailFilter.js'
import EmailList from '../cmps/EmailList.js'
import EmailNav from '../cmps/EmailNav.js'

export default {
    props: [],
    template: `
    <section class="email-index">
    <h1>Email!!!!!!!</h1>

    <EmailNav/>
    <EmailFilter/>
    <EmailList/>
    </section>
`,

    data() {
        return {

        }
    },
    methods: {

    },
    computed: {

    },
    created() {

    },
    components: {
        EmailNav,
        EmailFilter,
        EmailList
    }
}