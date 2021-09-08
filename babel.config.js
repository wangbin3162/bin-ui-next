module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        loose: true,
        modules: false,
      },
    ],
  ],
  plugins: [
    ['@babel/plugin-transform-runtime', {
      'regenerator': true,
    }],
  ],
  env: {
    utils: {
      presets: [
        [
          '@babel/env',
          {
            loose: true,
            modules: false,
          },
        ],
      ],
      plugins: [
        [
          'module-resolver',
          {
            root: ['bin-ui-next'],
            alias: { 'bin-ui-next/src': 'bin-ui-next/lib' },
          },
        ],
      ],
    },
  },
}
