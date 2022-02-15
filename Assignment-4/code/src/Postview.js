import React, { useState } from 'react';
// import { Navbar, Container, Col, Row, Card, Nav } from 'react-bootstrap';
import './Postview.css';
import axios from 'axios';
import icon from './pictures/camera2.jpg';
import logo from './pictures/instalogo.png';
import dots from './pictures/dots.png';
import like from './pictures/like.png';
import comment from './pictures/comment.png';
import share from './pictures/share.png';
import save from './pictures/save.png';



const Postview = () => {
  const [posts, setPost] = useState([])

  React.useEffect(() => {
    axios.get('http://localhost:3004/user').then(res => {
      setPost(res.data)
    })
  }, []);

  return (
    <div className="site-container">
      
        <div className='head'>
          <div className='head-1'>
            <img src={logo} id='logo' alt='logo'></img>
            <a href='#'>Instaclone</a>
          </div>
          <input className='input-top' placeholder=' Search...'></input>
          <img id='insta-icon' src={icon}></img>
        </div>
        <div className='post-container'>

          {posts.map((post, idx) => {
            return (

              <div className='container'>
                <div className='text-right'>
                  <div className='right'>
                    <strong>{post.name}</strong>
                    <br />
                    <label>{post.location}</label>
                  </div>

                  <img className='iconss' alt='notification' src={dots}></img>
                </div>

                <img src={post.PostImage} />
                <div>
                <div className='btn'>
                  <div>
                    <img className='iconss' alt='like-button' src={like}></img>
                    <img className='iconss' alt='comment-button' src={comment}></img>
                    <img className='iconss' alt='share-button' src={share}></img>
                  </div>
                  <div>
                    <img className='iconss save' alt='save-button' src={save}></img>
                  </div>
                </div>
                <div className='text-bottom'>
                  <div className='likes-date'> {post.likes} likes <label>{post.date}</label></div>
                  <strong>{post.description} </strong>
                  <br />
                  <input placeholder='Drop a comment...'></input>
                </div>
                </div>
              </div>
            )
          })}


        </div>

      </div>

  );
}

export default Postview;
