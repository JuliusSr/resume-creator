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
```

## Run the example
To start a development server with the example run:
```sh
$ npm run example
```

## Hot reload
While developing you might want to preview the changes as you make them. To avoid manually re-transpiling the packages every time you make a change you can run:
```sh
$ npm run watch
```
While watch is running a transpile command will be executed automagically every time a change is detected in the sources (on save).
