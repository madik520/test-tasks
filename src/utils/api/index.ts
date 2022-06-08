const BASE_PATH = "https://api.github.com";
const USER = "/users/";

export const fetchApi = async (name: string) => {
  try{
    const resp = await fetch(`${BASE_PATH}${USER}${name}`);
    const data = await resp.json();

    return data
  }catch(err) {
    return console.log(err);
  }
};

export const fetchDataProperty = async (url: string) => {
  try{
    const resp = await fetch(`${url}`);
    const data = await resp.json();

    return data
  }catch(err) {
    return console.log(err);
  }
};