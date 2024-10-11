# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## 8.1.0 (2024-10-11)


### ⚠ BREAKING CHANGES

* `noPolyfill` options is true by default now
* Removed getPrevItem and getNextItem and code related to separators

* chore: update eslint plugin

* refactor(imports): fix imports with eslint
* * Removed visibleElements, isFirstItemVisible and isLastItemVisible.
  Can use api.useIsVisible hook, api.isItemVisible,
  and api.items.getVisibleElements to get visible items.
* Removed initComplete

* ci(lint-staged): ignore stories folder in lint-staged

* docs(readme): update docs

* docs(storybook): performance example

* docs(storybook): save/restore position example

* refactor: remove stack and flush updates logic

* style(eslint): eslint/ts config for stories

* ci: add webkit for storybook tests
* Changed type of package to module, upgrade your NPM version

* fix(ts): fix publicApiType type export

* chore: cRA example

* chore(update): update smooth-scroll-into-view-if-needed to v2
* Possible new behavior, test after update

* ci(github actions): action to publish lib to npm

* ci(github action): refactore test/release action

* chore(release): 5.0.0
* **styles:** Need to import styles in your code - example "import
'react-horizontal-scrolling-menu/dist/styles.css'"
* Removed Arrows prop

* fix: removed globalThis

* test: test for Header and Footer

* chore: updated example and README

* chore(release): 3.0.0

### Features

* `useLeftArrowVisible` and `useRightArrowVisible` hooks ([#292](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/292)) ([5ae82a8](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/5ae82a807c9961ca6c5281da20d99a87adeb9d15))
* **apiref:** apiRef object for access VisibilityContext from outside of Menu component ([32012f6](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/32012f603dccc89f57a3e4a1b9d318c3e49f3c27))
* arrows prop for use arrows with additional content ([e222381](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/e222381734754560ae813da12292d1b340cf2c4f)), closes [#197](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/197)
* **classname:** className for Item, Separator and ScrollContainer ([4cb0a3f](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/4cb0a3f190dc70cc65242e26c846f63e5e4ff84e))
* containerRef prop to make it work with formkit/auto-animate ([#273](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/273)) ([44b13b4](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/44b13b43eb9ece69e0773990824f7891eefc59dc))
* getItemElementById and getItemElementByIndex helpers ([f0a0475](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/f0a047587cb99b92a0f45bfa8e0783f9959d9935)), closes [#167](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/167)
* header and footer initial implementation ([#200](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/200)) ([7aaac71](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/7aaac71ccd2729b5f7a542a8b786e63d0cdb66f2)), closes [#197](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/197)
* **onmouseleave:** onMouseLeave prop ([57ad4cb](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/57ad4cbd11e0b7c574b018cbf5cf126c2e2810c6))
* **onupdate:** onUpdate cb that called every time visibleItems changed ([010f5ff](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/010f5ffc38bdda401ea396bfadcfe066840e927d))
* **rtl:** rtl support ([7d7740b](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/7d7740b6de218117edf1ef019345e6de10d07baf))
* slidingWindow and getItemsPos helpers ([0bc0839](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/0bc0839ac2429f3b0cdb8e64d0a6c56054ce66fd))
* touch events ([b0baa6c](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/b0baa6ca45d538d46234b34179d993a48bb32caf))
* transition and animations ([40e9201](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/40e9201e9606c5b7755c375dc04442a3f8ef0035))
* use key prop if itemId not provided, getItemId helper ([5d700f2](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/5d700f237d1cf6c18238f27465ef25fbd03ce66e))
* use smooth-scroll-into-view-if-needed library as polyfill ([28b2a9c](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/28b2a9cbd54beb0e307e630ff961acf2bdf4e205)), closes [#174](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/174)


### Bug Fixes

* change mjs to be browser and main entries ([1dc5ebd](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/1dc5ebdebe6976f749c52c5f5ee394662b6ee016))
* changed target to es2015(es6) since some uglifiers don't support newer ([a557987](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/a5579878e06e97fbb8cb2105b6e9d4a82723f7eb))
* convert itemId to string ([ede8987](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/ede8987ba5c41f21709c538b20883b30b9fe4f80)), closes [#207](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/207)
* don't fire updates if Menu is hidden ([95aa22e](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/95aa22ee11f06302f811fafeaef9aef620204f90))
* don't use labeled tuple for support TS < 4 ([61fbe8a](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/61fbe8ab5ac226fe5ae73d5a822aa715320d7eb9))
* fix arrow status ([#291](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/291)) ([6ad8b64](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/6ad8b64d285c0863fe6aaa23c8bfc19bed5e5a57))
* fix dependencies array for transitions ([5b61bb6](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/5b61bb60b41e3252a4159a6ce926754196196aa5))
* fix if prev/next group of items in slidingWindow smaller than current one ([292d581](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/292d581745a9403a7e55092cd63a97e88265b13e))
* fix visibility issue ([7f71b1c](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/7f71b1c9eaf3be15f86a34cab153aa884d6ef50d))
* fixed Arrows props can't pass as component ([219b58b](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/219b58b3cb2ec46cfa59a4b553679466224e1086))
* fixed onInit cb and example ([d24278b](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/d24278bda1eaeda86dabb5fe53298a1d8d680567))
* fixed situation when items added at start, need to handle when items removed ([210f8d4](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/210f8d4714d972051e0bc491ea14083db1e7b258)), closes [#164](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/164)
* fixed styles for wrapper ([66006e3](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/66006e31c2cf154bebb3f18fa53bab58512df5a0))
* fixed useOnUpdate staled value ([8a7386f](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/8a7386f163f218733bd69365427da435d733a17d))
* **getelementorconstructor:** fix for React.memo elements as arrows/footer ([b398ad5](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/b398ad525730e00b1912ed8c6e5181c388d09d1a))
* nextjs complaining about useLayoutEffect ([#191](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/191)) ([bef5dca](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/bef5dca019ea44d5891c6353e8ad239487dc7ba1))
* noPolyfill=true by default ([dad3dab](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/dad3dab3e54e747156969ea6418c64d41ebcfa98))
* **package.json:** add exports.types field ([#247](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/247)) ([2c6ef40](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/2c6ef40212d2d28bfeed65dbaf7e90e62d85e81f))
* pass arrows as FC or Element ([b53a8dd](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/b53a8ddccf43f188bedadab5a65c02f68e5a73c6)), closes [#152](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/152)
* remove separators too when remove items ([fccd6a6](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/fccd6a6be3f4c1d20ca1b970f78903e3398646a8)), closes [#171](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/171)
* removed Separator elements ([#274](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/274)) ([c033bf9](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/c033bf99bf2b05277f9adcd94a7699244d770480))
* **scripts:** fix release script ([e763c9e](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/e763c9eb09f3a04a5541cba198626ce7ecd932f9))
* **scroll by 1 item:** fns for scroll by 1 item ([bdd4e68](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/bdd4e68e86a0824d2c05571902031d6877e43389))
* **scrolltoitem:** scrollToItem accepts IOItem as an argument ([f1732e2](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/f1732e2bc61f82fd1ace9a0bc008790b4981c82e)), closes [#157](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/157)
* **styles.css import:** fixed exports field for /dist/styles.css ([c7dc811](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/c7dc8115cbe6ab0e981f8e291df706af90cd47c0)), closes [#231](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/231)
* **styles:** bundle styles to styles.css file ([6b298f1](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/6b298f11d05ccae6106ae16c36b8221e5ba0a949)), closes [#227](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/227)
* ts types on same level as index, codesandbox doesn't see it otherwise ([d2a7249](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/d2a72491ff252e319feeea185600c2ebe425e9d0))
* **yarn/vite:** polyfill to dependencies, issues with yarn/vite ([e60faf4](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/e60faf4a65de0ca7106977810cab77a81ab40a09)), closes [#269](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/269)


* Observer pattern (#270) ([e5b998a](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/e5b998a2e10ca72c0f4364d273aff322bdd6d628)), closes [#270](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/270)
* Module (#266) ([47d387b](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/47d387b48e865d915be5fb6eca641cf2c3135dfe)), closes [#266](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/266)

### [8.0.2](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v8.0.0...v8.0.2) (2024-10-07)


### Bug Fixes

* fix arrow status ([#291](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/291)) ([6f9ce44](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/6f9ce44894cc0b2443235ad19e6e9bfccaef189d))

### [8.0.1](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v8.0.0...v8.0.1) (2024-10-07)

## [8.0.0](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v7.1.8...v8.0.0) (2024-10-04)


### ⚠ BREAKING CHANGES

* `noPolyfill` options is true by default now

### Bug Fixes

* noPolyfill=true by default ([ddbe715](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/ddbe71595b4365ba8ed7f5bd63ef980d09554967))

### [7.1.8](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v7.1.7...v7.1.8) (2024-09-19)

### [7.1.7](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v7.1.5...v7.1.7) (2024-08-28)

### [7.1.5](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v7.1.4...v7.1.5) (2024-08-28)

### [7.1.4](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v7.1.3...v7.1.4) (2024-08-27)


### Bug Fixes

* fix visibility issue ([dc86f16](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/dc86f16f58168da9ec68d53f923ecfd19987626b))

### [7.1.3](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v7.1.2...v7.1.3) (2024-08-21)

### [7.1.2](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v7.1.1...v7.1.2) (2024-08-19)


### Bug Fixes

* don't fire updates if Menu is hidden ([8aae6ef](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/8aae6ef5ce8e04cf90eb7b4478d6fd02d2f5613d))

### [7.1.1](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v7.1.0...v7.1.1) (2024-06-13)

## [7.1.0](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v7.0.0...v7.1.0) (2024-05-28)


### Features

* **onmouseleave:** onMouseLeave prop ([661ba27](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/661ba270a90e4a8ddb618bdbd001150635da0c28))

## [7.0.0](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v6.1.0...v7.0.0) (2024-03-26)


### ⚠ BREAKING CHANGES

* Removed getPrevItem and getNextItem and code related to separators

* chore: update eslint plugin

* refactor(imports): fix imports with eslint

### Bug Fixes

* removed Separator elements ([#274](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/274)) ([0a48245](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/0a4824538120c0ea107d6089871431765511c5f5))

## [6.1.0](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v6.0.2...v6.1.0) (2024-03-23)


### Features

* containerRef prop to make it work with formkit/auto-animate ([#273](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/273)) ([d7ac7c3](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/d7ac7c32f947638a8e6929f113d654caf1d4c0e6))

### [6.0.2](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v6.0.1...v6.0.2) (2024-02-21)

### [6.0.1](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v6.0.0...v6.0.1) (2024-02-20)


### Bug Fixes

* fix dependencies array for transitions ([d066024](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/d066024606800f37ce44ed55dd2b7a24e5ac5a23))

## [6.0.0](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v5.0.2...v6.0.0) (2024-02-20)


### ⚠ BREAKING CHANGES

* * Removed visibleElements, isFirstItemVisible and isLastItemVisible.
  Can use api.useIsVisible hook, api.isItemVisible,
  and api.items.getVisibleElements to get visible items.
* Removed initComplete

* ci(lint-staged): ignore stories folder in lint-staged

* docs(readme): update docs

* docs(storybook): performance example

* docs(storybook): save/restore position example

* refactor: remove stack and flush updates logic

* style(eslint): eslint/ts config for stories

* ci: add webkit for storybook tests

* Observer pattern (#270) ([d95befc](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/d95befcf12db081a2fcd14ad5ff67a410d795691)), closes [#270](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/270)

### [5.0.2](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v5.0.1...v5.0.2) (2024-02-13)

* **getelementorconstructor:** fix for React.memo elements as arrows/footer ([e5b3dc4](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/e5b3dc4923564bb5a8e4ef6f8a5d6441828c5cde))
* **scripts:** fix release script ([0e3a4bb](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/0e3a4bb3656aec185e9a588dbdbfa451ac7e552e))

## [5.0.1](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v5.0.0...v5.0.1) (2024-02-09)

### Bug Fixes

* **yarn/vite:** polyfill to dependencies, issues with yarn/vite ([8a746f0](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/8a746f084c80f4d864f8faa5fdc9b42d8d62a6f0)), closes [#269](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/269)

## [5.0.0](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v5.0.0-beta.3...v5.0.0) (2024-02-05)

### ⚠ BREAKING CHANGES

* Changed type of package to module, upgrade your NPM version

* fix(ts): fix publicApiType type export

* chore: cRA example

* chore(update): update smooth-scroll-into-view-if-needed to v2
* Possible new behavior, test after update

* ci(github actions): action to publish lib to npm

* ci(github action): refactore test/release action

* chore(release): 5.0.0

### Bug Fixes

* **yarn/vite:** polyfill to dependencies, issues with yarn/vite ([8a746f0](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/8a746f084c80f4d864f8faa5fdc9b42d8d62a6f0)), closes [#269](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/269)

* Module (#266) ([2498835](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/2498835bce2d8341cf7460bae79f8130ad9d1246)), closes [#266](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/266)

## [5.0.0-beta.3](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v5.0.0-beta.2...v5.0.0-beta.3) (2024-02-04)

## [5.0.0-beta.2](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v5.0.0-beta.1...v5.0.0-beta.2) (2024-02-04)

### ⚠ BREAKING CHANGES

* **update:** Possible new behavior, test after update

* **update:** update smooth-scroll-into-view-if-needed to v2 ([b30cf83](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/b30cf83575a55b86e4fc77bb5565572ad662ddf3))

## [5.0.0-beta.1](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v4.1.4...v5.0.0-beta.1) (2024-02-04)

### ⚠ BREAKING CHANGES

* **package.json:** Changed type of package to module, upgrade your NPM version

### Bug Fixes

* **package.json:** type module ([242eb69](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/242eb69217a0989cb042dd8a004da8608f108276))
* **ts:** fix publicApiType type export ([90f99e7](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/90f99e7282561e6533a3496c4c106f5a283001af))

### [4.1.4](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v4.1.3...v4.1.4) (2024-01-29)

### [4.1.3](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v4.1.2...v4.1.3) (2024-01-29)

### [4.1.2](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v4.1.1...v4.1.2) (2024-01-11)

### [4.1.1](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v4.1.0...v4.1.1) (2023-10-04)

### Bug Fixes

* **package.json:** add exports.types field ([#247](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/247)) ([980775a](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/980775af4948e955a139e6d82eb05b488dbd70de))

## [4.1.0](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v4.0.4...v4.1.0) (2023-06-11)

### Features

* touch events ([032d57d](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/032d57d6a43153c050e0dba026da8add02fab701))

### [4.0.4](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v4.0.4-beta.1...v4.0.4) (2023-04-14)

### [4.0.4-beta.1](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v4.0.4-beta.0...v4.0.4-beta.1) (2023-04-14)

### [4.0.3](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v4.0.2...v4.0.3) (2023-04-11)

### Bug Fixes

* removed copy package.json ([ce9699b](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/ce9699b8874d755489bc0717013e7d1232d9dff1))

### [4.0.2](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v4.0.2-beta.0...v4.0.2) (2023-04-11)

### [4.0.1](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v3.2.5...v4.0.1) (2023-03-21)

### ⚠ BREAKING CHANGES

* **styles:** Need to import styles in your code - example "import
'react-horizontal-scrolling-menu/dist/styles.css'"

### Bug Fixes

* **styles.css import:** fixed exports field for /dist/styles.css ([2c47f89](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/2c47f892568468095f71b9ad8876b4ae5e579119)), closes [#231](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/231)
* **styles:** bundle styles to styles.css file ([142dde6](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/142dde636878251fec20e07939e8e0532a22e304)), closes [#227](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/227)

## [4.0.0](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v3.2.5...v4.0.0) (2023-03-12)

### ⚠ BREAKING CHANGES

* **styles:** Need to import styles in your code - example "import
'react-horizontal-scrolling-menu/dist/styles.css'"

227

### Bug Fixes

* **styles:** bundle styles to styles.css file ([314b894](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/314b89451c9608dd791b58a2de6e9b978a9362db))

### [3.2.5](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v3.2.4...v3.2.5) (2023-02-19)

### [3.2.4](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v3.2.3...v3.2.4) (2023-02-19)

### [3.2.4-0](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v3.2.3...v3.2.4-0) (2023-02-19)

### [3.2.3](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v3.2.2...v3.2.3) (2022-10-30)

### Bug Fixes

* **scroll by 1 item:** fns for scroll by 1 item ([679914c](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/commit/679914c5e8bc5156eb0dbdf8abc729d0fc645829))

### [3.2.1](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/compare/v3.2.0...v3.2.1) (2022-10-23)

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
