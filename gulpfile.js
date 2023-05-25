//Gulp se utiliza para automatizar tareas repetitivas, como compilar archivos sass.
//se importan modulos de gulp que permiten leeer archivos de origen, escribir sarchivos de destino, observar cambios en archivos y ejecutar tareas en serie.
const { src, dest, watch, series } = require('gulp');
//se importan moduilos de sass y purgecss.
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss');


function buildStyles(){
//esta funcion compila archivos sass en css.
    return src('sass/**/*.scss')
    .pipe(sass())
    .pipe(purgecss({ content: ['*.html'] 
}))
    .pipe(dest('css'))
}

function watchTask(){
//funcion encargada de observar cambios en el archivo index.css y ejecuta buildStyles cuando se detecten cambios.
    watch(['sass/**/*.scss', '*.html'], buildStyles)
}

exports.default = series(buildStyles, watchTask)