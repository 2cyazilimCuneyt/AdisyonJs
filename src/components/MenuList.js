import React, { Component } from 'react';
import { connect } from 'react-redux';
import {ListGroup, ListGroupItem} from 'reactstrap';
import * as actions from '../redux/actions';

class MenuList extends Component {
   componentDidMount(){
        this.props.getMenuList();
    }

    onClicked (menuId) {
        this.props.getProductList(menuId);
    }

    render() {
        return (
            <div>
               <ListGroup>
                    {this.props.menus.menu.map((menu)=> (
                        <ListGroupItem onClick={()=>this.onClicked(menu.menuId)} key={menu.menuId} className="RoomButton">
                            {menu.name}
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        menus: state.menu,
        product: state.product.products,
    }
}

export default connect(mapStateToProps, actions)(MenuList);