import React, { Component } from 'react';
import { connect } from 'react-redux';
import {ListGroup, ListGroupItem} from 'reactstrap';
import * as actions from '../redux/actions';

class TableList extends Component {
  render() {
    return (
        
        <div style={{display:'flex', flexDirection:'row',flexWrap:'wrap',}} className="TableContainer">
                    {this.props.tables.table.map(table=> (
                        <div className="MasaButton" key={table.tableId}>
                            <h6>{table.name}</h6>
                        </div>
                    ))}
            </div>
      
  )
}
}

const mapStateToProps = state => {
return {
    tables: state.table
}
}

export default connect(mapStateToProps, actions)(TableList);