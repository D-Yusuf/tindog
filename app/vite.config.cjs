const { resolve } = require('path');

module.exports = {
    build: {
      rollupOptions: {
        input: {
            main: resolve(__dirname, 'index.html'),
            mainJs: resolve(__dirname, 'index.js'),
            data: resolve(__dirname, './public/data.js'),
            constructor: resolve(__dirname, './public/Dog.js'),
          },
      },
    },
  }