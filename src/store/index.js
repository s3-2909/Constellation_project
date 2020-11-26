import { createStore } from 'vuex'
import state from './state'
import mutations from './mustations'


export default createStore({
  state,
  mutations
})
