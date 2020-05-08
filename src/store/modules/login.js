export default {
  namespaced: true,
  state: {
    userInfo: {}
  },
  actions: {
    login({ commit }, params) {
      const { userName, userPwd } = params
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (userPwd === "123456") {
            commit("updateUserInfo", { ...params, token: `token_${new Date().getTime()}` })
            resolve(userName)
          } else {
            reject("账号密码不匹配，密码为123456")
          }
        }, 666)
      })
    },
    loginOut({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit("updateUserInfo", {})
          resolve("退出成功")
        }, 666)
      })
    }
  },
  mutations: {
    updateUserInfo(state, params) {
      state.userInfo = params
    }
  },
  getters: {
    userInfo(state) {
      return state.userInfo
    }
  }
}