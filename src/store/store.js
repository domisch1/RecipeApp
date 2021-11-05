import { createStore } from "vuex";
import router from "../router";
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "@firebase/auth";
import { doc, setDoc, collection, onSnapshot } from "@firebase/firestore";

const store = createStore({
  state() {
    return {
      userEmail: "",
      recipes: [],
      dates: [],
      draftedRecipes: [],
      shoppingList: [],
    };
  },
  getters: {},
  mutations: {
    setUser(state, payload) {
      state.userEmail = payload.email;
    },
    setRecipes(state, payload) {
      state.recipes = [];
      payload.forEach((recipe) => {
        state.recipes.push(recipe.data());
      });
    },
    createDraft(state, payload) {
      state.dates = [];
      state.draftedRecipes = [];
      state.shoppingList = [];
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      state.dates.push(payload.dateStart.toLocaleString("de-DE", options));
      const startMonth = payload.dateStart.getMonth();
      const startYear = payload.dateStart.getFullYear();
      const dateDiff = payload.dateEnd.getDate() - payload.dateStart.getDate();
      for (let i = 1; i < dateDiff; i++) {
        let startDay = payload.dateStart.getDate() + i;
        let nextDay = new Date(startYear, startMonth, startDay);
        state.dates.push(nextDay.toLocaleString("de-DE", options));
      }
      state.dates.push(payload.dateEnd.toLocaleString("de-DE", options));
      for (let j = 0; j < dateDiff; j++) {
        state.draftedRecipes.push(state.recipes[j]);
        state.draftedRecipes[j].date = state.dates[j];
        for (let x = 0; x < state.recipes[j].list.length; x++) {
          state.shoppingList.push(state.recipes[j].list[x]);
        }
      }
    },
  },
  actions: {
    // USER AUTH
    signUp(context, payload) {
      createUserWithEmailAndPassword(auth, payload.email, payload.password)
        .then((user) => {
          console.log(user);
          router.push("/create");
          setDoc(doc(db, "users", payload.email), {
            email: payload.email,
          });
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

    // CREATE RECIPE
    createRecipe(context, payload) {
      const userDB = setDoc(
        doc(db, "users", context.state.userEmail, "recipes", payload.name),
        {
          name: payload.name,
          category: payload.category,
          duration: payload.duration,
          list: payload.list,
          description: payload.description,
        }
      );
    },
    // GET RECIPES
    getRecipes(context) {
      const sub = onSnapshot(
        collection(db, "users", context.state.userEmail, "recipes"),
        (snap) => {
          context.commit("setRecipes", snap);
        }
      );
    },
    // WATCH AUTH STATE
    watchAuth(context) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          context.commit("setUser", user);
          context.dispatch("getRecipes");
        } else {
          console.log("user signed out");
        }
      });
    },
  },
});

export default store;
