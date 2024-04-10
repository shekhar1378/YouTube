import React from 'react'
import Stack from "@mui/material/Stack"
import {Link} from "react-router-dom"
import SearchBar from "./SearchBar"

const Navbar = () =>  (
  <Stack direction="row" alignItems="center" p={2} sx={{position:"sticky", justifyContent:"space-between", top:"0", background:"#00" }}> 
    <Link style={ {display:"flex", alignItem: "center", textDecoration:"none" }}>YouTube
    </Link>
    <SearchBar/>
  </Stack>
  )


export default Navbar
