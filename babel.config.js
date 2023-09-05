module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: '.',
        alias: {
          '@components': './src/componets',
          '@hooks': './src/hooks',
          '@routes': './src/routes',
          '@screens': './src/Screens',
          '@theme': './src/theme',
          '@domain': './src/domain',
        },
      },
    ],
  ],
};
