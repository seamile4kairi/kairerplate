Kairi Template
==============

The website builder for/by Kairi KAWASAKI.


Requirement
-----------

- Node.js (Latest)


Usage
-----

### On development

```shell
$ npm start
```

Then, the following tasks are executed:

1.	Install required modules
	(``npm i``)
2.	Build HTML, CSS, JS, images, and copy other specified files
	(``npm run build`` -> ``npm run build:(markup|style|script|image)`` -> ``npm run copy``)
3.	Display the built pages on your default browser
	(``npm run serve``)
4. Watch file changes, then rerun the building task

### On distribution

```shell
# Confirm again that the distribution files are displayed correctly
$ npm t

# Upon upgrading, all files will be committed again.
# cf.) https://docs.npmjs.com/cli/version
$ npm version [<newversion> | <level>] -m "<message>"
```


Commands & Configurations
-------------------------

### Global Configurations

The settings related to the whole tasks is defined in the following items of ``package.json``.

```json
{
  ...
  "config": {
    "src": "...",		// Name of the source directory
    "dest": "...",		// Name of the destination directory
    "ptrn": { ... }		// Entry points for each tasks
  },
  "scripts": { ... },	// List of commands & execution contents
  ...
}
```

See below to know how to define ``config.ptrn``:
cf.) https://github.com/motemen/minimatch-cheat-sheet#readme

### ``npm run build:markup``

=> Converts HTML files.

#### Configurations

- ``posthtml.config.js`` – Processing contents of HTML transform
- ``.htmldatarc.js`` – List of contents to be assigned to HTML
- ``.htmlhintrc.js`` – Definitions of HTML linter

The process of reading/writing files is defined in ``bin/posthtml.js``.

### ``npm run build:style``

=> Converts CSS files.

#### Configurations

- ``postcss.config.js`` – Processing contents of CSS transform
- ``.browserslitrc`` – Definitions of target browsers
- ``.stylelintrc.js`` – Definitions of CSS linter
- ``.svgorc`` – Definitions of SVG optimization

### ``npm run build:script``

=> Converts JavaScript files.

#### Configurations

- ``rollup.config.js`` – Processing contents of JS transform
- ``.eslintrc.js`` – Definitions of JS linter

### ``npm run build:image``

=> Compresses images.

#### Configurations

- ``imagemin.config.js`` – Processing contents of image compression
- ``.svgorc`` – Definitions of SVG optimization

The process of reading/writing files is defined in ``bin/imagemin.js``.

### ``npm run copy``

=> Just copies other specified files.

### ``npm run serve``

=> Launches the local server, and display it in the browser.

#### Configurations

- ``browsersync.config.js``


LICENSE
-------

MIT
