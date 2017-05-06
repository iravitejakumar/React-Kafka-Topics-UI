import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
class CustomTableRow extends Component {
  render() {
      console.log(this.props.rowData);
    let tabledata=this.props.rowData.map((value,key)=>(
    <TableRow key={key}><TableRowColumn>{value.name}</TableRowColumn><TableRowColumn>{value.age}</TableRowColumn></TableRow>
    ));
    return (
      {tabledata}
    );
  }
}
export default CustomTableRow;
