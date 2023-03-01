import HomePage from './views/HomePage.js'
// import AboutUs from './views/AboutUs.js'
// import EmailIndex from './apps/mail/pages/EmailIndex.js'
// import NoteIndex from './apps/keep/pages/NoteIndex.js'

const { createRouter, createWebHashHistory } = VueRouter

const routerOptions = {
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: HomePage,
    },
    // {
    //   path: '/about',
    //   component: AboutUs,
    // },
    // {
    //   path: '/email',
    //   component: EmailIndex,
    // },
    // {
    //   path: '/keep',
    //   component: NoteIndex,
    // },
  ],
}

export const router = createRouter(routerOptions)
