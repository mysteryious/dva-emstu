import * as Api from "@/services/index"


export default {

  namespace: 'user',

  state: {
    username: "pan",
    password: "123321",
  },

  reducers: {
    setState(state, action) {
      let data = JSON.parse(JSON.stringify(state));
      data = { ...action.payload };
      console.log(data)
      // let { username, password } = action.payload;
      return { ...data }
    }
  },
  effects: {
    *login({ payload }, { call, put }) {
      let data = yield call(Api.login, payload)
      // if (data.data.lenght) {
      //   yield put({ type: 'save' });
      // }
      return data.data
    },
    *register({ payload }, { call, put }) {
      let data = yield call(Api.register, payload)
      console.log(data)
      // if (data.data.lenght) {
      //   yield put({ type: 'save' });
      // }
      return data.data
    },

  },

};