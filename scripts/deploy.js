/*
 * Script for deploy new version
 *
 * 1 change version in package.json
 * 2 run this script (npm run deploy)
 * it will make new commit message
 * deploy new version via npm publish
 * change version of library in all projects in examples folder,
 * deploy all examples projects
 * */
import path from 'path';
import fs from 'fs';
import {execSync} from 'child_process';

const rootPath = path.resolve(__dirname, '../');

const compose = (...fns) => val => fns.reduce((acc, fn) => fn(acc), val);

const packageJsonPath = path.normalize(path.resolve(rootPath, 'package.json'));
const examplesPath = path.normalize(path.resolve(rootPath, 'examples'));

const walkDirs = dir => {
  const dirPath = path.normalize(path.resolve(rootPath, dir));
  const dirs = [dirPath].concat(
    fs.readdirSync(dirPath).map(f => path.resolve(dirPath, f)),
  );
  return dirs;
};

const parseFile = file => {
  const filePath = fs.readFileSync(file);
  return JSON.parse(filePath);
};
const writeFile = (file, path) =>
  fs.writeFileSync(path, JSON.stringify(file, null, 4));

const filterDirs = dirs => dirs.filter(d => fs.statSync(d).isDirectory());
const filterNodeModules = dirs => dirs.filter(d => !d.includes('node_modules'));
const onlyDirsWithPackageJson = dirs =>
  dirs.filter(d => fs.existsSync(path.resolve(d, 'package.json')));
const replaceVersion = files => {
  const versionForReplace = getVersion(packageJsonPath);
  files.forEach(f => {
    const filePath = path.resolve(f, 'package.json');
    const fParsed = parseFile(filePath);

    fParsed.dependencies[
      'react-horizontal-scrolling-menu'
    ] = `^${versionForReplace}`;
    return writeFile(fParsed, filePath);
  });
  return files;
};
const getVersion = filePath => parseFile(filePath).version;
const deployExamples = pathes => {
  pathes.forEach(path => {
    process.chdir(path);

    execSync('npm install', {cwd: path});
    execSync('npm run deploy', {cwd: path});
  });
};
const npmPublish = async () => {
  const version = getVersion(packageJsonPath);
  try {
    await execSync('npm run build', {cwd: rootPath});
    await execSync('git add .', {cwd: rootPath});
    await execSync(`git commit -am"version ${version}"`, {cwd: rootPath});
    await execSync(`git tag ${version}`, {cwd: rootPath});
    await execSync('git push', {cwd: rootPath});
    await execSync('npm publish', {cwd: rootPath});
  } catch (e) {
    return false;
  }
};

// replace version of package in all examples recursively and deploy it
const replaceVersionAndRunScripts = compose(
  walkDirs,
  filterDirs,
  filterNodeModules,
  onlyDirsWithPackageJson,
  replaceVersion,
  deployExamples,
);

function main() {
  try {
    npmPublish();
  } catch (e) {
    return false;
  }
  replaceVersionAndRunScripts(examplesPath);
  console.log('New version and examples deployed!');
}

main();
