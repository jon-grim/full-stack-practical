import axios from "axios";

export function loadGuests() {
  return axios.get("http://localhost:3000/guests");
}
