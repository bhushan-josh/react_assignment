import axios from 'axios'

const URL = "https://reqres.in/api/users";

const fetchUsers = async () => {
  const response = await axios.get(URL);
  return response?.data?.data;
};

export default fetchUsers;
