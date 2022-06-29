import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from "gulp-rename";

import cleanCSS from 'gulp-clean-css'; // Сжатие CSS Файла
import webpcss from 'gulp-webpcss'; // Вывод Webp изображений
import autoprefixer from 'gulp-autoprefixer'; // Добавление вендорных префиксов
import groupCssMediaQueries from 'gulp-group-css-media-queries'; // Группировка медиа запросов


const sass = gulpSass(dartSass);



export const scss = () => {
    return app.gulp.src(app.path.src.scss, { sourcemaps: true })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "SCSS",
                message: "Error: <%= error.message %>"
            })
        ))
     //   .pipe(app.plugins.replace(/..\/img\//g, 'img/'))
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(groupCssMediaQueries())
        .pipe(webpcss({
            webpClass: '.webp',
            noWebpClass: 'no-webp'
        }))
        .pipe(autoprefixer({
            grid: true,
            overrideBrowsersList: ["last 3 version"],
            cascade: true
        }))
        // Раскоментировать если нужен не сжатый дубль файла
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(cleanCSS())
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browsersync.stream());
}