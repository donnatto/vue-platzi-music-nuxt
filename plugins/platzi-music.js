import configService from '@/plugins/config'
import axios from 'axios'

const trackService = {}

trackService.search = async q => {
  const type = 'track'

  const res = await axios.get(`${configService.apiUrl}/search`, {
    params: { q, type }
  })
  return res.data
}

trackService.getById = function(id) {
  return axios
    .get(`${configService.apiUrl}/tracks/${id}`)
    .then(res => res.data)
}

export default trackService
