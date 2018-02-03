// 引入gulp
let gulp = require('gulp');
let sass = require('gulp-sass');
let path={
    sass:'./src/sass/*.scss',
    js:'./.src/js/*.js'
}
 // 创建gulp任务：编译sass
 gulp.task('cpSass',function(){
    // 查找sass文件
    gulp.src(path.sass)
    // 编译
    .pipe(sass({outputStyle:'expanded'}).on('error',sass.logError))
    // 编译后的css输出硬盘
    .pipe(gulp.dest('./src/css'))
 });
 // 监听sass文件自动编译
 gulp.task('jtSass',function(){
    gulp.watch(path.sass,['cpSass']);
 });
 // 浏览器自动刷新页面
 let browserSync = require('browser-sync');
 // 创建任务
 gulp.task('server',function(){
    // 启动一个自动刷新的服务器
    browserSync({
        // 指定端口
        port:17081,
        // 代理服务器
        proxy:'http://localhost:17080/',
        // 监听文件修改
        files:['./src/**/*.html','./src/css/*.css','./src/api/*.php']
    });
    gulp.watch(path.sass,['cpSass']);
});
    
