import React from 'react'
import { connect } from 'react-redux'
import { Card } from 'react-bootstrap'
import './App.css';
import { useDispatch } from 'react-redux'
import { deleteFromCart  } from './Redux/actions/deleteFromCart';
import Navb from './Navb';

const Cart = ({cart,deleteFromCart}) => {

    console.log(cart);
    const DeleteFromCart = (user) => {
      deleteFromCart(user)

    }
    return (
        <div >
          <Navb/>
            {cart.map((user,i) => {
          return (
            <div id="card" id='i2'>
              <Card id="im2">
                <Card.Body>
                  <Card.Img id="im1" variant="top" src={user.image} />
                  <Card.Title>{user.category}</Card.Title>
                  <Card.Text>{user.description}</Card.Text>
                  <Card.Text id="price">
                    <a href="">{user.price}</a>
                  </Card.Text>
                  <button id="addtocart" onClick={()=>DeleteFromCart(i)}>
                    Delete
                  </button>
                </Card.Body>
              </Card>
            </div>
          )
        })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      cart: state.addToCart,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      deleteFromCart : (user) => dispatch(deleteFromCart (user)),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Cart)

