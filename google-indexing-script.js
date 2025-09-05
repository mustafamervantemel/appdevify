// Google Indexing API Script
// Bu script ile sayfalarınızı programatik olarak Google'a bildirebilirsiniz

const { google } = require('googleapis');
const key = require('./service-account-key.json'); // Google Cloud'dan indirdiğiniz key

const jwtClient = new google.auth.JWT(
  key.client_email,
  null,
  key.private_key,
  ['https://www.googleapis.com/auth/indexing'],
  null
);

const pages = [
  'https://www.appdevify.com/',
  'https://www.appdevify.com/about',
  'https://www.appdevify.com/contact',
  'https://www.appdevify.com/portfolio',
  'https://www.appdevify.com/services/web-development',
  'https://www.appdevify.com/services/mobile-app-development',
  'https://www.appdevify.com/services/e-commerce',
  'https://www.appdevify.com/services/custom-software'
];

async function submitToIndex() {
  jwtClient.authorize((err, tokens) => {
    if (err) {
      console.error('Auth error:', err);
      return;
    }

    pages.forEach(async (url) => {
      try {
        const response = await google.indexing('v3').urlNotifications.publish({
          auth: jwtClient,
          requestBody: {
            url: url,
            type: 'URL_UPDATED'
          }
        });
        console.log(`✅ ${url} submitted successfully`);
      } catch (error) {
        console.error(`❌ Error submitting ${url}:`, error.message);
      }
    });
  });
}

// Kullanım: node google-indexing-script.js
submitToIndex();