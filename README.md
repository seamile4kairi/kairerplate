Kairerplate
===========

The website boilerplate for/by Kairi KAWASAKI.


Requirement
-----------

- Node.js 16+

And also, you should know about:

- [Parcel](https://parceljs.org/docs/) – The build tool used in this boilerplate
- [EJS](https://ejs.co/#docs) – Default template engine
    - [NOTE] You can use other template engines as long as you follow Parcel's specifications.
- [PostCSS](https://postcss.org/)
    - [NOTE] You can use other alt-languages as long as you follow Parcel's specifications.
- [Stimulus](https://stimulus.hotwired.dev/) – Default JavaScript framework
    - [NOTE] You have no needs to use it, but I'd recommend because it's modern in architecture and highly readable on development.
- Atomic Design – Use this as a component structure


Usage
-----

### Installation

```shell
$ npm ci
```

### On development

```shell
$ npm start
```

### On build

```shell
$ npm run build
```


File structure
--------------

```
project-root/
    |
    |- dist/                # (Ignored) destination directory w/ `npm (start|run build)`
    |
    |- assets/              # Directory for common files referenced by source codes
    |   |- scripts/         # Directory for JavaScript files
    |   |   |- modules/
    |   |   `- app.js       # Common JavaScript file
    |   |- static/          # Directory for images or other files
    |   `- styles/          # Directory for style files
    |       |- modules/
    |       `- app.pcss     # Common (Post)CSS file
    |
    |- components/          # Directory for components
    |   |- atoms/
    |   |- molecules/
    |   `- organisms/
    |       |- Hoge/        # [NOTE] Store all files used in the component into the same directory
    |       |   |- Hoge.ejs
    |       |   |- Hoge.js
    |       |   |- Hoge.pcss
    |       |   |- images/
    |       |   `- ...
    |       `- ...
    |
    |- layouts/             # Directory for layout templates
    |   |- modules/
    |   `- Default.ejs
    |
    |- pages/               # Directory for each pages
    |   `- index.ejs
    |
    |- static/              # Directory for static files not to be referenced from source codes
    |
    |- .config.js           # Configuration file for this whole project
    |- .ejsrc.js            # Configuration file for EJS
    |- .htmlnanorc          # Configuration file for minifiying HTML
    |- .parcelrc            # Configuration file for Parcel
    |- .postcssrc.js        # Configuration file for PostCSS
    |- package.json         # [NOTE] Some of configurations are also defined here
    `- ...
```


LICENSE
-------

MIT
