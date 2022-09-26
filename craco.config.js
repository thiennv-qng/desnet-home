require("dotenv-cra").config(); // https://github.com/gsoft-inc/craco/issues/180

const { CracoLessPlugin } = require("./plugins/craco-less");
const CracoTheme = require("./plugins/craco-theme");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    },
    {
      plugin: CracoTheme,
      options: {
        theme: ["light", "dark"],
      },
    },
  ],
};
