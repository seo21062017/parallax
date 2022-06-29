// Получаем имя папки проекта
import * as nodePath from 'path';
import {webfonts} from "../tasks/webfonts.js";
const rootFolder = nodePath.basename(nodePath.resolve());


const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
    build: {
        images: `${buildFolder}/img/`,
        js: `${buildFolder}/js/`,
        jquery: `${buildFolder}/js/modules/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        fonts: `${buildFolder}/fonts/`,
        files: `${buildFolder}/files/`,
        video: `${buildFolder}/video/`,
        audio: `${buildFolder}/audio/`,
        webfonts: `${buildFolder}/webfonts/`

    },
    src: {
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/img/**/*.svg`,
        js: `${srcFolder}/js/app.js`,
        jquery: `${srcFolder}/js/modules/*.js`,
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/files/**/*.*`,
        video: `${srcFolder}/video/**/*.*`,
        audio: `${srcFolder}/audio/**/*.*`,
        webfonts: `${srcFolder}/webfonts/**/*.*`,
        svgicons: `${srcFolder}/svgicons/*.svg`,
    },
    watch: {
        js: `${srcFolder}/js/**/*.js`,
        scss: `${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/**/*.html`,
        files: `${srcFolder}/files/**/*.*`,
        jquery: `${srcFolder}/js/modules/**/*.*`,
        video: `${srcFolder}/video/**/*.*`,
        audio: `${srcFolder}/audio/**/*.*`,
        webfonts: `${srcFolder}/webfonts/**/*.*`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg}`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: `test`
}
