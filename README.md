# ifn

> If and when these files change, do that.

"ifn" is a contraction of "iffen" which is a contraction of "if and when". The
module `ifn` is a CLI tool to help you execute scripts whenever certain files
change.

## Installation

```
npm install -g ifn
```


## Usage

```
ifn [options] <pattern1> <pattern2> ... pattern <executable>
```

Some examples:

```
# Run on-change.bat whenever a js file in scripts/ changes
ifn scripts/**/*.js on-change.bat

# Run "grunt build" whenever a src script or style changes
ifn src/**/*.js src/**/*.css "grunt build"

# Have lots of things changing rapidly? Debounce!
ifn --debounce 300 dir/** "node run-updates.js"
```


## License

MIT
