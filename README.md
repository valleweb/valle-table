# valle-table

> Awesome valle table with material design

[![Travis CI Status](https://travis-ci.org/valleweb/valle-table.svg?branch=master)](https://travis-ci.org/valleweb/valle-table)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/valleweb/valle-table)

## How to install and use:

1 - Install the element using [Bower](http://bower.io/):

```sh
$ bower install valle-table --save
```

2 -  Import the element:

```html
<link rel="import" href="bower_components/valle-table/valle-table.html">
```

3 - Start using it!

<!--
```
<custom-element-demo>
  <template>
    <link rel="import" href="valle-table.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->

```html
<valle-table></valle-table>
```

## Properties

Property  | Type        | Default   | Description
:---      |:---         |:---       |:---
`prop1`   | *String*    | `World`   | Prop description

## Styling

The following custom properties and mixins are available for styling:

Custom property                | Default  | Description
:---                           |:---      |:---
--valle-element-text-color       | #f44277  | Text color
--valle-element-text             | {}       | Text styles


## Browser Support

Using the [webcomponents.js](https://github.com/WebComponents/webcomponentsjs):

 ![Chrome](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/chrome/chrome_48x48.png) | ![Opera](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/opera/opera_48x48.png) | ![Firefox](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/firefox/firefox_48x48.png) | ![Safari](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/safari/safari_48x48.png) |![IE](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |  ![Edge](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/edge/edge_48x48.png) |
:---: | :---: | :---: | :---: | :---: | :---: |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 11+ | Latest ✔

## Development

1 - Install [Bower](http://bower.io/) & [Polymer-CLI](https://www.polymer-project.org/1.0/docs/tools/polymer-cli):

```sh
$ [sudo] yarn global add bower polymer-cli
```

2 - Install local dependencies:

```sh
$ bower install
```

3 - Start the development server:

```sh
$ polymer serve
```

Go to [localhost:8080/components/valle-table/](http://localhost:8080/components/valle-table/)


## Tests

#### Linting

Linting with eslint:

```sh
$ [sudo] yarn global add eslint
$ [sudo] yarn global add eslint-plugin-html

$ eslint *.html
```

Linting with polylint:

```sh
$ polymer lint
```

#### Unit tests

Install the Web Component Tester (WCT) test runner:

```sh
$ [sudo] yarn global add web-component-tester
```

Run tests:

```sh
$ wct
```

## Versioning

To keep better organization of releases we follow the [Semantic Versioning 2.0.0](http://semver.org/) guidelines.

## Contributing

Find on our [issues](https://github.com/valleweb/valle-table/issues/) the next steps of the project ;)
<br>
Want to contribute? [Follow these recommendations](https://github.com/valleweb/valle-table/blob/master/CONTRIBUTING.md).

## History

See [Releases](https://github.com/valleweb/valle-table/releases) for detailed changelog.

## License

[MIT License](https://github.com/valleweb/valle-table/blob/master/LICENSE.md) © [valleweb](https://github.com/orgs/valleweb/people)
