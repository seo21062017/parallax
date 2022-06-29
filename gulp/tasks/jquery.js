export const jquery = () => {
    return app.gulp.src(app.path.src.jquery)
        .pipe(app.gulp.dest(app.path.build.jquery))
}