import { createStore } from "vuex";
import router from "../router";
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "@firebase/auth";
import {
  doc,
  setDoc,
  collection,
  onSnapshot,
  deleteDoc,
  getDocs,
} from "@firebase/firestore";

const store = createStore({
  state() {
    return {
      userEmail: "",
      recipes: [],
      dates: [],
      draftedRecipes: [],
      shoppingList: [],
      draftDisabled: false,
    };
  },
  getters: {
    draftDisabled(state) {
      return state.draftDisabled;
    },
  },
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
    setDraftedRecipes(state, payload) {
      state.shoppingList = [];
      state.draftedRecipes = [];
      const regex = new RegExp("([0-9]+)|([a-zA-Z]+)", "g");
      payload.forEach((recipe) => {
        state.draftedRecipes.push(recipe.data());
        for (let i = 0; i < recipe.data().list.length; i++) {
          state.shoppingList.push(recipe.data().list[i]);
        }
      });
      for (let j = 0; j < state.shoppingList.length - 1; j++) {
        for (let x = j + 1; x < state.shoppingList.length; x++) {
          if (
            state.shoppingList[j].ingredient ===
            state.shoppingList[x].ingredient
          ) {
            let splittedArr1 = state.shoppingList[j].amount.match(regex);
            let splittedArr2 = state.shoppingList[x].amount.match(regex);
            if (splittedArr1[1] === splittedArr2[1]) {
              let num1 = parseFloat(splittedArr1[0]);
              let num2 = parseFloat(splittedArr2[0]);
              let amountSum = num1 + num2;
              if (splittedArr1.length && splittedArr2.length === 1) {
                state.shoppingList[j].amount = amountSum;
                state.shoppingList.splice(x, 1);
              } else {
                state.shoppingList[j].amount = amountSum + splittedArr1[1];
                state.shoppingList.splice(x, 1);
              }
            }
          }
        }
      }
      state.draftedRecipes.sort((a, b) => {
        return a.index - b.index;
      });
    },
    draftRecipesContent(state, payload) {
      state.dates = payload.datesContainer;
    },
    cleanRecipesContent(state) {
      state.shoppingList = [];
      state.dates = [];
    },
    draftMutations(state, payload) {
      if (payload.dateDiff >= state.recipes.length) {
        state.draftDisabled = true;
      } else {
        state.draftDisabled = false;
      }
    },
  },
  actions: {
    // HANDLING USER AUTH
    signUp(context, payload) {
      createUserWithEmailAndPassword(auth, payload.email, payload.password)
        .then((user) => {
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
          router.push("/create");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    signOut(context) {
      signOut(auth)
        .then(() => {
          router.push("/login");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    watchAuth(context) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          context.commit("setUser", user);
          context.dispatch("getRecipes");
          context.dispatch("getDraftedRecipes");
        } else {
          console.log("user signed out");
        }
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
    // CLEAN DATABSE
    async cleanDraftedRecipes(context, payload) {
      const sub = await getDocs(
        collection(db, "users", context.state.userEmail, "draftedRecipes")
      );
      sub.forEach((docData) => {
        deleteDoc(
          doc(
            db,
            "users",
            context.state.userEmail,
            "draftedRecipes",
            docData.data().name
          )
        );
      });
      context.commit("cleanRecipesContent");
      context.dispatch("getDraftedRecipes");
      context.dispatch("createDraftedRecipe", {
        dateStart: payload.dateStart,
        dateEnd: payload.dateEnd,
      });
    },
    // CREATE DRAFTED RECIPES
    async createDraftedRecipe(context, payload) {
      const dateDiff = payload.dateEnd.getDate() - payload.dateStart.getDate();
      if (dateDiff >= context.state.recipes.length) {
        context.commit("draftMutations", { dateDiff });
      } else {
        // CLEAN DRAFTED RECIPES FROM DATABASE
        let draftedRecipesContainer = [];
        context.commit("draftMutations", { dateDiff });
        // INIT CONTAINER ARRAYS
        let recipesCopy = [...context.state.recipes];
        let datesContainer = [];
        let shoppingListContainer = [];
        // CONFIG FOR DATES
        const options = {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        };
        const startMonth = payload.dateStart.getMonth();
        const startYear = payload.dateStart.getFullYear();
        // PUSH DATES INTO ARRAY
        datesContainer.push(payload.dateStart.toLocaleString("de-DE", options));
        for (let i = 1; i < dateDiff; i++) {
          let startDay = payload.dateStart.getDate() + i;
          let nextDay = new Date(startYear, startMonth, startDay);
          datesContainer.push(nextDay.toLocaleString("de-DE", options));
        }
        datesContainer.push(payload.dateEnd.toLocaleString("de-DE", options));
        // PUSH RECIPES INTO DRAFTED RECIPES
        for (let j = 0; j <= dateDiff; j++) {
          let randomNum = Math.floor(Math.random() * recipesCopy.length);
          draftedRecipesContainer.push(recipesCopy[randomNum]);
          draftedRecipesContainer[j].date = datesContainer[j];
          draftedRecipesContainer[j].index = j;
          for (let x = 0; x < recipesCopy[randomNum].list.length; x++) {
            shoppingListContainer.push(recipesCopy[randomNum].list[x]);
          }
          const userDB = setDoc(
            doc(
              db,
              "users",
              context.state.userEmail,
              "draftedRecipes",
              draftedRecipesContainer[j].name
            ),
            {
              name: draftedRecipesContainer[j].name,
              category: draftedRecipesContainer[j].category,
              duration: draftedRecipesContainer[j].duration,
              date: draftedRecipesContainer[j].date,
              index: draftedRecipesContainer[j].index,
              list: draftedRecipesContainer[j].list,
              description: draftedRecipesContainer[j].description,
            }
          );
          recipesCopy.splice(randomNum, 1);
        }
        context.commit("draftRecipesContent", {
          datesContainer: datesContainer,
        });
        context.dispatch("getDraftedRecipes");
      }
    },
    // GET DATA FROM DATABASE
    getRecipes(context) {
      const sub = onSnapshot(
        collection(db, "users", context.state.userEmail, "recipes"),
        (snap) => {
          context.commit("setRecipes", snap);
        }
      );
      onAuthStateChanged(auth, (user) => {
        if (user) {
        } else {
          sub();
        }
      });
    },
    async getDraftedRecipes(context) {
      const sub = await getDocs(
        collection(db, "users", context.state.userEmail, "draftedRecipes")
      );
      context.commit("setDraftedRecipes", sub);
    },
  },
});

export default store;
