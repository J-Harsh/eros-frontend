import React ,{ useEffect, useState } from 'react'
import styled from "styled-components"
import Card from '../components/Card';
import axios from "axios"
import Categories from '../components/Categories';
import { useDispatch } from 'react-redux';
import {reset } from "../redux/videoSlice";

const Container=styled.div`
display: flex;
justify-content: space-between;
flex-wrap:wrap;
padding: 86px 60px 0px 60px;
`;

const Home = ({type}) => {

  const dispatch=useDispatch();


  const [video, setVideos] = useState([]);
  useEffect(() => {
    const fetchVideos=async()=>{
      const res=await axios.get(`/videos/${type}`)
      setVideos(res.data)
    }
    dispatch(reset())
    fetchVideos();
  }, [type])

  


  return (
    <>
    <Categories/>
    <Container>
      {
        video.map((item)=>{
          return <Card key={item._id} item={item} />
        })
      }
    </Container>
    </>
  )
}


export default Home