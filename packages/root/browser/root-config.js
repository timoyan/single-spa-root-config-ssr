import { registerApplication, start } from "single-spa";
import {
  constructRoutes,
  constructApplications,
  constructLayoutEngine,
} from "single-spa-layout";

const routes = constructRoutes(document.querySelector("#single-spa-layout"));
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});

// TODO: Comment it when SSR
 const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
start();
