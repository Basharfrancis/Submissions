import axios from "axios";

const youtubeInstance = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: "AIzaSyBlAbaoE0q0YlydpfhYJgadaVElN19hJ6I",
    maxResults: 20
  }
});

export const default_config = {
  key: "AIzaSyBlAbaoE0q0YlydpfhYJgadaVElN19hJ6I",
  maxResults: 20
};

export default youtubeInstance;
