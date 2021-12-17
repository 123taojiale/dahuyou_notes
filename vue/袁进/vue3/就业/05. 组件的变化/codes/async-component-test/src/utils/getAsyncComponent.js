import {
  defineAsyncComponent,
  h
} from "vue";
import delay from "./delay";
import ErrorComponent from "../components/ErrorComponent.vue";
import LoadingComponent from "../components/LoadingComponent.vue";

export default (path) => {
  return defineAsyncComponent({
    loader: async () => {
      await delay();
      if (Math.random() < 0.5) {
        throw Error("error...")
      }
      return import(path);
    },
    loadingComponent: () => {
      return h(LoadingComponent, "loading...");
    },
    errorComponent: (e) => {
      return h(ErrorComponent, e.error.message);
    },
  })
}