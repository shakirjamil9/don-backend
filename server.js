const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app');

dotenv.config({ path: './config.env' });

const uri = process.env.DATABASE_URI.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(uri)
  .then(() => console.log('Database Connected'))
  .catch((err) => {
    console.log(err);
  });

const schema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  age: {
    type: Date,
  },
});

const User = mongoose.model('User', schema);

User.create({
  name: 'Rimsha Don',
  age: '2000-02-18',
})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is Running on ${PORT} PORT`));
