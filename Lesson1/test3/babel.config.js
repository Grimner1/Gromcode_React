module.exports = {
  presets: [
    ['@babel/preset-env', { targets: '> 1%', useBuiltIns: 'usage', corejs: 3, modules: false }],
    '@babel/preset-react',
  ],
  plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-transform-react-jsx'],
};
