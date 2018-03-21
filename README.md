# valle-table

> Awesome valle table with material design

[![Travis CI Status](https://travis-ci.org/valleweb/valle-table.svg?branch=master)](https://travis-ci.org/valleweb/valle-table)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/valleweb/valle-table)

## How to install and use:

1 - Install the element using [Bower](http://bower.io/):

```sh
$ bower install --save valle-table
```

2 -  Import the elements:

```html
<link rel="import" href="bower_components/valle-table/valle-table.html">
<link rel="import" href="bower_components/valle-table/valle-tbody.html">
<link rel="import" href="bower_components/valle-table/valle-td.html">
<link rel="import" href="bower_components/valle-table/valle-tfooter.html">
<link rel="import" href="bower_components/valle-table/valle-th.html">
<link rel="import" href="bower_components/valle-table/valle-thead.html">
```

3 - Start using it!

<!--
```
<custom-element-demo>
  <template>
    <link rel="import" href="valle-table.html">
    <link rel="import" href="valle-tbody.html">
    <link rel="import" href="valle-td.html">
    <link rel="import" href="valle-tfooter.html">
    <link rel="import" href="valle-th.html">
    <link rel="import" href="valle-thead.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->

```html
<valle-table>
  <valle-thead>
    <valle-th></valle-th>
    <valle-th></valle-th>
  </valle-thead>
  <valle-tbody>
    <valle-td></valle-td>
    <valle-td></valle-td>
  </valle-tbody>
  <valle-tfooter>
    <valle-th></valle-th>
    <valle-th></valle-th>
  </valle-tfooter>
</valle-table>
```

## valle-table

### Properties

Property  | Type        | Default | Description
:---      |:---         |:---     |:---
`label`   | *String*    | `""`    | table label (Other element ID)

## valle-tbody

### Properties

Property  | Type       | Default | Description
:---      |:---        |:---     |:---
`-----`   | *-----*    | `-----` | -----

## valle-td

### Properties

Property  | Type        | Default | Description
:---      |:---         |:---     |:---
`label`   | *String*    | `""`    | td label (Thead ID)

### Styling

The following custom properties and mixins are available for styling:

Custom property             | Default          | Description
:---                        |:---              |:---
--valle-td-text-size        | `13px`           | Font size
--valle-td-text-color       | `rgba(0,0,0,.54)`| Text color

## valle-tfooter

### Properties

Property  | Type       | Default | Description
:---      |:---        |:---     |:---
`-----`   | *-----*    | `-----` | -----

## valle-th

### Properties

Property  | Type       | Default | Description
:---      |:---        |:---     |:---
`-----`   | *-----*    | `-----` | -----

### Styling

The following custom properties and mixins are available for styling:

Custom property             | Default          | Description
:---                        |:---              |:---
--valle-th-text-size        | `13px`           | Font size
--valle-th-text-color       | `rgba(0,0,0,.54)`| Text color

## valle-thead

### Properties

Property  | Type       | Default | Description
:---      |:---        |:---     |:---
`-----`   | *-----*    | `-----` | -----

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
