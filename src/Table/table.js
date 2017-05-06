import React, { Component } from 'react';
import CustomTableRow from '../Table/tablerow/tablerow.js';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class CustomTable extends Component {
    constructor(props){
super(props);
 this.state={"array":[{name:"ravi",age:25},{name:"hema",age:30},{name:"mounika",age:51},{name:"Vamsi",age:24}]};
    }
  render() {
     let tabledata=this.state.array.map((value,key)=>(
    <TableRow key={key}><TableRowColumn>{value.name}</TableRowColumn><TableRowColumn>{value.age}</TableRowColumn></TableRow>
    ));
    return (
      <Table>
         <TableHeader>
      <TableRow>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Age</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
    {tabledata}
        </TableBody>
      </Table>
    );
  }
}

export default CustomTable;
