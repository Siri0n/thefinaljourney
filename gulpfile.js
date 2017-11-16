var gulp = require("gulp"),
	browserify = require("browserify"),
	source = require("vinyl-source-stream"),
	fs = require("fs"),
	Inkscape = require("inkscape");

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

function convert(input, output, width, nocrop){
	console.log(input, output, width);
	return new Promise(function(resolve, reject){
		var read = fs.createReadStream(input),
			write = fs.createWriteStream(output);
		var options = ["--export-png", "--export-width=" + width];
		if(!nocrop){
			options.push("--export-area-drawing");
		}
		read.pipe(new Inkscape(options)).pipe(write).on("close", resolve);
	})
}

gulp.task("convert", function(){
	Promise.all(
		config.map(function(entry){
			return convert(
				"svg/" + entry.in, 
				"img/" + entry.out, 
				entry.width, 
				entry.nocrop
			);
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