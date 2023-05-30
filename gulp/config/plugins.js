import replace from "gulp-replace";
import plumber from "gulp-plumber"; // error
import notify from "gulp-notify"; // tip
import browsersync from "browser-sync";
import newer from "gulp-newer";

export const plugins = {
  replace: replace,
  plumber: plumber,
  notify: notify,
  browsersync: browsersync,
  newer: newer,
};
