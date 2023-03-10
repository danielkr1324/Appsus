import { emailService } from '../services/email.service.js'

import EmailFilter from '../cmps/EmailFilter.js'
import EmailList from '../cmps/EmailList.js'
import EmailNav from '../cmps/EmailNav.js'
import EmailCompose from '../cmps/EmailCompose.js'

export default {
  template: `
    <section class="email-index">
    <button class="btn-compose" @click="toggleCompose">🖊️ Compose</button>
        <EmailNav 
        @showSent="onShowSent"
        @showInbox="onShowInbox"/>
        <EmailFilter/>
        <EmailList 
            :emails="showEmails"
            @emailRemoved="onRemoveEmail"
            @updateToRead="updateToRead" />
        <EmailCompose
         v-if="compose" 
         @sendEmail="onSendEmail"/>
    </section>
    `,

  data() {
    return {
      emails: [],
      sentEmails: [],
      filterBy: {},
      compose: emailService.toggleCompose(),
      isSent: false,
    }
  },

  methods: {
    onShowInbox() {
      this.isSent = false
    },
    onShowSent() {
      this.isSent = true
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
      let isCompose = emailService.toggleCompose()
      this.compose = isCompose
      console.log('isCompose : ', isCompose)
    },
  },

  created() {
    emailService.emailsQuery().then(emails => (this.emails = emails))
    emailService
      .sentEmailsQuery()
      .then(sentEmails => (this.sentEmails = sentEmails))
  },
  computed: {
    showEmails() {
      return this.isSent ? this.sentEmails : this.emails
    },
  },

  components: {
    EmailNav,
    EmailFilter,
    EmailList,
    EmailCompose,
  },
}
