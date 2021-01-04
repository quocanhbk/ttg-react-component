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
### 3. `<RadioButton/> *Styled radio*
#### Props
Name|Type|Default|Description
---|---|---|---
`theme`|`"light"/"dark"`|`"light"`|Theme color of button, automatically added if inside ThemeProvider
`name`|`string`|`none`|Name of Child radio
`value`|`string`|`none`|Value of Child radio
`displayDirection`|`true/false`|`false`|Field that will display direction of radio (row or column)
#### Example:
`<RadioButton value="example 1" name="example 1" displayDirection={true}/>`
`<RadioButton value="example 2" name="example 2" displayDirection={false}/>`
### 4.`<RadioButtoGroup/>` *Group of Radio*
#### Props
Name|Type|Default|Description
---|---|---|---
`value`|`json array or object`|`none`|Data of Radio Button
`name`|`string`|`none`|Name of Group Button Radio
`title`|`string`|`none`|Field that will display on the button
`displayDirection`|`true/false`|`false`|Field that will display direction of radio button group (row or column)
`handleChangeValue`|`function`|`$props=>name`|Function to handle returnField value of radio button
#### Example:
`<RadioButtonGroup value={id:1, name:"example 1"} name="group 1" displayDirection  title="Radio button"/> `
`<RadioButtonGroup value={id:2, name="example 2"} name="group 2" displayDirection={false} title="Radio button"/>`
### 5. `<Select/>` *Select-Option*
#### Props
Name|Type|Default|Description
---|---|---|---
`data`|`json array or object`|`none`|Data of Option
`color`|`true/false`|`false`|Theme color of select
`background`|`true/false`|Theme Background-color of select
`id`|`string`|`none`|Field that will display id of select (Each select has a different id)
`handleSelectVale`|`function`|`()=>handleSelectVale(props.id)`|Function to handle get value Select
#### Example:
`<Select data={data} color="false" background="false" id="select1"/>`
`<Select data={data} color="true" background="true" id="select2"/>`

