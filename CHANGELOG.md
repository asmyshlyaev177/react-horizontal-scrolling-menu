# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [3.2.0](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v3.1.1...v3.2.0) (2022-08-07)


### Features

* **rtl:** rtl support ([c727e1b](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/c727e1b1a89fdfb73f9a60dea421f7a1aecdb802))

### [3.1.1](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v3.1.0...v3.1.1) (2022-07-23)


### Bug Fixes

* convert itemId to string ([f7a75b3](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/f7a75b3a8ec0dfcc8aaee6656da5d3e06e5cc1d4)), closes [#207](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/207)

## [3.1.0](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v3.0.1...v3.1.0) (2022-06-26)


### Features

* use key prop if itemId not provided, getItemId helper ([29967d2](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/29967d250da421696e54fe4a8a5aeb9dedbc275e))

### [3.0.1](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v3.0.0...v3.0.1) (2022-06-19)


### Bug Fixes

* fixed styles for wrapper ([5755c1d](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/5755c1df7d5b50520371ba7cacd578318aab9485))

## [3.0.0](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v2.8.2...v3.0.0) (2022-06-19)


### ⚠ BREAKING CHANGES

* Removed Arrows prop

### Features

* header and footer initial implementation ([7d18fd4](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/7d18fd4c6d3b5ed7c54a61c043a859b40de61819)), closes [#197](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/197)


### Bug Fixes

* removed globalThis ([5d3d82e](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/5d3d82e5412cc84c66b7091f6167e6241173df25))


* test for header and footer, removed arrows ([4ae3014](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/4ae30149c673e41c9dd5123bd42e887ef9cebdf0))

### [2.8.2](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v2.8.1...v2.8.2) (2022-05-17)

### [2.8.1](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v2.8.0...v2.8.1) (2022-05-17)


### Bug Fixes

* fixed Arrows props can't pass as component ([4a24803](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/4a24803df36118fb8ad302594bcbd9f5411f3c57))

## [2.8.0](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v2.7.1...v2.8.0) (2022-05-17)


### Features

* arrows prop for use arrows with additional content ([7d53430](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/7d53430a957aaa0ec1db0d8be31a6a41a0beab35)), closes [#197](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/197)


### Bug Fixes

* changed target to es2015(es6) since some uglifiers don't support newer ([a6b42e5](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/a6b42e5700066ea287763586301afe49150ee2d0))

### [2.7.2](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v2.7.1...v2.7.2) (2022-05-04)


### Bug Fixes

* changed target to es2015(es6) since some uglifiers don't support newer ([b92f230](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/b92f2301296605a5003bbea62163578e09e69cb0)), closes [#195](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/195)

### [2.7.1](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v2.7.0...v2.7.1) (2022-02-23)


### Bug Fixes

* nextjs complaining about useLayoutEffect ([#191](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/191)) ([b07a2b8](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/b07a2b8abc31f2755092fb26598c01c086002c80))

## [2.7.0](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v2.6.1...v2.7.0) (2021-11-28)


### Features

* transition and animations ([0e9b5b9](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/0e9b5b9264328027a69a7b8d380c83f729895131))

### [2.6.1](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v2.6.0...v2.6.1) (2021-11-21)


### Bug Fixes

* fixed useOnUpdate staled value ([0c9a77b](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/0c9a77b6bc6068c43182ec2ddcb471fabc95e132))

## [2.6.0](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v2.5.2...v2.6.0) (2021-11-21)


### Features

* use smooth-scroll-into-view-if-needed library as polyfill ([c1911ab](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/c1911abee4ac5d701c9b6ec94c0826f82471d1ab)), closes [#174](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/174)

### [2.5.2](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v2.5.1...v2.5.2) (2021-11-10)


### Bug Fixes

* remove separators too when remove items ([079f2c5](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/079f2c58839a2275d23f20969d03aaa678ae21e9)), closes [#171](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/171)

### [2.5.1](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v2.5.0...v2.5.1) (2021-11-03)


### Bug Fixes

* don't use labeled tuple for support TS < 4 ([05e67ea](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/05e67ea1a68ac43258502917029e28bb38851300))

## [2.5.0](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v2.4.3...v2.5.0) (2021-10-16)


### Features

* getItemElementById and getItemElementByIndex helpers ([5bdc115](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/5bdc115e75d7484539a23ae44ba6687f35e6d1ad)), closes [#167](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/167)

### [2.4.4](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v2.4.3...v2.4.4) (2021-10-14)

### [2.4.3](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v2.4.2...v2.4.3) (2021-10-13)

### [2.4.2](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v2.4.1...v2.4.2) (2021-10-12)


### Bug Fixes

* fixed situation when items added at start, need to handle when items removed ([83a484e](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/83a484e76ead6ca2ef231b48ed62298bd11cc3ed)), closes [#164](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/164)

### [2.4.1](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v2.4.0...v2.4.1) (2021-10-08)

## [2.4.0](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v2.3.3...v2.4.0) (2021-10-06)


### Features

* **apiref:** apiRef object for access VisibilityContext from outside of Menu component ([ef9a281](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/ef9a281a22aa5db21e2a2b74d9a768179770af50))

### [2.3.3](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v2.3.2...v2.3.3) (2021-09-26)

### [2.3.2](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v2.3.1...v2.3.2) (2021-09-24)

### [2.3.1](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v2.3.0...v2.3.1) (2021-09-24)


### Bug Fixes

* ts types on same level as index, codesandbox doesn't see it otherwise ([27cc26f](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/27cc26fbc59d90b5a95c368f058a139ab40135d0))

## [2.3.0](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v2.2.1...v2.3.0) (2021-09-24)


### Features

* **onupdate:** onUpdate cb that called every time visibleItems changed ([f4f5dd5](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/f4f5dd571c3e0b397c5d6f95e27804d85779e243))

### [2.2.1](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v2.2.0...v2.2.1) (2021-09-23)

## [2.2.0](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v2.1.1...v2.2.0) (2021-09-20)


### Features

* **classname:** className for Item, Separator and ScrollContainer ([0e925a2](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/0e925a234ed44532a4098e361679d969d72b464f))

### [2.1.1](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v2.1.0...v2.1.1) (2021-09-14)


### Bug Fixes

* fix if prev/next group of items in slidingWindow smaller than current one ([93c43c5](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/93c43c530ea3a448f391fc2b9a6a6135376a009e))

## [2.1.0](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v2.0.10...v2.1.0) (2021-09-13)


### Features

* slidingWindow and getItemsPos helpers ([eeae101](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/eeae101a27aa17d0abd476865c74a8bacc7cdd87))

### [2.0.10](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v2.0.9...v2.0.10) (2021-09-11)


### Bug Fixes

* **scrolltoitem:** scrollToItem accepts IOItem as an argument ([a5f5011](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/a5f5011b1db348722896346175fe691e6415fe3e)), closes [#157](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/157)

### [2.0.9](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v2.0.8...v2.0.9) (2021-09-02)

### [2.0.8](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v2.0.7...v2.0.8) (2021-09-02)


### Bug Fixes

* fixed onInit cb and example ([2955f42](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/2955f42a0862260271e3e7180e11bfd036d5c25d))

### [2.0.7](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v2.0.6...v2.0.7) (2021-08-26)


### Bug Fixes

* pass arrows as FC or Element ([53ab37e](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/53ab37e52f4454e74b58eb25f29298a6434ea808)), closes [#152](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/152)

### 2.0.6 (2021-08-13)

### 2.0.5 (2021-08-13)
