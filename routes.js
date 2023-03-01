import HomePage from './views/HomePage.js'
<<<<<<< HEAD
// import AboutUs from './views/AboutUs.js'
=======
import AboutUs from './views/AboutUs.js'
>>>>>>> 347937114194b20443c52ff26dfbd4082aee0b49
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
<<<<<<< HEAD
    // {
    //   path: '/about',
    //   component: AboutUs,
    // },
=======
    {
      path: '/about',
      component: AboutUs,
    },
>>>>>>> 347937114194b20443c52ff26dfbd4082aee0b49
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
