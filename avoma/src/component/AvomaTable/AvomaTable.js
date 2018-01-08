import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import {
  Link
} from 'react-router-dom';
import './AvomaTable.css';

class AvomaTable extends Component {
   state = {
     selectable: false,
     selected: []
   };

   isSelected = (index) => {
     return this.state.selected.indexOf(index) !== -1;
   };

   handleRowSelection = (selectedRows) => {
     this.setState({
       selected: selectedRows,
     });
   };

   render() {
      let that = this;
      return <MuiThemeProvider>
              <Table onRowSelection={this.handleRowSelection}>
                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                  <TableRow>
                    <TableHeaderColumn className="table-header">Article</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                  {
                    this.props.articles.map(function(obj, i){
                      let guid = obj.guid.split("/");
                      return <TableRow key={i} selected={that.isSelected(i)}>
                        <TableRowColumn ><Link to={"/backChannel/"+guid[guid.length-1]} >{obj.title['#cdata-section']}</Link></TableRowColumn>
                      </TableRow>
                    })
                  }
                </TableBody>
              </Table>
            </MuiThemeProvider>
    }
}

export default AvomaTable;
