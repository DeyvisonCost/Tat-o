import axios from "axios";

export const getRepos = async (user: string) => {
    try {
      const { data } = await axios.get(`https://api.github.com/users/${user}/repos`);
  
      return data;
    } catch (e) {
      console.log(e);
    }
  };

