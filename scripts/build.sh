babel --presets react ../js/source -d js/build
browserify ../js/build/app.js -o bundle.js
