import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from "../axios.js"
import "../components/Rooms/css/allrooms.css"

const AllRooms = () => {
    const [userData, setUserData] = useState([]);
    const [searchTerm, setSearchTerm ] = useState("");
    const [searchprice, setSearchprice ] = useState("");
    const [searchtype, setSearchtype ] = useState("");

    useEffect(() => {
        // users();
        axios.get("/hotelApi/getAllhotel")
        .then(res => setUserData(res.data))
        .catch(err => console.log('error', err))
    }, []);

    return (
        <Fragment>
 <div id="App">
      <header className="App-header">
        <h2 className="display-1">All Rooms</h2>
      </header>
      <hr className="hr" />
            <input
                type="search"
                className="form-control my-2 vw-55"
                style={{fontSize:"1.2rem"}}
                placeholder="Search by Hotel Name"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
            <input
                type="search"
                className="form-control my-2 vw-55"
                style={{width:"40%"}}
                placeholder="Search by price"
                value={searchprice}
                onChange={e => setSearchprice(e.target.value)}
            />
            <select name="roomtype"
              type="search"
              className="form-control my-2 vw-55"
              style={{width:"40%"}}
              value={searchtype}
              onChange={e => setSearchtype(e.target.value)}
              className="form-control">
            <option value="Single">Single (sleeps 1 adult)</option>
            <option value="Double">Double (sleeps 2 adult)</option>
            <option value="Twin">Twin (sleeps 2 adult)</option>
            <option value="Triple">Triple (sleeps 3 adult)</option>
            <option value="Quad">Quad (sleeps 4 adult)</option>
          </select>
            <hr className="hr" />
      <div className="user-container">
        {/* {console.log(userData)} */}
        {userData && userData.length > 0 ? userData.filter(
          search => {
            if (searchTerm === "" || searchprice === "" || searchtype === "") {
              return search;
            } 
            else if(search.hotelName.toLowerCase().includes(searchTerm.toLowerCase())){
              return search;
            }
            // else if (searchprice === "") {
            //   return search;
            // } 
            else if(search.price.includes(searchprice)){
              return search;
            }
            else if(search.roomtype.toLowerCase().includes(searchtype.toLowerCase())){
              return search;
            }
          }
        )
        .map((val, i) => 
        <div key = {val._id} className="info-item">
          <h5>Hotel Name : {val.hotelName}</h5>
          <h5>Roomtype : {val.roomtype}</h5> 
          <h5>Price : {val.price}</h5> 
          <h5>Availability : <br /> {val.from} -- {val.to} </h5>
          <hr className="hr" />
            <footer className="btn-group btn-block bg-secondary">
                <div title="edit" className="icons btn btn-secondary btn-sm">
                    <Link to={ `/editRooms/${val._id}` }>
                    <i className="fas fa-pen"></i>
                    </Link>
                </div>
                <div title="delete" className="icons btn btn-danger btn-sm">
                    <Link to={ `/deleteRooms/${val._id}` }>
                    <i className="fas fa-trash" aria-hidden="true"></i>
                    </Link>
                </div>
            </footer>
        </div>
        ) : null
      }
      </div>
    </div>
        </Fragment>
    )
}

export default AllRooms
