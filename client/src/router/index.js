import Vue from 'vue'
import Router from 'vue-router'

import Index from '../views'
import GameIndex from '../views/games'
import Game from '../views/games/_id'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'top',
      component: Index,
    },
    {
      path: '/games',
      name: 'games',
      component: GameIndex,
    },
    {
      path: '/games/:id',
      name: 'game',
      component: Game,
    },
  ],
})
