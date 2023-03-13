import { API_URL, API_KEY } from "./config";

export const fetchIpData = async function (ip) {
   try {
      const res = await fetch(`${API_URL}?api_key=${API_KEY}&ip_address=${ip}`)
      const data = await res.json()
      console.log(data);

      if (!res.ok) throw new Error(`Something went wrong! Please try again (${res.status})`)

      return data
   } catch (err) {
      throw err
   }
}
