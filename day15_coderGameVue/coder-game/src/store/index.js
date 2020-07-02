import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bytes: 0,
    totalBytes: 0,
    bps: 0,
    bpk: 1, //bytes per key press
    player: {
      name: "",
      level: 0,
      nextLevel: 100, //bytes needed to go to next level
      increase: 3 //how many times to get to next level. 100 for first level and 200 more i.e 300 (100*3) for next
    },
    power_ups: [],
    upgrades: [
      {
        name: "Intern",
        cost: 50,
        increase: 1.15, //how much the cost goes up every time when an intern is purchased
        bps: 0.1, //worth of intern
        quantity: 0,
        unlocksAt: 0
    },
    {
        name: "Junior Developer",
        cost: 100,
        increase: 1.2,
        bps: 0.5,
        quantity: 0,
        unlocksAt: 1
    },
    {
      name: "Web Developer",
      cost: 300,
      increase: 1.4,
      bps: 1,
      quantity: 0,
      unlocksAt: 2
  }
    ]
  },
  mutations: {},
  getters: {
    bytesUntilLevelUp: state => {
      return Math.round(state.player.nextLevel - state.totalBytes); //will return bytes needed until next level
    }
  }
})
