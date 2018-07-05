const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const runSequence = require('run-sequence');
const clean = require('del');
const uglify = require('gulp-uglifyjs');
const chmod = require('gulp-chmod');

gulp.task('build', () => {
    return gulp.src(['./src/**/*.header.js','./src/**/*.class.js','./src/**/*.js'])
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('cssmod.js'))
        .pipe(uglify())
        .pipe(chmod({
            owner: {
                read: true,
                write: true,
                execute: true
            },
            group: {
                read: true,
                write: true,
                execute: true
            },
            others: {
                read: true,
                write: true,
                execute: true
            }
        }))
        .pipe(gulp.dest('./build/'));
});


gulp.task('watch', () => {
    gulp.watch('./src/**/*.js', {
        interval: 250
    }, ['build']);
});

gulp.task('clean', function() {
    return clean.sync(['./build/'], {
        force: false
    });
});

gulp.task('default', (done) => {
    runSequence(['clean', 'build'], 'watch', done);
});