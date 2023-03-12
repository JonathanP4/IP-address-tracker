import { API_URL } from "./config";

export const fetchIpData = async function (ip) {
   try {
      const res = await fetch(`${API_URL}${ip}`)
      const data = await res.json()

      if (!res.ok) throw new Error(`Something went wrong! Please try again (${res.status})`)

      return data
   } catch (err) {
      throw err
   }
}
