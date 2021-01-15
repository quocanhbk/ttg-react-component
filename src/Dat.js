import React from 'react'
import TableComponent from './components/Table/Table'
import IcoBluetooth from './components/icons/IcoBluetooth'
import TablePagination from './components/Table/TablePagination'
import { TableFooter } from '@material-ui/core'
// const data = ['banana','mango','apple','fruits']
const title = {
  "id": "",
  "name": "",
  "author": "",
  "released": ""
}

const data= [
{"id": "1","name": "Apple","author": "Kevin Mitnick","released": "08/15/2011"},{"id": "2","name": "SamSung","author": "Blake J. Harris","released": "05/13/2014"},
{"id": "3","name": "Xiaomi","author": "Gene Kim","released": "12/01/2017"},{"id": "4","name": "Huawei","author": "Kevin Desar","released": "08/15/2011"},
{"id": "5","name": "Sony","author": "KAX","released": "08/15/2011"},{"id": "6","name": "Oppo","author": "DAT","released": "17/03/2020"},
{"id": "7","name": "Apple","author": "Kevin Mitnick","released": "08/15/2011"},{"id": "8","name": "SamSung","author": "Blake J. Harris","released": "05/13/2014"},
{"id": "9","name": "Xiaomi","author": "Gene Kim","released": "12/01/2017"},{"id": "10","name": "Huawei","author": "Kevin Desar","released": "08/15/2011"},
{"id": "11","name": "Sony","author": "KAX","released": "08/15/2011"},{"id": "12","name": "Oppo","author": "DAT","released": "17/03/2020"},
{"id": "13","name": "Sony","author": "KAX","released": "08/15/2011"},{"id": "14","name": "Oppo","author": "DAT","released": "17/03/2020"},
{"id": "15","name": "Sony","author": "KAX","released": "08/15/2011"},{"id": "16","name": "Oppo","author": "DAT","released": "17/03/2020"},
{"id": "17","name": "Sony","author": "KAX","released": "08/15/2011"},{"id": "18","name": "Oppo","author": "DAT","released": "17/03/2020"}]

const value = ["Banana", "Mango", "Orange", "Apple", "Fruits"]
// lay ra phan tu cua mang
var count = data.length
// so cot hien thi
var pageSize = 3;
// so table
var page = Math.ceil(count/pageSize)
// console.log(page)

export default function Dat() {
    return (
      <TableComponent>

        <TableComponent.Header>
          <TableComponent.Row>
            <TableComponent.HeaderCell>Name</TableComponent.HeaderCell>
            <TableComponent.HeaderCell>Age</TableComponent.HeaderCell>
            <TableComponent.HeaderCell>Status</TableComponent.HeaderCell>
            <TableComponent.HeaderCell>Button</TableComponent.HeaderCell>
          </TableComponent.Row>
        </TableComponent.Header>

        <TableComponent.Body>
          <TableComponent.Row>
            <TableComponent.Cell>Apple</TableComponent.Cell>
            <TableComponent.Cell>Banana</TableComponent.Cell>
            <TableComponent.Cell>Orange</TableComponent.Cell>
            <TableComponent.Cell><IcoBluetooth/></TableComponent.Cell>
          </TableComponent.Row>

          <TableComponent.Row>
            <TableComponent.Cell>Apple</TableComponent.Cell>
            <TableComponent.Cell>Banana</TableComponent.Cell>
            <TableComponent.Cell>Orange</TableComponent.Cell>
            <TableComponent.Cell><IcoBluetooth/></TableComponent.Cell>
          </TableComponent.Row>

          <TableComponent.Row>
            <TableComponent.Cell>Apple</TableComponent.Cell>
            <TableComponent.Cell>Banana</TableComponent.Cell>
            <TableComponent.Cell>Orange</TableComponent.Cell>
            <TableComponent.Cell><IcoBluetooth/></TableComponent.Cell>
          </TableComponent.Row>

          <TableComponent.Row>
            <TableComponent.Cell>Apple</TableComponent.Cell>
            <TableComponent.Cell>Banana</TableComponent.Cell>
            <TableComponent.Cell>Orange</TableComponent.Cell>
            <TableComponent.Cell><IcoBluetooth/></TableComponent.Cell>
          </TableComponent.Row>

          <TableComponent.Row>
            <TableComponent.Cell>Apple</TableComponent.Cell>
            <TableComponent.Cell>Banana</TableComponent.Cell>
            <TableComponent.Cell>Orange</TableComponent.Cell>
            <TableComponent.Cell><IcoBluetooth/></TableComponent.Cell>
          </TableComponent.Row>
        </TableComponent.Body>
        
        <TableFooter>
          <TablePagination totalPage="3"/>
        </TableFooter>
      </TableComponent>
    )
}

 

