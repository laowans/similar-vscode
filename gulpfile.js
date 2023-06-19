const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');

function buildCss() {
	return gulp
		.src('./src/index.css') // 入口文件
		.pipe(concat('similar-vscode.css')) // 合并为一个文件
		.pipe(cleanCSS()) // 压缩CSS
		.pipe(gulp.dest('dist')); // 输出到dist目录
}

exports.default = buildCss;
