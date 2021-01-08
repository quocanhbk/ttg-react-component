Component Documentation
===========
### 1. `<Button/>`   *Styled button*
#### Props:
Name|Type|Default|Description
---|---|---|---
`type`|`"contained"/"outline"/"text"`|`"contained"`|The appearance of button
`demo`|`bool`|`false`|Only use for testing purpose, it will set the margin by 8px
`size`|`"small"/"medium"/"large"`|`medium` The size of button will change if set size="Type"
#### Examples:
`<Button type="outline">Outline Button</Button>`  
`<Button demo>Demo Button</Button>` 
`<Button size="small">Small Button </Button>` 
### 2. `<ButtonGroup/>` *Group of buttons*
#### Props:
Name|Type|Default|Description
---|---|---|---
`name`|`string`|`none`|Name of Group
`fullWidth`|`bool`|`false`|Button group will take the whole width if true, else it will be inline
`onSelect={x => setMode(x)}>`|`function`|`edit`|Function to handle set mode of ThemeProvider
`displayMode`|`mode`|` `| Apply mode to group
`onSelect={x => setTheme(x)}>`|`function`|`light`|Function to handle set color of ThemeProvider
#### Examples:
`<ButtonGroup fullWidth>`
`<ButtonGroup fullWidth onSelect={x => setMode(x)>`
`<ButtonGroup fullWidth onSelect={x => setTheme(x)>`
`<ButtonGroup displayMode={mode}>`
### 3. `<Radio/>` *Styled radio*
#### Props
Name|Type|Default|Description
---|---|---|---
`name`|`string`|`none`|Name of Child radio
`value`|`string`|`none`|Value of Child radio
`default`|`bool`|`false`| Auto checked
#### Example:
`<Radio value="1" name="example 1" default>Auto checked</Radio>`
### 4.`<RadioButtoGroup/>` *Group of Radio*
#### Props
Name|Type|Default|Description
---|---|---|---
`name`|`string`|`none`|Name of Group
`fullWidth`|`bool`|`false`|Radio will take the whole width if true, else it will be inline
`horizontal`|`bool`|`false`|Field that will display direction of radio (row or column)
#### Example:
`<RadioButtonGroup name="group 1" fullWidth ></RadioButtonGroup>`
`<RadioButtonGroup name="group 1" horizontal ></RadioButtonGroup>`
### 5. `<Checkbox/>` *Styled checkbox*
#### Props
Name|Type|Default|Description
---|---|---|---
`name`|`string`|`none`|Name of Child checkbox
`value`|`string`|`none`|Value of Child checkbox
`default`|`bool`|`false`| Auto checked
#### Example:
`<Checkbox value="1" name="example 1" default>Auto checked</Checkbox>`
### 6.`<CheckboxGroup/>` *Group of Checkbox*
#### Props
Name|Type|Default|Description
---|---|---|---
`name`|`string`|`none`|Name of Group
`fullWidth`|`bool`|`false`|Checkbox will take the whole width if true, else it will be inline
`horizontal`|`true/false`|`false`|Field that will display direction of checkbox (row or column)
#### Example:
`<CheckboxGroup name="group 1" horizontal ></CheckboxGroup>`
`<CheckboxGroup name="group 1" fullWidth ></CheckboxGroup>`
### 7. `<Toggle/>` *Styled Toggle*
#### Props
Name|Type|Default|Description
---|---|---|---
`name`|`string`|`none`|Name of Child Toggle
`value`|`string`|`none`|Value of Child Toggle
`default`|`bool`|`false`| Auto checked
#### Example:
`<Toggle value="1" name="example 1" default>Auto checked</Toggle>`
### 8.`<ToggleGroup/>` *Group of Toggle*
#### Props
Name|Type|Default|Description
---|---|---|---
`name`|`string`|`none`|Name of Group
`fullWidth`|`bool`|`false`|Toggle will take the whole width if true, else it will be inline
`horizontal`|`bool`|`false`|Field that will display direction of Toggle (row or column)
=#### Example:
`<ToggleGroup name="group 1" horizontal ></ToggleGroup>`
`<ToggleGroup name="group 1" fullWidth ></ToggleGroup>`
`<ToggleGroup name="group 1" position ></ToggleGroup>`
### 9.`<SimpleInput/>` *Styte Input*
#### Props
Name|Type|Default|Description
---|---|---|---
`name`|`string`|`none`|Name of Input
`fullWidth`|`bool`|`false`|Input will take the whole width if true, else it will be inline
#### Example:
`<ToggleGroup name="group 1" horizontal ></ToggleGroup>`
`<ToggleGroup name="group 1" fullWidth ></ToggleGroup>`
`<ToggleGroup name="group 1" position ></ToggleGroup>`
### 9. `<Select/>` *Select-Option*
#### Props
Name|Type|Default|Description
---|---|---|---
`data`|`json array or object`|`none`|Data of Option
`color`|`true/false`|`false`|Theme color of select
`background`|`true/false`|`none`|Theme Background-color of select
`id`|`string`|`none`|Field that will display id of select (Each select has a different id)
`handleSelectVale`|`function`|`()=>handleSelectVale(props.id)`|Function to handle get value Select
#### Example:
`<Select data={data} color="false" background="false" id="select1"></Select>`
`<Select data={data} color="true" background="true" id="select2"></Select>`

