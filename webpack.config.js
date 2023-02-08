const path = require("path")

module.exports = ({ development }) => ({
    entry: "./src/index.ts",
    devtool: development ? "inline-source-map" : false,
    mode: development ? "development" : "production",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "lib"),
        library: "ui-kit",
        libraryExport: "default",
        libraryTarget: "umd",
        umdNamedDefine: true,
        globalObject: "typeof self === \"undefined\" ? this : self",
        clean: true,
    },
    resolve: {
        extensions: [".ts", ".tsx"],
    },
    externals: {
        react: "react"
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                use: {
                    loader: "ts-loader",
                    options: {
                        configFile: development ? "tsconfig.json" : "tsconfig.prod.json"
                    }
                },
                exclude: /node_modules/,
            }
        ],
    },
})
