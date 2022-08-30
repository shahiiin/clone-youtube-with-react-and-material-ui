import axios from 'axios'

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  url: BASE_URL,
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': '079e150c67mshe04008bbadb9cb8p1429bajsnb83adbde9277',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
}
export const fetchFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options)

  return data
}
