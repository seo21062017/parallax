import replace from  "gulp-replace"; // Поиск и замена
import plumber from "gulp-plumber"; // Обработка ошибок
import notify from "gulp-notify"; // Сообщения (Подсказки)
import browsersync from "browser-sync"; // Локальный сервер
import newer from "gulp-newer"; // Проверка обновления
import ifPlugin from "gulp-if"; //Условное ветвление

// Экспортируем объект

export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
    newer: newer,
    if: ifPlugin
}


//
//
// export const html = () => {
//     return app.gulp.src(app.path.src.html)
//         .pipe(fileinclude())
//         .pipe(app.gulp.dest(app.path.build.html))
// }