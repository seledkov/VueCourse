import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
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
    { path: '/users', components: { default: UsersList, footer: UsersFooter } },
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
  console.log(to, from, next);
  // next(); // == next(true)
  // next(false);

  // if (to.path === '/teams/t3') {
  //   next();
  // } else {
  //   next('/teams/t3');
  // }
  next();
});

const app = createApp(App);

app.use(router);

app.mount('#app');
