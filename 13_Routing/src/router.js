import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter';
import UsersFooter from './components/users/UsersFooter';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      meta: { needsAuth: true },
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        },
      ],
    }, // our-domain.com/teams => TeamsList
    {
      path: '/users',
      components: { default: UsersList, footer: UsersFooter },
      beforeEnter(to, from, next) {
        console.log('beforeenter', to, from);
        next();
      },
    },
    { path: '/:notFound(.*)', component: NotFound },
  ],
  linkActiveClass: 'active',
  scrollBehavior(_to, _from, savePosition) {
    // call whenever page changes
    if (savePosition) {
      return savePosition;
    }
    return { left: 0, top: 0 };
  },
});

//  call whenever page changes, next - foo which we have to call to either confirm or cansel this navigation action
router.beforeEach((to, from, next) => {
  console.log('beforeeach', to, from, next);
  // next(); // == next(true)
  // next(false);

  // if (to.path === '/teams/t3') {
  //   next();
  // } else {
  //   next('/teams/t3');
  // }

  if (to.meta.needsAuth) {
    console.log('needs auth');
    next();
  } else {
    next();
  }
});

router.afterEach((to, from) => {
  // sending analytics data / maybe log users paths
  console.log('afterEach', to, from);
});

export default router;
