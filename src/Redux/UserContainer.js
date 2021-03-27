import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from './actions'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Card } from 'react-bootstrap'
import AddToCart from '../AddToCart'
import { useDispatch } from 'react-redux'
import { addToCartAction } from './actions/addToCartAction'
import Navb from '../Navb';

function UsersContainer({ userData, fetchUsers }) {
  const [serach, setSearch] = useState('')
  const [filtername, setfiltername] = useState([])
  const [plag, setplag] = useState(true)
  const dispatch = useDispatch()
  useEffect(() => {
    if (serach.length > 0) {
      setTimeout(() => {
        setfiltername(
          userData.users.filter((item) => {
            setplag(true)

            return item.category.toLowerCase().includes(serach.toLowerCase())
          }),
        )
      }, 1000)
    } else if (userData.length == 0) {
      
      setplag(false)
      setfiltername([])
    }
  }, [serach, userData.users])

  
  useEffect(() => {
    fetchUsers()
  }, [])


  const AddToCart = (user) => {
    dispatch(addToCartAction(user))
  }

  return (
    <div>
      <Navb/>
      <div className="mt-5" id="i1">
        <label htmlFor="search" className="form-label mt-5">
          Search item
        </label>
        <div className="input-group mb-3">
          <input
            className="task-input form-control"
            id="search"
            type="text"
            placeholder="Search Name.."
            value={serach}
            onChange={(e) => {
              setSearch(e.target.value)
            }}
          />
        </div>

        <br></br>

        {filtername.map((user) => {
          return (
            <div id="card">
              <Card id="im2">
                <Card.Body>
                  <Card.Img id="im1" variant="top" src={user.image} />
                  <Card.Title>{user.category}</Card.Title>
                  <Card.Text>{user.description}</Card.Text>
                  <Card.Text id="price">
                    <a href="">{user.price}</a>
                  </Card.Text>
                  <button id="addtocart" onClick={()=>AddToCart(user)}>
                    Add To Cart
                  </button>
                </Card.Body>
              </Card>
            </div>
          )
        })}
      </div>
      <div>
        <br />
        <br />

        <div>
          <br></br>

          {userData.users.map((user) => (
            <div id="card">
              <Card id="im2">
                <Card>
                  <img src={user.image} id="im1" />
                </Card>
                <Card.Body>
                  <Card.Title>{user.category}</Card.Title>
                  <Card.Text>{user.description}</Card.Text>

                  <Card.Text id="price">
                    <a href="">{user.price}</a>
                  </Card.Text>
                  <button id="addtocart" onClick={()=>AddToCart(user)}>
                    Add To Cart
                  </button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    userData: state.apiFetch,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
