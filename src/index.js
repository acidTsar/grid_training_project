import "./index.html";
import "./index.scss";
import { mult, sum } from "./modules/calc";
import AOS from "../node_modules/aos/dist/aos";

AOS.init();

console.log(mult(3, 5));
console.log(sum(4, 8));
