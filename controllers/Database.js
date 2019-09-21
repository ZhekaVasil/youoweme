const mongoose = require('mongoose');

class Database {
  constructor(props) {
    this.isConnected = false;
  }

  async connectMiddleware(req, res, next) {
    try {
      await this.connect();
      next();
    } catch (error) {
      console.log(error);
      res.json({error: 'Could not connect to DB'})
    }
  }

  async request(request) {
    try {
      await this.connect();
      return request();
    } catch (error) {
      console.log(error);
    }
  }

  connectDb() {
    return mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  }

  async connect() {
    return new Promise(async (resolve, reject) => {
      if (this.isConnected) {
        resolve()
      } else {
        try {
          await this.connectDb();
          this.isConnected = true;
          resolve();
        } catch (error) {
          reject(error);
        }
      }
    })
  }
}

const database = new Database();

module.exports = database;
