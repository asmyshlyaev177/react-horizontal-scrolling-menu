/* eslint-disable */
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  // This demo and the library each have their own lockfile, so Turbopack cannot
  // infer the workspace root. It has to be the repo root rather than this
  // directory: `react-horizontal-scrolling-menu` is installed as `file:../` and
  // resolves through a symlink to the parent, which must stay inside the root.
  turbopack: {
    root: path.join(__dirname, '..'),
  },
};

module.exports = nextConfig;
