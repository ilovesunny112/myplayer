var autoprefixer = require("autoprefixer")

module.exports = {
    souceMap:true,
    plugins:[
        // require("precss"),
        // require("autoprefixer")
        autoprefixer({
                  browsers:"cover 99.5%"
        })
    ]
}