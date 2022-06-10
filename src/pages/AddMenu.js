import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Col, Row, Button, InputGroup, Input} from 'reactstrap';
import MenuList from '../components/MenuList';
import * as actions from '../redux/actions';
import ProductList from '../components/ProductList';
import AddProduct from '../pages/AddProduct';

class AddMenu extends Component {
    constructor(props){
        super(props);
        this.state = {
            menuName: ''
        }
    }

    saveMenu () {
        let menu = {
            menuId: 0,
            parentId:0,
            name: this.state.menuName
        }
        this.props.addMenu(menu);
        this.setState({menuName: ''});
    }
    
    render() {
        return (
            <div>
                <Row>
                    <Col xs="3">
                        <div className="AddMenu">
                            <h2>Menü Ekle</h2>
                            <InputGroup className="AddMenuContainer">
                                <Input placeholder="Menu Ekle" onChange={(event) => this.setState({menuName: event.target.value})} value={this.state.menuName} />
                                <Button onClick={()=> this.saveMenu()} color="success">Kaydet</Button>
                            </InputGroup>
                            <MenuList/>
                        </div>
                    </Col>
                    <Col xs="5">
                        <ProductList/>
                    </Col>
                    <Col xs="4">
                        <div className="AddProduct">
                            <h2 style={{textAlign:'center'}}>Ürün Ekle</h2>
                            <AddProduct/> 
                        </div> 
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        menu: state.menu,
        product: state.product
    }
}

export default connect(mapStateToProps, actions)(AddMenu);