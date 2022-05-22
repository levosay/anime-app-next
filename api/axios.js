import axios from 'axios';

const getData = async (url) => {
  const {data} = await axios({
    method: 'GET',
    url: url
  })
  return data
}

export default getData
