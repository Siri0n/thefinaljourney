var gulp = require("gulp"),
	browserify = require("browserify"),
	source = require("vinyl-source-stream");
	gm = require("gm")
	fs = require("fs");

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

function bundle(){
	return b.bundle()
		.on("error", function(error){
			console.log(error + "");
		})
		.on("end", console.log.bind(console, "bundle.js transformed!"))
		.pipe(source("bundle.js"))
		.pipe(gulp.dest("./"));
}

gulp.task("browserify", bundle);
gulp.task("default", ["browserify"]);

var config = require("./svg/config.js");

function convert(input, output, height, width){
	return new Promise(function(resolve, reject){
		gm(input)
			.background("transparent")
			.trim()
			.resize(width, height, "!")
			.write(output, function(err){
				err ? reject(err) : resolve();
			})
	})
}

gulp.task("convert", function(){
	Promise.all(
		config.map(function(entry){
			return convert(
				"svg/" + entry.in, 
				"img/" + entry.out, 
				entry.width, 
				entry.height)
		})
	).then(
		function(){
			console.log("Converted succesfully")
		},
		function(err){
			throw err;
		}
	)
})