import React, { Component } from 'react';
import { connect } from 'react-redux';
import {ListGroup, ListGroupItem} from 'reactstrap';
import * as actions from '../redux/actions';

class RoomList extends Component {
  constructor(props){
    super(props);
    this.state = {
      roomName: '',
      description: '',
      modalRoom: false
    }
}
  componentDidMount(){
    this.props.getRoomList();
}

onClicked (room) {
  this.props.selectRoom(room);
    this.props.getTableList(room.roomId);
}

  render() {
    return (
      <div>
        <ListGroup>
          {this.props.rooms.room.map(room => (
            <ListGroupItem active={room.roomId === this.props.selectedRoom.roomId} onClick={()=>this.onClicked(room)} key={room.roomId} className="RoomButton">
              {room.name}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('room',state.room.selectedRoom);
  return {
      rooms: state.room,
      selectedRoom: state.room.selectedRoom,
  }
}

export default connect(mapStateToProps, actions)(RoomList);