# varmaker

## Features

Defines a new Javascript const in the line before with the selected Text. Replaces the selection by the new variable.

Before:
``` ts
 console.log("some string");
```

Select `"some string"` and press `F3`

After:
``` ts
const newVar = "some string";
console.log(newVar);
```

## Extension Settings

Keybinding
``` json
{
  "command": "extension.makeVar",
  "key": "F3"
}
```


## Known Issues

* No auto-indent