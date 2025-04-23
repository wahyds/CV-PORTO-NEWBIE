const { readData, writeData } = require('./db');

// Fungsi untuk mendapatkan komentar
const getComments = (event, context, callback) => {
  const comments = readData();
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(comments),
  });
};

// Fungsi untuk menambahkan komentar
const addComment = (event, context, callback) => {
  const { name, message } = JSON.parse(event.body);
  const newComment = { name, message };

  const comments = readData();
  comments.push(newComment);
  writeData(comments);

  callback(null, {
    statusCode: 201,
    body: JSON.stringify(newComment),
  });
};

module.exports = { getComments, addComment };
