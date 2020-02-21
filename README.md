# valle-table

> Awesome valle-table - web component using Polymer 3

[![npm](https://img.shields.io/npm/v/@valle/valle-table.svg)](https://www.npmjs.com/package/@valle/valle-table)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/@valle/valle-table)

## How to install and use:

1 - Install the element using [Yarn](http://yarn.io/):

```sh
$ yarn add @valle/valle-table
```

2 -  Import the element:

```html
<script type="module" src="node_modules/@valle/valle-table/main.js"></script>
```

or in your javascript file

```js
import "@valle/valle-table/main.js";
```

3 - Start using it!

<!--
```
<custom-element-demo>
  <template>
    <script type="module" src="main.js"></script>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->

```html
<valle-table>

  <valle-thead>

    <valle-tr>
      <valle-th> Value </valle-th>
      <valle-th> Size </valle-th>
    </valle-tr>

  </valle-thead>

  <valle-tbody>

    <valle-tr>
      <valle-td> 12cm </valle-td>
      <valle-td> 15kg </valle-td>
    </valle-tr>

    <valle-tr>
      <valle-td> 13cm </valle-td>
      <valle-td> 10kg </valle-td>
    </valle-tr>

  </valle-tbody>

  <valle-tfooter>

    <valle-tr>
      <valle-th> Value </valle-th>
      <valle-th> Size </valle-th>
    </valle-tr>

  </valle-tfooter>

</valle-table>
```

## Components

- [valle-table](#valle-table)
- [valle-thead](#valle-thead)
- [valle-th](#valle-th)
- [valle-tbody](#valle-tbody)
- [valle-tr](#valle-tr)
- [valle-td](#valle-td)
- [valle-tfooter](#valle-tfooter)

<hr>

## valle-table

The custom `<valle-table>` element represents tabular data — that is, information expressed via a two-dimensional data table.

### Properties

Property  | Type        | Default | Description
:---      |:---         |:---     |:---
`label`   | *String*    | `""`    | table label (Other element ID)

See more about original `table` element [here.](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)

<hr>

## valle-thead

The custom `<valle-thead>` element defines a set of rows defining the head of the columns of the table.

### Properties

Property  | Type       | Default | Description
:---      |:---        |:---     |:---
`-----`   | *-----*    | `-----` | -----

See more about original `thead` element [here.](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead)

<hr>

## valle-th

The custom `<valle-th>` element defines a cell as header of a group of table cells. The exact nature of this group is defined by the scope and headers attributes.

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

See more about original `th` element [here.](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th)

<hr>

## valle-tbody

The custom `<valle-tbody>` element groups one or more `<valle-tr>` elements as the body of a `<valle-table>` element.

### Properties

Property  | Type       | Default | Description
:---      |:---        |:---     |:---
`-----`   | *-----*    | `-----` | -----

See more about original `tbody` element [here.](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody)

<hr>

## valle-tr

The custom `<valle-tr>` element defines a row of cells in a table. Those can be a mix of `<valle-td>` and `<valle-th>` elements.

### Properties

Property  | Type       | Default | Description
:---      |:---        |:---     |:---
`-----`   | *-----*    | `-----` | -----

See more about original `tr` element [here.](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr)

<hr>

## valle-td

The custom `<valle-td>` element defines a cell of a table that contains data. It participates in the table model.

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

See more about original `th` element [here.](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td)

<hr>

## valle-tfooter

The custom `<valle-tfooter>` element defines a set of rows summarizing the columns of the table.

### Properties

Property  | Type       | Default | Description
:---      |:---        |:---     |:---
`-----`   | *-----*    | `-----` | -----

See more about original `tfoot` element [here.](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot)

<hr>

## Browser Support

Using the [webcomponents.js](https://github.com/WebComponents/webcomponentsjs):

 ![Chrome](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/chrome/chrome_48x48.png) | ![Opera](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/opera/opera_48x48.png) | ![Firefox](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/firefox/firefox_48x48.png) | ![Safari](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/safari/safari_48x48.png) |![IE](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |  ![Edge](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/edge/edge_48x48.png) |
:---: | :---: | :---: | :---: | :---: | :---: |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 11+ | Latest ✔

## Development

1 - Verify if you have [node](http://nodejs.org/) and [yarn](http://yarn.io/) installed.

2 - Install [Polymer-CLI](https://www.polymer-project.org/3.0/docs/tools/polymer-cli):

```sh
$ [sudo] yarn global add polymer-cli
```

3 - Install local dependencies:

```sh
$ yarn
```

4 - Start the development server:

```sh
$ yarn start
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
