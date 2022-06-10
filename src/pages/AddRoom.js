import React, { Component} from 'react';
import { Row, Col, InputGroup, Input, Button, Badge} from 'reactstrap';
import NavbarMenu from '../components/NavbarMenu';
import RoomList from '../components/RoomList';
import AddTable from './AddTable';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import TableList from '../components/TableList';

class AddRoom extends Component {
  constructor(props){
    super(props);
    this.state= {
      roomName: '',
    }
  }

  saveRoom() {
    let room = {
        roomId: 0,
        name: this.state.roomName,
    }
    this.props.addRoom(room);
    this.setState({roomName:''})
  } 
  render(){
    return (
      <div>
        <Row>
            <Col xs="3" className='RoomContainer'>
              <div className="AddMenu">
                <h2>Salon Ekle</h2>
                  <InputGroup className="AddMenuContainer">
                      <Input placeholder="Salon Ekle" onChange={(event) => this.setState({roomName: event.target.value})} value={this.state.roomName} />
                      <Button onClick={()=> this.saveRoom()} color="success">Kaydet</Button>
                  </InputGroup>
                <RoomList/>
              </div>
            </Col>
            <Col xs="6">
            <h2 style={{marginTop:20, marginLeft:15}}>Salon Adı : <Badge color="success">{this.props.selectedRoom.name}</Badge></h2>
              <TableList/>
            </Col>
            <Col xs="3">
              <div className="AddProduct">
                  <h2 style={{textAlign:'center'}}>Masa Ekle</h2>
                  <AddTable/> 
              </div> 
            </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state.room.selectedRoom)
  return {
      selectedRoom: state.room.selectedRoom,
  }
}
export default connect(mapStateToProps, actions)(AddRoom);