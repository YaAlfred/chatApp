----Simple chat application---

- install npm modules:
npm update

- then to build run:
babel --presets react ./js/source -d js/build
browserify ./js/build/app.js -o bundle.js
