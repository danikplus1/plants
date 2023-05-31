// import * as flsFunction from "./modules/functions.js";
import * as jsonData from "./modules/services.js";
import * as checkMobile from "./modules/isMobile.js";
import * as menuBurg from "./modules/burger.js";
import * as blur from "./modules/blur.js";
import * as copyright from "./modules/copyright.js";
import * as scroll from "./modules/scroll.js";
import Swiper, { Navigation, Pagination } from "swiper";

// flsFunction.isWebp();
document.addEventListener("DOMContentLoaded", () => {
  jsonData.services();
  checkMobile.isMobile();
  menuBurg.burger();
  blur.buttons();
  copyright.year();
  scroll.nav();
});

const swiper = new Swiper();
