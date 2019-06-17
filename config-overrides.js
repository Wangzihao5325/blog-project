const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#222',
      '@layout-header-padding': 0,
      '@menu-dark-color': '#909090',
      '@menu-dark-submenu-bg': '#222',
      '@menu-dark-bg': '#222',
    },
  }),
);