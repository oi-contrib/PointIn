const pkg = require("./package.json")

module.exports = {
    input: "./src/index.js",
    output: {
        name: 'PointIn',
        file: "./dist/PointIn.js",
        format: "umd",
        banner: `/*!
 * PointIn v${pkg.version}
 * git+https://github.com/oi-contrib/PointIn.git
 */`
    }
}
