// Puerto
//process.env.PORT = process.env.PORT || 3000;

// Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// Vencimiento del Token
// 60 segundos
// 60 minutos 
// 24 horas
// 30 dias
process.env.TOKEN_EXPIRATION = '48h';

// SEED de autenticación
process.env.SEED = process.env.SEED || 'YOUR-SEED';

// Base de datos
let urlDB;
let dbName = '';

if(process.env.NODE_ENV === 'dev') {
    urlDB = `mongodb://localhost:27017/${dbName}`;
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

// Google Client ID
process.env.CLIENT_ID = process.env.CLIENT_ID || 'YOUR-CLIENT-ID';

// Facebook Client ID y secrey
process.env.FACEBOOK_APP_ID = process.env.FACEBOOK_APP_ID || 'YOUR-FACEBOOK-APP-ID';
process.env.FACEBOOK_APP_SECRET = process.env.FACEBOOK_APP_SECRET || 'YOUR-APP-SECRET';