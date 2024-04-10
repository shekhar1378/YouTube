import  "./index.css"
import React from 'react'
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from './Components/Feed'
import ChannelDetail from './Components/ChannelDetail'
import Navbar from "./Components/Navbar"
import VideoDetail from "./Components/VideoDetail"
import SearchFeed from "./Components/SearchFeed"
import Box from '@mui/material/Box';

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;