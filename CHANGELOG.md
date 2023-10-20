# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [6.4.0] - 2023-10-20

### Added
* Added jest config

### Changed
* Updated dependencies
* Marks peerDependencies as optional

## [6.3.0] - 2023-08-30

### Changed
* vue/html-indent is marked as error instead of warning.

## [6.2.0] - 2023-08-04

### Changed
* Disabled no-return-await as it is marked as deprecated.

## [6.1.0] - 2023-08-02

### Changed
* Disabled no-spaced-func as it is marked as deprecated.
* Disabled func-call-spacing on typescript as it has its own typescript's version.

## [6.0.0] - 2023-07-20

### Added
* Added vue/component-name-in-template-casing to use PascalCase. Following recommendations on SFC: https://vuejs.org/guide/essentials/component-basics.html#using-a-component

### Changed
* Change vue/component-definition-name-casing to use PascalCase. Following recommendations on SFC: https://vuejs.org/guide/essentials/component-basics.html#using-a-component

## [5.1.0] - 2023-07-17

### Changed
* Added comma-spacing to prettier-conflict
* Added no-extra-semmi to prettier-conflict
* Make sure .vue files are sorted in the order we need.

## [5.0.0] - 2023-07-10

### Changed
* Improved vue3/prettier support
* Reenabled comma-dangle/trailingComma
* Updated dependencies

## [4.2.0] - 2023-03-16

### Added
* Added `nosolosoftware/prettier-conflict` to disable those rules which create conflict with our prettier configuration.

## [4.1.0] - 2023-03-07

### Modified
* Disable `import/no-duplicates` on typescript config, and enable `@typescript-eslint/no-duplicate-imports`

## [4.0.0] - 2023-03-06

### Added
* Support for vue v3
* Support for typescript

### Modified
* `curly` has been enabled
* `no-nested-ternary` has been enabled
* `camelcase` has been enabled
* `class-methods-use-this` has been disabled
* `import/prefer-default-export`/`import/no-default-export` has been updated to avoid `export default`

## [3.1.0] - 2021-12-02

### Modified
* Add padding-line-between-statements rule for returns

## [3.0.0] - 2020-09-21

### Added
* Added new vue rule: vue/component-definition-name-casing
* Configuration splitted in two parts: `nosolosoftware` and `nosolosoftware/vue`

### Modified
* Dependencies have been upgraded

## [2.3.0] - 2020-07-29

### Added
* semi

### Modified
* arrow-body-style
