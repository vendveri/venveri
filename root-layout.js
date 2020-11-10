const React = require('react');
const Layout = require('./src/components/Layout').default;

export function wrapLayout({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
