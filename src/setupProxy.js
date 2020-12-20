/* eslint-disable */
const fs = require('fs');
const path = require('path');

// function to encode file data to base64 encoded string
function base64_encode(file) {
  // read binary data
  const bitmap = fs.readFileSync(path.join(__dirname, file));
  // convert binary data to base64 encoded string
  const buffer = new Buffer(bitmap).toString('base64');
  return `data:image/jpg;base64,${buffer}`;
}

const randEmotion = () => Math.random() * 100;
const image = base64_encode('../public/cat.jpg');

module.exports = function (app) {
  app.use('/data', (_, res) => {
    res.end(
      JSON.stringify({
        image,
        emotions_data: {
          emotion: {
            angry: randEmotion(),
            disgust: randEmotion(),
            fear: randEmotion(),
            happy: randEmotion(),
            sad: randEmotion(),
            surprise: randEmotion(),
            neutral: randEmotion(),
          },
          dominant_emotion: 'neutral',
        },
      }),
    );
  });
};
