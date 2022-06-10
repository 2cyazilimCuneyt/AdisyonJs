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

onClicked (roomId) {
    this.props.getTableList(roomId);
}

  render() {
    return (
      <div>
        <ListGroup>
          {this.props.rooms.room.map(room => (
            <ListGroupItem onClick={()=>this.onClicked(room.roomId)} key={room.roomId} className="RoomButton">
              {room.name}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('room',state.room);
  return {
      rooms: state.room
  }
}

export default connect(mapStateToProps, actions)(RoomList);