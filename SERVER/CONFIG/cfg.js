process.env.PORT = process.env.PORT || 3000;

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/MetallicACoffe';
} else {
    urlDB = 'mongodb+srv://hezbollah:eTjSK24ar5aigk5G@cluster0.1zx8u.mongodb.net/MetallicACoffe'
}

process.env.URL_DB = urlDB;