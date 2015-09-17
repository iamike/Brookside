var gulp = require('gulp');
var tinypng = require('gulp-tinypng-compress');
 
gulp.task('tinypng', function () {
    gulp.src('imagesSingle/*.{png,jpg,jpeg}')
        .pipe(tinypng({
            key: 'fveZMWHOnCBaMh5SVt8wBX8naQioQFH1',
            checkSigs: true,
            sigFile: 'images/.tinypng-sigs',
            log: true
        }))
        .pipe(gulp.dest('images'));
});