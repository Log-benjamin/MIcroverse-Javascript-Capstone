import { involvmentApiLikes } from './getApiData.js';

const addLike = async (countryName) => {
  try {
    await fetch(involvmentApiLikes, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        item_id: countryName,
      }),
    });
    return 'Recived all data';
  } catch (error) {
    return `Adding Likes error:${error}`;
  }
};

const getLikeData = async (countryName) => {
  try {
    const response = await fetch(involvmentApiLikes, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();
      return data;
  } catch (error) {
    return [];
  }
};

export  { addLike, getLikeData };