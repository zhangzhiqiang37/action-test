const gulp = require('gulp');
const tree = require('tree-cli');

gulp.task('destTest1', function (cb) {
  gulp.src('./package.json')
    .pipe(gulp.dest('./dist/zh/'))
    .pipe(gulp.dest('./dist/en/'));
  cb();
});

gulp.task('destTest2', function (cb) {
  const stream = gulp.src('./package.json')
  stream.pipe(gulp.dest('./dist/zh_new/'));
  stream.pipe(gulp.dest('./dist/en_new/'));
  cb();
});

gulp.task('destTest', gulp.series('destTest1', 'destTest2', function (cb) {
  tree({
    base: './dist/',
    noreport: true,
    l: 2
  }).then(res => {
    console.log(res.report);
    cb();
  });
}))