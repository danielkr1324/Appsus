import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const EMAIL_KEY = 'emailsDB'
const SENT_EMAIL_KEY = 'sentEmailsDB'

let isComposeOpen = true

_createEmails()

_createSentEmails()

export const emailService = {
  emailsQuery,
  sentEmailsQuery,
  getEmail,
  removeEmail,
  sendEmail,
  updateToRead,
  getNewEmail,
  toggleCompose,
}

function _createEmails() {
  let emails = utilService.loadFromStorage(EMAIL_KEY)
  if (!emails || !emails.length) {
    emails = [
      {
        id: 'e101',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: 1551133930594,
        removedAt: null,
        from: 'momo@momo.com',
        to: 'user@appsus.com',
      },
      {
        id: 'e102',
        subject: 'That is another mail',
        body: 'A new mail',
        isRead: false,
        sentAt: 1551133900000,
        removedAt: null,
        from: 'puki@kuki.com',
        to: 'user@appsus.com',
      },
      {
        id: 'e103',
        subject: 'WOW fourth mail!',
        body: 'A new mail',
        isRead: true,
        sentAt: 1551133900000,
        removedAt: null,
        from: 'lucky@kuki.com',
        to: 'user@appsus.com',
      },
      {
        id: 'e104',
        subject: 'OK that is the last one',
        body: 'A new mail',
        isRead: false,
        sentAt: 1551133900000,
        removedAt: null,
        from: 'muki@kuki.com',
        to: 'user@appsus.com',
      },
      {
        id: 'e105',
        subject: 'Halo Mail',
        body: 'A new mail',
        isRead: true,
        sentAt: 1551133900000,
        removedAt: null,
        from: 'puki@kuki.com',
        to: 'user@appsus.com',
      },
    ]
    utilService.saveToStorage(EMAIL_KEY, emails)
  }
  console.log('emails : ', emails)
}

function _createSentEmails() {
  let sentEmails = utilService.loadFromStorage(SENT_EMAIL_KEY)
  if (!sentEmails || !sentEmails.length) {
    sentEmails = [
      {
        id: 's101',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: 1551133930594,
        removedAt: null,
        from: 'user@appsus.com',
        to: 'puki@kuki.com',
      },
      {
        id: 's102',
        subject: 'That is another mail',
        body: 'A new mail',
        isRead: false,
        sentAt: 1551133900000,
        removedAt: null,
        from: 'user@appsus.com',
        to: 'muki@kuki.com',
      },
      {
        id: 's103',
        subject: 'WOW fourth mail!',
        body: 'A new mail',
        isRead: true,
        sentAt: 1551133900000,
        removedAt: null,
        from: 'user@appsus.com',
        to: 'momo@momo.com',
      },
    ]
    utilService.saveToStorage(SENT_EMAIL_KEY, sentEmails)
  }
  console.log('sentEmails : ', sentEmails)
}

function emailsQuery(filterBy = {}) {
  return storageService.query(EMAIL_KEY).then(emails => {
    if (filterBy.txt) {
      const regex = new RegExp(filterBy.txt, 'i')
      emails = emails.filter(email => regex.test(email.info.title))
    }
    if (filterBy.type) {
      emails = emails.filter(email => email.type === filterBy.type)
    }
    return emails
  })
}

function sentEmailsQuery(filterBy = {}) {
  return storageService.query(SENT_EMAIL_KEY).then(emails => {
    if (filterBy.txt) {
      const regex = new RegExp(filterBy.txt, 'i')
      emails = emails.filter(email => regex.test(email.info.title))
    }
    if (filterBy.type) {
      emails = emails.filter(email => email.type === filterBy.type)
    }
    return emails
  })
}

function getEmail(emailId) {
  return storageService.get(EMAIL_KEY, emailId)
}

function removeEmail(emailId) {
  return storageService.remove(EMAIL_KEY, emailId)
}

function sendEmail(email) {
  if (email.id) {
    return storageService.post(SENT_EMAIL_KEY, email)
  } else {
    return storageService.put(SENT_EMAIL_KEY, email)
  }
}

function updateToRead(emailId) {
  return storageService.get(EMAIL_KEY, emailId).then(email => {
    email.isRead = true
    return storageService.put(EMAIL_KEY, email)
  })
}

function getNewEmail() {
  return {
    id: utilService.makeId(),
    subject: '',
    body: '',
    isRead: true,
    sentAt: Date.now(),
    removedAt: null,
    from: 'user@appsus.com',
    to: '',
  }
}

function toggleCompose() {
  isComposeOpen = !isComposeOpen
  return isComposeOpen
}
