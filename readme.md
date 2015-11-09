# grunt-strip-nglog

> Strip `$log` statements from JavaScript code with [strip-nglog](https://github.com/gazoakley/strip-nglog)


## Install

```sh
$ npm install --save-dev grunt-strip-nglog
```


## Usage

```js
require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
	stripNgLog: {
		dist: {
			files: {
				'dist/app.js': 'src/app.js'
			}
		}
	}
});

grunt.registerTask('default', ['stripNgLog']);
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
