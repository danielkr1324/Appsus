import { emailService } from '../services/email.service.js'

import EmailFilter from '../cmps/EmailFilter.js'
import EmailList from '../cmps/EmailList.js'
import EmailNav from '../cmps/EmailNav.js'
import EmailCompose from '../cmps/EmailCompose.js'

export default {
  template: `
    <section class="email-index">
        <button class="btn-compose" @click="toggleCompose">🖊️ Compose</button>
        <EmailNav @folder="setFolder" />
        <EmailFilter :filterBy="filterBy"
        @filter="setFilterBy" />
        <EmailList 
            v-if="emails"
            :emails="filteredEmails"
            @emailRemoved="onRemoveEmail"
            @updateToRead="updateToRead" />
        <EmailCompose
         v-if="isCompose" 
         @sendEmail="onSendEmail"/>
    </section>
    `,

  data() {
    return {
      emails: [],
      filterBy: {},
      isCompose: false,
    }
  },

  methods: {
    setFolder(folder) {
      this.filterBy.folder = folder
      this.getEmails()
    },
    onSendEmail(email) {
      console.log('index', email)
      this.sentEmails.push(email)
      emailService.sendEmail(email)
    },
    onRemoveEmail(emailId) {
      console.log('index', emailId)
      emailService.removeEmail(emailId)
      let emailIndx = this.emails.findIndex(email => email.id === emailId)
      this.emails.splice(emailIndx, 1)
    },
    updateToRead(emailId) {
      emailService.updateToRead(emailId).then(email => (this.email = email))
    },
    toggleCompose() {
      this.isCompose = !this.isCompose
    },
    setFilterBy(filterBy) {
      this.filterBy.subject = filterBy.subject
    },
    getEmails() {
      emailService.emailsQuery(this.filterBy)
        .then(emails => (this.emails = emails))
    }
  },

  created() {
    this.filterBy.folder = 'inbox'
    this.getEmails()
  },
  computed: {
    filteredEmails() {
      const regex = new RegExp(this.filterBy.subject, 'i')
      return this.emails.filter(email => regex.test(email.subject))
    }
  },

  components: {
    EmailNav,
    EmailFilter,
    EmailList,
    EmailCompose,
  },
}
