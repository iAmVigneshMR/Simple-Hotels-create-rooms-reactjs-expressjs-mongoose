import React, { useState } from 'react'
import { withRouter } from 'react-router-dom';
import axios from "../../axios.js"

const CreateRooms = ({history}) => {
    let [ rooms, setrooms ] = useState({
        loading: false,
      });
    
      let handleChange = e => {
          let { name, value } = e.target;
          setrooms({ ...rooms, [name]: value });
        };
    
    let { hotelName, roomtype, price, from, to, loading } = rooms;
    
      let handleSubmit = async e => {
        e.preventDefault();
        try {
          if(from >= to){
            alert("From date cannot be greater than To")
          }
          else{
          let data = { hotelName, roomtype, price, from, to };
          setrooms({ loading: true });
          let postData = await axios.post('/hotelApi/savehotel',data)
          history.push("/");
          console.log(postData);
          alert('successfully Room created')
          }
        } catch (error) {
          console.log(error);
        //   alert(error.message);
        }
        setrooms({ loading: false });
      };
    return (
    <section id="PostBlock" className="card container mx-auto col-md-5 my-4">
      <div className="card-body">
        <h2>Create Rooms</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="hotelName">hotelName</label>
            <input
              type="text"
              name="hotelName"
              id="hotelName"
              placeholder="enter hotelName"
              value={hotelName}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="roomtype">roomtype</label>
            <select name="cars" id="cars" name="roomtype"
              id="roomtype"
              placeholder="enter hotelName"
              value={roomtype}
              onChange={handleChange}
              required
              className="form-control">
            <option value="Single">Single (sleeps 1 adult)</option>
            <option value="Double">Double (sleeps 2 adult)</option>
            <option value="Twin">Twin (sleeps 2 adult)</option>
            <option value="Triple">Triple (sleeps 3 adult)</option>
            <option value="Quad">Quad (sleeps 4 adult)</option>
          </select>
          </div>
          <div className="form-group">
            <label htmlFor="hotelName">Price</label>
            <input
              type="number"
              name="price"
              required
              id="price" 
              placeholder="enter price"
              value={price}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="hotelName">Availabilty <br /> from</label>
            <input
              type="date"
              name="from"
              id="from" 
              required
              value={from}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="hotelName">to</label>
            <input
              type="date"
              name="to"
              id="to" 
              required
              value={to}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <button className="btn btn-success btn-block">
              {loading === true ? "loading" : "create"}
            </button>
          </div>
        </form>
      </div>
</section>
    )
}

export default withRouter(CreateRooms);
