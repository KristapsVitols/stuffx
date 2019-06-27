module.exports = {
    devServer: {
        disableHostCheck: true,
        port: 3000,
    },
    css: {
        loaderOptions: {
            sass: {
                data: `@import "@/sass/main.scss";`
            },
        }
    }
};