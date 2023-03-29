const api = process.env.REACT_APP_API_URL;

export const getNewToken = async(login) => {
  try {
    const response = await fetch(`${api}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: login.email,
        password: login.password,
      }),
    });

    const data = await response.json();
    return { data, status: response.status } ;
  } catch (error) {
    return error.message;
  }
}

export const createNewUser = async (user) => {
  try {
    const response = await fetch(`${api}/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: user.username,
      }),
    });

    const data = await response.json()
    return data;
  } catch (error) {
    return error.message;
  }
};
