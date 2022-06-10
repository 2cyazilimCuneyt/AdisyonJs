import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Button, Form,FormGroup, Label, Input } from 'reactstrap';
import * as actions from '../redux/actions';

class AddProduct extends Component {
    constructor(props){
        super(props);
        this.state = {
            productName: '',
            price:'',
            menuId:0,
            description: '',
        }
    }


    saveProduct () {
        let product = {
            productId: 0,
            menuId: this.props.selectedMenu.menuId,
            name: this.state.productName,
            price: this.state.price,
            photo:'',
            description: this.state.description,
        }
        this.props.addProduct(product);
        this.setState({
            productName: '',
            price:'',
            menuId:0,
            description: '',
        })
        
    }

    handleChange =(event) => {
        this.setState({menuId: parseInt(event.target.value)}) 
    }
    render() {
        return (
            <div className="ProductContainer">
                <Form>

                    <FormGroup>
                        <Label for="exampleEmail">
                        Ürün Adı
                        </Label>
                        <Input
                            id="productName"
                            name="productName"
                            type="text"
                            onChange={(event) => this.setState({productName: event.target.value})} 
                            value={this.state.productName} 
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">
                        Fiyat
                        </Label>
                        <Input
                            id="price"
                            name="price"
                            type="text"
                            onChange={(event) => this.setState({price: event.target.value})} 
                            value={this.state.price} 
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">
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
                    
                    {/* <FormGroup>
                        <Label for="exampleFile">
                        File
                        </Label>
                        <Input
                        id="exampleFile"
                        name="file"
                        type="file"
                        />
                        
                    </FormGroup> */}
                    <Button onClick={()=> this.saveProduct()} color="success">
                        Kaydet
                    </Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedMenu: state.menu.selectedMenu,
        products: state.product
    }
}

export default connect(mapStateToProps, actions)(AddProduct);