'use strict';

module.exports = {
    port: 3000,
    ip: 'localhost',
    mongo: {
        uri: 'mongodb://localhost/moneys'
    },
    auth: {
        google: {
            secret: 'QZJwPMDL8stszFJitWzgNhV4',
            accessTokenUrl: 'https://accounts.google.com/o/oauth2/token',
            peopleApiUrl: 'https://www.googleapis.com/plus/v1/people/me/openIdConnect'
        },
        TOKEN_EXPIRED_DAYS: 7,
        TOKEN_SECRET: '123'
    }
};