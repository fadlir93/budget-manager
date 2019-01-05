//set mongoose promise library to promise, 
//otherwise you might get some warnings on your console
module.exports = (mongoose, config) => {
    const database = mongoose.connection;
    mongoose.Promise = Promise;

    mongoose.connect(config.database, {
        useMongoClient: true,
        promiseLibrary: global.Promise
    });

    database.on('error', error => console.log(`Connection to BudgetManager database failed: ${error}`));

    database.on('connected', () => console.log('Connected to BudgetManager database'));

    database.on('disconnected', () => console.log('Disconnected from BudgetManager Database'));

    process.on('SIGINT', () => {
        database.close(() => {
            console.log('budgetManager terminated, connection closed');
            process.exit(0);
        });
    });
};