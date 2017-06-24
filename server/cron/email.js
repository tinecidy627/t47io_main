import colors from 'colors';
import path from 'path';

import {
  DEBUG,
  EMAIL_RECV,
  SMTP,
} from '../env.js';
import { FILE_NAMES } from '../config.js';

const cron = require('../../config/cron.json');


const formatPubs = () => {
  let sumCitation = 0;

  Object.keys(cron.citations).forEach((tag) => {
    sumCitation += parseInt(cron.citations[tag], 10) || 0;
  });
  return sumCitation;
};

const emailAdmin = (content) => {
  const dateString = new Date().toISOString().slice(0, 10).replace(/-/g, '');

  SMTP.sendMail({
    from: EMAIL_RECV,
    to: EMAIL_RECV,
    subject: '[t47io] Google Scholar Citation Update',
    text: content,
    attachments: [{
      filename: `t47io_backup_${dateString}.tgz`,
      path: path.join(__dirname, `../../${FILE_NAMES.BACKUP}`),
    }],
  }, (err) => {
    if (err) {
      console.error(err);
      throw new Error();
    }
  });
};


try {
  const content = `
${new Date().toISOString()}

Google Scholar Citations:
${JSON.stringify(cron.citations, null, 2)}
  ( total = ${formatPubs()} )

GitHub Contributions:
${JSON.stringify(cron.gitContrib, null, 2)}

SSL Certificates:
${JSON.stringify(cron.https, null, 2)}
  `;
  if (!DEBUG) {
    emailAdmin(content);
    console.log(`${colors.green('SUCCESS')}: Notified admin on cron data results.`);
  }
} catch (err) {
  console.error(err);
  console.log(`${colors.red('ERROR')}: Failed to notify admin on cron data results.`);
}
