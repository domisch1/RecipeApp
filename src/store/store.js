import { createStore } from "vuex";
import router from "../router";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "@firebase/auth";

const store = createStore({
  state() {
    return {
      count: 0,
    };
  },
  getters: {},
  mutations: {},
  actions: {
    signUp(context, payload) {
      createUserWithEmailAndPassword(auth, payload.email, payload.password)
        .then((user) => {
          console.log(user);
          router.push("/create");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    login(context, payload) {
      signInWithEmailAndPassword(auth, payload.email, payload.password)
        .then((user) => {
          console.log(user);
          router.push("/create");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    signOut(context) {
      signOut(auth)
        .then(() => {
          console.log("signout successful");
          router.push("/login");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});

export default store;
