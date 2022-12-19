import { createRouter, createWebHistory } from "vue-router";
import TheSetting from "../views/settings/TheSetting.vue";
import EmployeesList from "../views/employees/EmployeeList.vue";
import CustomerList from "../views/customers/CustomerList.vue";
import ReportList from "../views/reports/ReportList.vue";

const routes = [
  {
    path: "/home",
    component: TheSetting,
  },
  {
    path: "/customers",
    component: CustomerList,
  },
  {
    path: "/employees",
    component: EmployeesList,
  },
  {
    path: "/reports",
    component: ReportList,
  },
  {
    path: "/settings",
    component: TheSetting,
  },
];

//Khởi tạo vue router:
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
