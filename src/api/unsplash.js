import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID FoOvw4dTiQ4QyCQfWRtUJ3Rd4TeAmK2oTHaTTXhAZDo",
  },
});
