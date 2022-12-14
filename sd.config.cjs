module.exports = {
  source: ['sd-input/**/*.json'],
  fileHeader: {
    autoGeneratedFileHeader: () => {
      return [`Do not edit directly, this file was auto-generated`];
    },
  },
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'tokens/',
      // prefix: 'figma',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
          options: {
            fileHeader: 'autoGeneratedFileHeader',
          },
        },
      ],
    },
    js: {
      transformGroup: 'js',
      buildPath: 'tokens/',
      files: [
        {
          destination: 'variables.js',
          format: 'javascript/es6',
        },
      ],
    },
  },
};
