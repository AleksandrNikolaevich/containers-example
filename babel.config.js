module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
        ],
        root: ['./src'],
        alias: {
          '@shared': './src/shared',
          '@entities': './src/entities',
          '@features': './src/features',
          '@widgets': './src/widgets',
          '@pages': './src/pages',
          '@routing': './src/routing',
          '@processes': './src/processes',
          '@app': './src/app',
        },
      },
    ],
    '@babel/plugin-proposal-export-namespace-from',
    'react-native-reanimated/plugin',
  ],
};
