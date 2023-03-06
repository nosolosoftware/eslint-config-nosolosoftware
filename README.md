# eslint-config-nosolosoftware

*ESLint* configuration file for our frontend stack used in all NoSoloSoftware developments. It uses
the [shareable configs](https://eslint.org/docs/developer-guide/shareable-configs) option provided
by *ESLint*.


## Installation

You can install this package using the following npm command:

```
$ npm install -g eslint-config-nosolosoftware
```


## Usage

In order to use this configuration in our project, we should puts the following code in our
`.eslintrc.yml`:

```yaml
---
extends:
  - nosolosoftware
```

A couple of options are provided depending on your stack:

* Use of Vue:
```yaml
extends:
  - nosolosoftware
  - nosolosoftware/vue2 // nosolosoftare/v3 if v3.X is being used
```
* Use of typescript
```yaml
extends:
  - nosolosoftware
  - nosolosoftware/typescript
```
* Use of typescript & Vue
```yaml
extends:
  - nosolosoftware
  - nosolosoftware/typescript
  - nosolosoftware/vue3
```

## Contributing

Contributions are welcome, please follow
[GitHub Flow](https://guides.github.com/introduction/flow/index.html)


## Versioning

**eslint-config-nosolosoftware** uses [Semantic Versioning 2.0.0](http://semver.org)


## License

Copyright © 2019 NoSoloSoftware Network S.L. Released under [MIT](LICENSE.md) license.
