export const json = () => {
  return app.gulp
    .src(app.path.src.json, { sourcemaps: true })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "JSON",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(app.gulp.dest(app.path.build.json))
    .pipe(app.plugins.browsersync.stream());
};
