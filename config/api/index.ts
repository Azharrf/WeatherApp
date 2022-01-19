import axios from 'axios'

export default async function callAPI({ url, method }: any) {
  const response = await axios({
    method,
    url,
  }).catch((err) => err.statusText)

  return response
}
