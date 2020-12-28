Component Documentation
===========
### 1. `<Button/>`   *Styled button*
#### Props:
Name|Type|Default|Description
---|---|---|---
`type`|`"contained"/"outline"/"text"`|`"contained"`|The appearance of button
`theme`|`"light"/"dark"`|`"light"`|Theme color of button, automatically added if inside ThemeProvider
`fullWidth`|`true/false`|`false`|Button will take the whole width if true, else it will be inline
`demo`|`true/false`|`false`|Only use for testing purpose, it will set the margin by 8px
#### Examples:
`<Button type="outline">Outline Button</Button>`  
`<Button type="text" theme="dark">Text Button</Button>`  
`<Button fullWidth>Full Width Button</Button>`  
### 2. `<ButtonGroup/>` *Group of buttons*
#### Props:
Name|Type|Default|Description
---|---|---|---
`theme`|`"light"/"dark"`|`"light"`|Theme color of button, automatically added if inside ThemeProvider
`fullWidth`|`true/false`|`false`|Button group will take the whole width if true, else it will be inline
`data`|`json array`|`none`|Data of button group
`displayField`|`string`|`none`|Field that will display on the button
`returnField`|`string`|`none`|Field that will be sent to onSelect
`onSelect`|`function`|`(x) => console.log(x)`|Function to handle returnField (take in 1 argument)
