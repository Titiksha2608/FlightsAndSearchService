const express = require("express");
const bodyParser = require("body-parser");
// const db = require(`./models/index`);
const { PORT } = require('./config/serverConfig');
const CityRepository = require('./repository/city-repository')
// const ApiRoutes = require('./routes/index');

// const db = require('./models/index');
// const {Airplane} = require('./models/index');

const setupAndStartServer = async () => {

    // create the express object
    const app = express();
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    // app.use('/api', ApiRoutes);

    app.listen(PORT, () => {
        console.log(`Server started at ${PORT}`);
        // console.log(db);
        const repo = new CityRepository();
        repo.createCity({name:"New Delhi"});
        // if(process.env.SYNC_DB) {
            // db.sequelize.sync({alter: true});
        // }
    });
}   

setupAndStartServer();