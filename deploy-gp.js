/*
 * Script for deploy new version to github-pages
 *
 * 1 change version in package.json
 * 2 npm publish
 * 3 run this script (npm run deploy)
 * */
import path from 'path';
import fs from 'fs';
import { execSync } from 'child_process';

const rootPath = path.resolve(__dirname, './');
const examplePath = path.normalize(path.resolve(rootPath, 'example-nextjs'));

// eslint-disable-next-line radar/no-duplicate-string
const packageJsonPath = path.normalize(path.resolve(rootPath, 'package.json'));

const updatePackageJson = (examplePath) => {
  const versionForReplace = parseFile(packageJsonPath).version;

  const examplePackageJsonPath = path.resolve(examplePath, 'package.json');
  const examplePackageJsonContent = parseFile(examplePackageJsonPath);

  examplePackageJsonContent.dependencies[
    'react-horizontal-scrolling-menu'
  ] = `^${versionForReplace}`;

  examplePackageJsonContent.homepage =
    'https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu/';

  writeFile(examplePackageJsonContent, examplePackageJsonPath);

  return examplePath;
};

const deploy = (path) => {
  process.chdir(path);
  execSync('yarn install', { cwd: path });
  execSync('npx next build && npx next export -o dist', { cws: path });
  execSync('yarn add -D gh-pages', { cws: path });
  //   execSync('npx gh-pages -d dist', { cws: path });

  return path;
};

const restorePackageJson = (examplePath) => {
  const examplePackageJsonPath = path.resolve(examplePath, 'package.json');
  const examplePackageJsonContent = parseFile(examplePackageJsonPath);

  examplePackageJsonContent.dependencies['react-horizontal-scrolling-menu'] =
    'link:../.';

  writeFile(examplePackageJsonContent, examplePackageJsonPath);

  execSync('yarn install', { cwd: examplePath });

  return examplePath;
};

const writeFile = (file, path) =>
  fs.writeFileSync(path, JSON.stringify(file, null, 2));

const parseFile = (file) => {
  const filePath = fs.readFileSync(file);
  return JSON.parse(filePath);
};

const compose =
  (...fns) =>
  (val) =>
    fns.reduce((acc, fn) => fn(acc), val);

const doTheMagicAndDeploy = compose(
  updatePackageJson,
  deploy,
  restorePackageJson
);

function main() {
  console.log('Working...');
  doTheMagicAndDeploy(examplePath);
  console.log('New version of example deployed!');
}

main();
