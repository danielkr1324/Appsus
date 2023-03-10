import HomePage from './views/HomePage.js'
import AboutUs from './views/AboutUs.js'
import EmailIndex from './apps/mail/pages/EmailIndex.js'
import NoteIndex from './apps/keep/pages/NoteIndex.js'
import EmailDetails from './apps/mail/pages/EmailDetails.js'

const { createRouter, createWebHashHistory } = VueRouter

const routerOptions = {
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: HomePage,
    },
    {
      path: '/about',
      component: AboutUs,
    },
    {
      path: '/email',
      component: EmailIndex,
      children: [

      ]
    },
    {
      path: '/keep',
      component: NoteIndex,
    },
    {
      path: '/email/:emailId',
      component: EmailDetails
    },
  ],
}

export const router = createRouter(routerOptions)
