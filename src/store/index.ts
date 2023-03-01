import { defineStore } from "pinia";
import { ref } from "vue";
import { User } from "../interfaces/UserInterface";

export const useMainStore = defineStore("main", {
  state: () => ({
    errorMessage: "",
    isEditing: false,
    showSideBar: ref(false),
    toastMessage: { message: "", severity: "" },
    user: ref({} as User),
    items: ref([{}]),
    userId: "",
    userToken: "",
    menuTitle: "",
    theme: "vela-orange",
  }),
  getters: {
    getUserId(): string {
      if (localStorage.getItem("userId")) {
        return localStorage.getItem("userId") || "";
      } else {
        return this.userId;
      }
    },
    userInitials(): string {
      if (!this.user || !this.user.name) return "U";
      return this.user.name
        .split(" ")
        .map((word: string) => word[0])
        .join("");
    },
  },
  actions: {
    setUser(user: User) {
      this.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
    getUserToken(): void {
      if (localStorage.getItem("userToken")) this.userToken = localStorage.getItem("userToken") || "";
      else if (sessionStorage.getItem("userToken")) this.userToken = sessionStorage.getItem("userToken") || "";
    },
    setUserToken(userToken: string) {
      this.userToken = userToken;
      sessionStorage.setItem("userToken", userToken);
    },
    setUserId(userId: string) {
      this.userId = userId;
      localStorage.setItem("userId", userId);
    },
    logout() {
      localStorage.removeItem("userToken");
      sessionStorage.removeItem("userToken");
      this.userToken = "";
    },
  },
});
