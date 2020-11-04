'use strict'

require('dotenv').config();
const express       = require('express');
const cors          = require('cors');
const bodyParser    = require('body-parser');
const helmet        = require('helmet');
const passport      = require('passport');
const cookieSession = require('cookie-session')

const port = process.env.PORT || 3000;

class AppController {
  constructor() {
		this.express = express();
		this.middlewares();
		this.connection();
	}

	middlewares() {
		this.express.use(bodyParser.json());
		this.express.use(express.json());
		this.express.use(helmet());
		this.express.use(cors());
		this.express.use(passport.initialize());
		this.express.use(passport.session());
		this.express.use(cookieSession({
			name: 'test-session',
			keys: ['key1', 'key2']
		}));
	}

	connection() {
		this.express.listen(port, (error, sucess) => {
			if (error) console.log(error);

			console.log(`listening at the port ${port}`);
		})
	}
}

module.exports = new AppController().express;