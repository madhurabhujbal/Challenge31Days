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
  mutations: {
    incrementBytes: (state, increment) => {
      state.bytes += increment;
      state.totalBytes +=increment;
    },
    levelUp: state => {
      state.player.level++;
      state.player.nextLevel *= state.player.increase;
    },
    buyUpgrade: (state, {index, amount}) => {
      if(state.bytes >= state.upgrades[index].cost) { //if we have more bytes than it costs
        state.bytes -= state.upgrades[index].cost;//remove the cost from current bytes if we purchase the upgrade
        state.upgrades[index].quantity += amount;
        state.upgrades[index].cost = Math.round(state.upgrades[index].cost * state.upgrades[index].increase);//After purchasing upgrade, cost of button will increase for next puechase
      } else {
        alert('You need more bytes');
      }
    },
    bytesPerSecond: state => {
      state.bps = 0; //we have to reset this every time to get true bps
      state.upgrades.forEach(upgrade => { //loop through each upgrade. This function is called 60 times/sec
        state.bps += (upgrade.bps * upgrade.quantity); //getting bps after all upgrades combined into one
        state.bytes += (upgrade.bps * upgrade.quantity) / 60; //its divided by 60 bcoz we want bytes/sec
        state.totalBytes += (upgrade.bps * upgrade.quantity) / 60;
      });
    }
  },

  getters: {
    bytesUntilLevelUp: state => {
      return Math.round(state.player.nextLevel - state.totalBytes); //will return bytes needed until next level
    },
    availableUpgrades: state => {
      return state.upgrades.filter(upgrade => {
        if(upgrade.unlocksAt <= state.player.level) {
          upgrade.disabled = false;
          return upgrade;
        } else if(upgrade.unlocksAt - 1 == state.player.level) {
          upgrade.disabled = true;
          return upgrade;
        }
      });
    }
  }
})
