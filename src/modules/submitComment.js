import { involvmentApiComments } from './getApiData.js';

export const postComment = async (countryName, userName, userComment) => {
  const commentData = {
    item_id: countryName,
    username: userName,
    comment: userComment,
  };

  try {
    const response = await fetch(involvmentApiComments, {
      method: 'POST',
      body: JSON.stringify(commentData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      console.log('Comment posted successfully!');
    } else {
      console.log('Failed to post comment');
    }
  } catch (error) {
    console.log('Error:', error.message);
  }
};

export const fetchComments = async (countryName) => {
  try {
    const response = await fetch(`${involvmentApiComments}?item_id=${countryName}`);

    if (response.ok) {
      const comments = await response.json();
      return comments;
    }
    console.log('Failed to fetch comments');
    return [];
  } catch (error) {
    console.log('Error:', error.message);
    return [];
  }
};
