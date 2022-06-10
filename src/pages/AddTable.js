import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableList from '../components/TableList';
import { Button, Form,FormGroup, Label, Input } from 'reactstrap';
import * as actions from '../redux/actions';

class AddTable extends Component {
  constructor(props){
    super(props);
    this.state = {
        tableName: '',
        description: '',
    }
}


saveTable () {
    let table = {
        tableId: 0,
        roomId: this.props.selectedRoom.roomId,
        name: this.state.tableName,
        description: this.state.description,
        statu: 0,
        date: new Date(),
        userId: 0,
        firstName: '',
        lastName: ''
       
    }
    this.props.addTable(table);
    this.setState({tableName: '',
    description: '',})
    
}

handleChange =(event) => {
    this.setState({roomId: parseInt(event.target.value)}) 
}
  render() {
    return (
      <div className="ProductContainer">
        <Form>

                    <FormGroup>
                        <Label for="exampleMasa">
                        Masa Adı
                        </Label>
                        <Input
                            id="tableName"
                            name="tableName"
                            type="text"
                            onChange={(event) => this.setState({tableName: event.target.value})} 
                            value={this.state.tableName} 
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleDescription">
                        Açıklama
                        </Label>
                        <Input
                            id="description"
                            name="description"
                            type="textarea"
                            onChange={(event) => this.setState({description: event.target.value})} 
                            value={this.state.description} 
                        />
                    </FormGroup>
                    <Button onClick={()=> this.saveTable()} color="success">
                        Kaydet
                    </Button>
                </Form>
      </div>
    )
  }
}

const mapStateToProps = state => {
console.log(state.room.selectedRoom)
  return {
      tables: state.table,
      selectedRoom: state.room.selectedRoom,
  }
}

export default connect(mapStateToProps, actions)(AddTable);