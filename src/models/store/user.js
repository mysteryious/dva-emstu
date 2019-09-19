export default {

  namespace: 'user',

  state: {
    username: "panhuijuan",
    password: "123321"
  },

  reducers: {
    setUsername(state, action) {
      console.log(action, "jinlailema")
      let { username } = action.payload;
      state.username = username;
      return { ...state }
    }
  },

  effects: {
    // *login({ payload }, { call, put }) {
    //   let data=yield call(Api.getShopList)
    //   yield put({ type: 'save' });
    // },
  },

  // subscriptions: {
  //  init({dispatch}){
  //     dispatch({ });
  //  }
  // },

};