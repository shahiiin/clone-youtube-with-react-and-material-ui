import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import Navbar from './components/Navbar'


function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000' }}>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id"  element={<VideoDetile />} />
          <Route path="/channel/:id"  element={<ChannelDetile />} />
          <Route path="/search/:searchTerm"  element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App
