const fs = require('fs');
const path = require('path');

const dbFilePath = path.join(__dirname, 'db.json');

// Fungsi untuk membaca data dari file db.json
const readData = () => {
  try {
    const data = fs.readFileSync(dbFilePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

// Fungsi untuk menulis data ke file db.json
const writeData = (data) => {
  fs.writeFileSync(dbFilePath, JSON.stringify(data, null, 2));
};

module.exports = { readData, writeData };
