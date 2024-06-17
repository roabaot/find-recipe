import axios from "axios";

const baseURL = "https://api.edamam.com/api/recipes/v2";

const fetchData = (url: string) => {
  const instance = axios.create();
  // In the case of the url fetch link (E.g. next page data fetch link)

  if (url.startsWith("http://") || url.startsWith("https://")) {
    instance.get(url); // if theurl already contains https:// or http://
  } else {
    // In the case of normal fetch with base url
    instance.defaults.baseURL = baseURL;
    return instance.get(url);
  }
};

export default fetchData;
