module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module-resolver', {
      alias: {
        assets: './assets',
        components: './src/components',
        containers: './src/containers',
        store: './src/store',
        service: './src/service',
        utils: './src/utils',
        // configuration: configFile,
      },
    }],
    [
      'react-native-reanimated/plugin'
    ]
  ],
};
