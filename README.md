# fuse

Fuse objects into one and call methods on all of them simultaneously.

## Install

With [component(1)](https://github.com/component/component):

```bash
$ component install darsain/fuse
```

## Usage

```js
var a = new Foo('a');
var b = new Foo('b');
var c = new Foo('c');
var foos = new Fuse(a, b, b); // filters out 2nd `b`
foos.add(c);
foos.add(c); // doesn't do anything
foos.call('methodName', arg1, argN);
foos.apply('methodName', [arg1, argN]);
```

## API

### Fuse([obj1], ... [objN])

Creates a `Fuse` instance with passed objects inside. `new` keyword is optional.

Automatically filters out duplicates.

**objN** `Object` Pass similar objects to fuse.

### #add(obj)

Fuse one more object. Won't do anything if objects is already part of a fusion.

### #remove(obj)

Remove object from fusion.

### #has(obj)

Check whether `obj` is part of the fusion.

### #call(name, [arg1], ..., [argN])

Call method on all fused objects.

**name** `String` Method name.
**argN** `Mixed` Arguments to be passed to methods.

### #apply(name, [args])

Apply method on all fused objects.

**name** `String` Method name.
**args** `Array` Arguments of arguments to be passed to methods.

## License

MIT