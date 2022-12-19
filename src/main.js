import { createApp } from "vue";
import App from "./App.vue";
import MButton from "./components/base/MButton.vue";
import MSCombobox from "ms-combobox";
import router from "./router";

const app = createApp(App);

app.component("m-button", MButton); //Khai báo dùng chung global
app.component("ms-combobox", MSCombobox);
app.use(router);
app.mount("#app");
