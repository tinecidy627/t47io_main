import emailer from 'nodemailer';
import path from 'path';

const { mode, port, email, chmod } = require('../config/server.json');


export const PUBLIC_PATH = path.join(__dirname, '../public');

export const DEBUG = mode.debug;
export const MAINTENANCE = mode.maintenance;
export const PORT = port;

export const EMAIL_CONTENT_LEN = 10;
export const EMAIL_RECV = email.login;
export const SMTP = emailer.createTransport(`${email.protocol}://${EMAIL_RECV.replace('@', '%40')}:${email.password}@${email.host}:${email.port}`);

export const CHMOD = {
  USER: chmod.user,
  GROUP: chmod.group,
  EXCLUDES: ['node_modules', '.git'],
};