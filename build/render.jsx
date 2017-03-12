import fs from 'fs';
import sass from 'node-sass';
import path from 'path';

import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import HelixLoading from '../applications/loading/components/HelixLoading.jsx';

const env = require('../config/server.json');

const googleAnalytics = { trackingID: env.gaTracker };
const htmlMinify = {
  collapseWhitespace: true,
  minifyJS: true,
  removeComments: true,
  removeRedundantAttributes: true,
  useShortDoctype: true,
};

const helixLoading = {
  CSS: sass.renderSync({
    file: path.join(__dirname, '../applications/loading/stylesheets/index.scss'),
    outputStyle: 'compressed',
  }).css.toString(),
  HTML: renderToStaticMarkup(
    <HelixLoading
      logo={fs.readFileSync('./applications/common/images/t47_logo_alt.svg', 'utf8')}
    />
  ),
};


const commonMeta = [
  {
    name: 'author',
    content: 'Siqi Tian',
  },
  {
    name: 'viewport',
    content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
  },
  {
    name: 'robots',
    content: 'noodp, noydir',
  },
];
const indexPage = {
  title: 'SIQI TIAN - Full-Stack Web Developer & RNA Biochemistry Automator | T47.IO',
  meta: [
    {
      name: 'description',
      content: 'Personal portfolio of Siqi Tian, a full-stack web designer and developer, as well as an RNA biochemist (PhD) from Stanford University.',
    },
    {
      name: 'keywords',
      content: 'Siqi Tian, Portfolio, Personal Website, Design, RNA, Full-Stack Developer, t47io',
    },
    ...commonMeta,
  ],
};
const errorPage = {
  title: 'SIQI TIAN - Error Page | T47.IO',
  meta: [
    {
      name: 'description',
      content: 'Custom HTTP error page for http://t47.io/, the personal portfolio of Siqi Tian.',
    },
    {
      name: 'keywords',
      content: 'Siqi Tian, Portfolio, Personal Website, Error Page',
    },
    ...commonMeta,
  ],
};


export {
  indexPage,
  errorPage,
  helixLoading,
  googleAnalytics,
  htmlMinify,
};