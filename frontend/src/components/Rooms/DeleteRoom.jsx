import React, { useEffect, useState } from 'react'
import { Link, useParams, withRouter } from 'react-router-dom';
import axios from "../../axios.js"

const DeleteRoom = ({history}) => {
    let [removePost, setRemovePost] = useState('');
    let { id } = useParams();
    
    useEffect(() => {
        let fetchData = async() => {
            let data = await axios.get(`/hotelApi/findhotel/${id}`);
            let deleteData = data.data;
            setRemovePost(deleteData);
        };
        fetchData();
    },[id]);
    
    //fot to delete individual post
    let deletPost = async e => {
        await axios.delete(`/hotelApi/deletehotel/${id}`);
        alert("Post Deleted...");
        history.push('/');
    }

    let { hotelName, roomtype, price, from, to} = removePost;
    return (
        <section className="container my-2">
        <article className="jumbotron align-items-center">
          <h2 className="text-success font-weight-bold text-uppercase text-center">
            HotelName : {hotelName}
          </h2>
          <p className="card-title my-4">RoomType : {roomtype}</p>
          <p className="card-title my-4">Price : {price}</p>
          <p className="card-title my-4">Availability <br /> from : {from}</p>
          <p className="card-title my-4">to : {to}</p>
          <hr className="hr my-2" />
          <Link to="/" className="btn btn-secondary">
            go back
          </Link>
          <button to="/" className="btn btn-danger float-right" onClick={ deletPost }>
            Delete
          </button>
        </article>
      </section>
    )
}

export default withRouter(DeleteRoom);
