const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: './',
    pages: {
        index: {
            // エントリーポイント
            entry: 'src/main.ts',
        },
    }
});