const createComment = async (countryName) => {
  try {
    const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/kM38kn2JqCtpujHZtAbZ/comments/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        item_id: countryName,
        username: '',
        comment: '',
      }),
    });
    const data = await response.json();

    return data;
  } catch (error) {
    return `Error creating Cooment: ${error}`;
  }
};

const addComment = async (result) => {
  const countryName = result.id;
  const userName = result.parentElement.children[0].value;
  const usercomment = result.parentElement.children[1].value;
  try {
    const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/kM38kn2JqCtpujHZtAbZ/comments/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        item_id: countryName,
        username: userName,
        comment: usercomment,
      }),
    });
    const data = await response.json();

    return data;
  } catch (error) {
    return `Error creating Cooment: ${error}`;
  }
};

const getCommentData = async (country) => {
  try {
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/kM38kn2JqCtpujHZtAbZ/comments?item_id=${country}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    return `Error creating Cooment: ${error}`;
  }
};

// const getCommentData = async (country) => {
//   try {
//     const response = await fetch(`${involvmentApiComments}?item_id=${country}`, {
//       method: 'GET',
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     });
//     const data = await response.json();
//       return data;
//   } catch (error) {
//     return [];
//   }
// };

// const addComment  = async (result) => {
//   const countryName = result.id;
//   const userName = result.parentElement.children[0].value;
//   const usercomment = result.parentElement.children[1].value;
//   try {
//     await fetch(involvmentApiLikes, {
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//       body: JSON.stringify({
//         item_id: countryName,
//         username: userName,
//         comment: usercomment
//       }),
//     });
//     return 'Recived all data';
//   } catch (error) {
//     return `Adding Comments error:${error}`;
//   }
// };

export { addComment, getCommentData, createComment };