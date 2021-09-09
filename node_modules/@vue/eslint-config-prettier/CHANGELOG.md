<a name="6.0.0"></a>
## [6.0.0](https://github.com/vuejs/eslint-config-prettier/compare/v5.1.0...v6.0.0) (2019-11-18)


### Breaking Changes

* feat!: move `eslint:recommended` to a separate `recommended` config, fixes #3. ([de7a518](https://github.com/vuejs/eslint-config-prettier/commit/de7a518))

`eslint:recommended` is no longer included in the default configuration.
Users of old versions need to update their `extends` to use `@vue/prettier/recommended`, or `['eslint:recommended', '@vue/prettier]`.


<a name="5.1.0"></a>
## [5.1.0](https://github.com/vuejs/eslint-config-prettier/compare/v5.0.0...v5.1.0) (2019-11-17)


### New Features

* Re-exports `@typescript-eslint` and `standard` configs, so that this config can be used in combination with `@vue/typescript/recommended` or `@vue/standard` ([939f722](https://github.com/vuejs/eslint-config-prettier/commit/939f722))



<a name="5.0.0"></a>
## [5.0.0](https://github.com/vuejs/eslint-config-prettier/compare/4578703...v5.0.0) (2019-07-22)


### Breaking Changes

* Update eslint-config-prettier to v6.0.0 ([0e0712f](https://github.com/vuejs/eslint-config-prettier/commit/0e0712f))
* `eslint`, `prettier` and `eslint-plugin-prettier` are now `peerDependencies`, to better conform to [the plugin loading mechanism of eslint](https://github.com/eslint/eslint/issues/3458) ([aec6c5c](https://github.com/vuejs/eslint-config-prettier/commit/aec6c5c))



<a name="4.0.1"></a>
## [4.0.1](https://github.com/vuejs/eslint-config-prettier/compare/3bc2a3d...4578703) (2018-11-12)

### Bug Fixes

* Also extend `eslint-config-prettier/vue`, disable `eslint-plugin-vue` rules that are not compatible with `prettier`


<a name="4.0.0"></a>
## [4.0.0](https://github.com/vuejs/eslint-config-prettier/compare/15cf6d7...3bc2a3d) (2018-10-31)


### Beaking Changes

* Update base configs and plugins, now requires ESLint v5 as a peer dependency
