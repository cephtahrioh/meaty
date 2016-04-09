import pgp = require('pg-promise');
import Config from '../config';

const db = pgp()(Config.database);

export default db;
