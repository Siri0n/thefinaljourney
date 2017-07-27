var gulp = require('gulp');
var browserify = require("browserify");
var source = require("vinyl-source-stream");

var b = browserify({
	entries: ["main.js"],
	debug: true
}).transform(
	"babelify", 
	{
		presets: ["es2015", "react"],
		plugins: ["transform-object-rest-spread"]
	}
);

gulp.task("browserify", bundle);
gulp.task("default", ["browserify"]);

function bundle(){
	return b.bundle()
		.on("error", function(error){
			console.log(error + "");
		})
		.on("end", console.log.bind(console, "bundle.js transformed!"))
		.pipe(source("bundle.js"))
		.pipe(gulp.dest("./"));
}
