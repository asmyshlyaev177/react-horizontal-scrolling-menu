import{i as e}from"./preload-helper-BdFrVu1K.js";var t;e((()=>{t=`{
  "name": "react-horizontal-scrolling-menu",
  "version": "8.2.2",
  "author": {
    "name": "Aleksandr Smyshliaev",
    "email": "asmyshlyaev177@gmail.com",
    "url": "https://asmyshlyaev177.dev"
  },
  "description": "Scrolling horizontal menu component for React, support mouse and touch devices.",
  "keywords": [
    "front-end",
    "react",
    "react-component",
    "menu",
    "navigation",
    "gallery",
    "horizontal",
    "scroll",
    "scrolling",
    "scrolling-menu",
    "popular"
  ],
  "license": "MIT",
  "type": "module",
  "main": "dist/index.mjs",
  "browser": "dist/index.mjs",
  "module": "dist/index.mjs",
  "unpkg": "dist/index.cjs",
  "types": "dist/types/index.d.ts",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu.git"
  },
  "homepage": "https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu",
  "funding": {
    "type": "patreon",
    "url": "https://patreon.com/asmyshlyaev177"
  },
  "bugs": {
    "url": "https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues"
  },
  "exports": {
    ".": {
      "types": "./dist/types/index.d.ts",
      "browser": "./dist/index.mjs",
      "module": "./dist/index.mjs",
      "import": "./dist/index.mjs",
      "umd": "./dist/index.cjs",
      "require": "./dist/index.cjs"
    },
    "./dist/styles.css": "./dist/styles.css",
    "./styles.css": "./dist/styles.css"
  },
  "typesVersions": {
    "*": {
      "*": [
        "dist/types/"
      ]
    }
  },
  "engines": {
    "node": ">=24",
    "npm": ">=11"
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx,mjs,cjs}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{html,css,less,ejs,json,md,yml,yaml}": [
      "prettier --write"
    ]
  },
  "scripts": {
    "test:unit": "wireit",
    "test:e2e": "wireit",
    "test:e2e:dev": "wireit",
    "test:storybook": "wireit",
    "test:storybook-ci": "wireit",
    "test": "wireit",
    "test:lint": "wireit",
    "run:e2e": "wireit",
    "dev": "wireit",
    "kill-rollup": "wireit",
    "build": "wireit",
    "demo": "wireit",
    "serve": "wireit",
    "release": "wireit",
    "pub": "wireit",
    "push": "wireit",
    "beta": "npm version premajor --preid=beta",
    "beta:bump": "npm version prerelease",
    "beta:pub": "npm run build && npm publish --tag beta",
    "reinstall": "npm run cleanup && npm run setup",
    "install-deps": "wireit",
    "install-example-deps": "wireit",
    "setup-tooling": "wireit",
    "setup": "npm install && npm run setup-tooling",
    "cleanup": "rm -rf node_modules example-nextjs/node_modules .wireit dist",
    "storybook": "wireit",
    "build-storybook": "wireit",
    "prepack": "npm run build",
    "prepare": "husky",
    "release:preflight": "wireit"
  },
  "wireit": {
    "build-storybook": {
      "command": "storybook build",
      "dependencies": [
        "build",
        "setup-tooling"
      ]
    },
    "storybook": {
      "command": "storybook dev -p 6006 --no-open",
      "service": {
        "readyWhen": {
          "lineMatches": "localhost:6006"
        }
      },
      "dependencies": [
        "build",
        "setup-tooling"
      ]
    },
    "test:storybook-ci": {
      "command": "npx wait-on http://localhost:6006 && test-storybook --browsers firefox chromium webkit",
      "dependencies": [
        "storybook",
        "setup-tooling"
      ]
    },
    "test:storybook": {
      "command": "npx wait-on http://localhost:6006 && test-storybook --browsers firefox chromium",
      "dependencies": [
        "storybook",
        "setup-tooling"
      ]
    },
    "release:preflight": {
      "command": "sh -eu -c 'branch=$(git rev-parse --abbrev-ref HEAD); [ \\"$branch\\" = master ] || { echo \\"Refusing to release from $branch; releases are cut from master.\\" >&2; exit 1; }; [ -z \\"$(git status --porcelain)\\" ] || { echo \\"Refusing to release with a dirty working tree; commit or stash first.\\" >&2; git status --short >&2; exit 1; }; git fetch --quiet origin master; [ \\"$(git rev-parse HEAD)\\" = \\"$(git rev-parse origin/master)\\" ] || { echo \\"Local master is not in sync with origin/master; pull or push first.\\" >&2; exit 1; }'"
    },
    "release": {
      "command": "commit-and-tag-version --no-verify",
      "dependencies": [
        "release:preflight",
        "test:lint",
        "test"
      ]
    },
    "pub": {
      "command": "npm run release && npm run push && npm publish",
      "dependencies": [
        "build"
      ]
    },
    "push": {
      "command": "git push --follow-tags origin HEAD"
    },
    "test": {
      "command": "npm run test:e2e && npm run test:e2e:dev",
      "dependencies": [
        "test:unit",
        "test:storybook"
      ]
    },
    "test:lint": {
      "command": "eslint src e2e playwright.config.ts && prettier --check src e2e playwright.config.ts && tsc --noEmit && tsc --noEmit -p tsconfig.e2e.json",
      "dependencies": [
        "setup-tooling"
      ]
    },
    "test:unit": {
      "command": "jest",
      "dependencies": [
        "setup-tooling"
      ]
    },
    "test:e2e": {
      "command": "npm run run:e2e",
      "dependencies": [
        "serve"
      ]
    },
    "test:e2e:dev": {
      "command": "npm run run:e2e",
      "dependencies": [
        "demo"
      ]
    },
    "kill-rollup": {
      "command": "ps aux | grep rollup | grep -v grep | awk '{print $2}' | xargs kill -9 || echo 'killed'"
    },
    "run:e2e": {
      "command": "npx wait-on http://localhost:3003 && playwright test",
      "dependencies": [
        "install:playwright"
      ]
    },
    "dev": {
      "command": "cross-env IS_DEVELOPMENT=true rollup -c rollup.config.js -w",
      "service": true,
      "dependencies": [
        "setup-tooling",
        "kill-rollup"
      ]
    },
    "demo": {
      "command": "cd example-nextjs && npm run dev",
      "service": true,
      "dependencies": [
        "dev"
      ]
    },
    "serve": {
      "command": "cd example-nextjs && npm run build && npm run serve 1> /dev/null",
      "service": true,
      "dependencies": [
        "build"
      ]
    },
    "install-deps": {
      "command": "npm install",
      "allowUsuallyExcludedPaths": true,
      "clean": false,
      "files": [
        "package.json",
        "package-lock.json"
      ],
      "output": [
        "node_modules"
      ]
    },
    "install:playwright": {
      "command": "npx playwright install chromium firefox webkit",
      "clean": false,
      "files": [
        "package.json"
      ],
      "output": [],
      "dependencies": [
        "install-deps"
      ]
    },
    "install-example-deps": {
      "command": "cd example-nextjs && npm install",
      "dependencies": [
        "install-deps"
      ],
      "allowUsuallyExcludedPaths": true,
      "clean": false,
      "files": [
        "example-nextjs/package.json"
      ],
      "output": [
        "example-nextjs/node_modules"
      ]
    },
    "setup-tooling": {
      "command": "echo 'setup'",
      "files": [
        "package.json"
      ],
      "clean": false,
      "output": [],
      "dependencies": [
        "install-example-deps",
        "install:playwright"
      ]
    },
    "build": {
      "command": "rollup -c rollup.config.js",
      "clean": true,
      "output": [
        "dist",
        "dist/index.cjs",
        "dist/index.mjs",
        "dist/types"
      ],
      "dependencies": [
        "setup-tooling",
        "kill-rollup"
      ]
    }
  },
  "browserslist": [
    "last 5 Chrome versions",
    "last 5 ChromeAndroid versions",
    "last 5 Firefox versions",
    "last 5 FirefoxAndroid versions",
    "Firefox ESR",
    "last 3 Safari major versions",
    "last 2 iOS major versions"
  ],
  "peerDependencies": {
    "react": ">=16.8",
    "react-dom": ">=16.8"
  },
  "files": [
    "dist"
  ],
  "config": {
    "commitizen": {
      "path": "cz-conventional-changelog"
    }
  },
  "commitlint": {
    "extends": [
      "@commitlint/config-conventional"
    ]
  },
  "devDependencies": {
    "@commitlint/cli": "^21.2.1",
    "@commitlint/config-conventional": "^21.2.0",
    "@emotion/react": "^11.14.0",
    "@emotion/styled": "^11.14.1",
    "@eslint/js": "^9.39.5",
    "@formkit/auto-animate": "^0.8.4",
    "@jest/globals": "^30.4.1",
    "@playwright/test": "^1.62.0",
    "@rollup/plugin-commonjs": "^29.0.3",
    "@rollup/plugin-node-resolve": "^16.0.3",
    "@rollup/plugin-terser": "^1.0.0",
    "@rollup/plugin-typescript": "^12.3.0",
    "@storybook/addon-docs": "^10.5.5",
    "@storybook/addon-links": "^10.5.5",
    "@storybook/react-vite": "^10.5.5",
    "@storybook/test-runner": "^0.24.4",
    "@testing-library/jest-dom": "^7.0.0",
    "@testing-library/react": "^16.3.2",
    "@testing-library/user-event": "^14.6.1",
    "@types/jest": "^30.0.0",
    "@types/node": "^24.13.3",
    "@types/react": "^19.2.17",
    "@types/react-dom": "^19.2.3",
    "browserslist": "^4.28.7",
    "commit-and-tag-version": "^13.1.2",
    "commitizen": "^4.3.2",
    "cross-env": "^10.1.0",
    "cz": "^1.8.2",
    "cz-conventional-changelog": "^3.3.0",
    "eslint": "^9.39.5",
    "eslint-config-prettier": "^10.1.8",
    "eslint-plugin-compat": "^7.0.2",
    "eslint-plugin-jest": "^29.16.0",
    "eslint-plugin-jsx-a11y": "^6.10.2",
    "eslint-plugin-playwright": "^2.2.2",
    "eslint-plugin-react": "^7.37.5",
    "eslint-plugin-react-hooks": "^7.1.1",
    "eslint-plugin-simple-import-sort": "^14.0.0",
    "eslint-plugin-sonarjs": "^4.2.0",
    "eslint-plugin-storybook": "^10.5.5",
    "eslint-plugin-unused-imports": "^4.4.1",
    "globals": "^17.8.0",
    "husky": "^9.1.7",
    "jest": "^30.4.2",
    "jest-environment-jsdom": "^30.4.1",
    "lint-staged": "^17.2.0",
    "normalize.css": "^8.0.1",
    "prettier": "^3.9.6",
    "react": "^19.2.8",
    "react-dom": "^19.2.8",
    "react-markdown": "^10.1.0",
    "remark-gfm": "^4.0.1",
    "rollup": "^4.62.3",
    "rollup-plugin-filesize": "^10.0.0",
    "rollup-plugin-ignore": "^1.0.10",
    "rollup-plugin-postcss": "^4.0.2",
    "rollup-plugin-sourcemaps2": "^0.5.8",
    "storybook": "^10.5.5",
    "storybook-addon-code-editor": "^6.2.0",
    "ts-jest": "^29.4.12",
    "tslib": "^2.8.1",
    "typescript": "^6.0.3",
    "typescript-eslint": "^8.65.0",
    "usehooks-ts": "^3.1.1",
    "vite": "^8.1.5",
    "wait-on": "^9.1.0",
    "wireit": "^0.14.13"
  },
  "dependencies": {
    "smooth-scroll-into-view-if-needed": "^2.0.2"
  }
}
`}))();export{t as default};