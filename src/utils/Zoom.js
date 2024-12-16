const axios = require("axios");

exports.createZoomMeeting = async (topic, start_time) => {
  const response = await axios.post("https://api.zoom.us/v2/users/me/meetings", {
    topic,
    start_time,
    type: 2,
  }, {
    headers: {
      Authorization: `Bearer <Your JWT Token>`
    }
  });
  return response.data;
};
