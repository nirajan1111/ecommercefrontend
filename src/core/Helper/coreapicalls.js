import { API } from "../../backend";
export const GetProducts = async () => {
  return fetch(`${API}product`, { method: "GET" })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};
