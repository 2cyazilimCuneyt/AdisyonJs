import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

class ProductList extends Component {
    render() {
        return (
            <div style={{display:'flex', flexDirection:'row',flexWrap:'wrap',}}>
                    {this.props.product.map(products=> (
                        <div className="ProductButton" key={products.productId}>
                            {/* <div className="EditRow">
                                <img className="EditIcon" src={require('../assets/images/edit.png')} />
                                <img className="TrashIcon" src={require('../assets/images/trash.png')} />
                            </div> */}
                            <h6>{products.name}</h6>
                            <p style={{fontSize:13}}>₺ {products.price}</p>
                        </div>
                    ))}
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state.product.products)
    return {
        product: state.product.products
    }
}

export default connect(mapStateToProps, actions)(ProductList);
