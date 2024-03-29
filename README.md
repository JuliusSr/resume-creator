# About
A simple tool to create a single paged resume in PDF format.

## Why?
I needed to update my resume.

# Development
## Dependencies
It just needs Node.js installed.

## Building the project
You can build the project with:
```sh
$ npm run build
```
or executing manually each step:
```sh
$ npm run bootstrap
$ npm run transpile
$ npm run copy-resources
```

If you run in some problems try removing the build artifacts and rebuilding with:
```sh
$ npm run clean-build
```
or executing manually each step:
```sh
$ npm run clean
$ npm run bootstrap
$ npm run transpile
$ npm run copy-resources
```

## [Examples](./examples)
Run the [viewer example](./examples/viewer) from the root with:
```sh
$ npm run viewer
```

Run the [server example](./examples/server) from the root with:
```sh
$ npm run server
```

Run the [cli example](./examples/cli) from the root with:
```sh
$ npm run create -- -d <path-to-data> [-o <output-dir>] [-n <filename>] [-l <language>]
```

Or if you're just curious to see the end result go to [examples/output](./examples/output)

## Hot reload
While developing you might want to preview the changes as you make them. To avoid manually re-transpiling the packages every time you make a change you can run:
```sh
$ npm run watch
```
While watch is running a transpile command will be executed automagically every time a change is detected in the sources (on save).  
A copy-resource will also be executed every time a change is detected in the resources.

## License

MIT © [Giulio Franco Sartor](http://github.com/JuliusSr)
