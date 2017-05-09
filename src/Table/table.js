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
  state = {

    showCheckboxes: true,
  };
  constructor(props) {
    console.log(props.ravi);
    super(props);
    this.state = {
      "array": [{ name: "ravi", age: 25 }, { name: "hema", age: 30 }, { name: "mounika", age: 51 }, { name: "Vamsi", age: 24 }],
      "tableOptions": {
        showCheckboxes: false
      }
    };

  }
  render() {
    let tabledata = this.state.array.map((value, key) => (
      <TableRow key={key}><TableRowColumn>{value.name}</TableRowColumn><TableRowColumn>{value.age}</TableRowColumn></TableRow>
    ));
    return (
      <Table>
        <TableHeader adjustForCheckbox={this.state.tableOptions.showCheckboxes} displaySelectAll={this.state.tableOptions.showCheckboxes}>
          <TableRow>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Age</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={this.state.tableOptions.showCheckboxes}>
          {tabledata}
        </TableBody>
      </Table>
    );
  }
}

export default CustomTable;
