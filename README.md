Kairi Template
==============

The website builder for/by Kairi KAWASAKI.

Requirement
-----------

- Node.js (Latest)

Usage
-----

Simply, just run the command below:

```
npm start
```

Then, the following tasks are executed:

1.	Install required modules
	(``npm i``)
2.	Remove existing files in the destination directory
	(``npm run clean``)
3.	Build HTML, CSS, JS + copy other specified files
	(``npm run build`` -> ``npm run build:(markup|style|script|copy)``)
4.	Display the built page on your default browser
	(``npm run serve``)
5. Watch file changes, then rerun the building task

LICENSE
-------

MIT
