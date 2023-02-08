import { applyPolyfills, defineCustomElements } from "ads-ui/loader";
import { Plugin } from "vue";

export const ComponentLibrary: Plugin = {
  async install() {
    applyPolyfills().then(() => {
      defineCustomElements();
    });
  },
};