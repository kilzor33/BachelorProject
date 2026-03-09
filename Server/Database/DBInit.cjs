var dotenv = require('dotenv');
var snowflake = require('snowflake-sdk');

dotenv.config();

//new snowflake-sdk;
//console.log(process.env);
console.log(process.env.DBUSER);
var connection = snowflake.createConnection({
  account: process.env.DBACCOUNT,
  username: process.env.DBUSER,
  password: process.env.DBPASSWORD
});


//const connection = await DuckDBConnection.create();
//const reader = await connection.run("create table if not exists EventLog (eventName varchar, location varchar, points bigint, logicalTimeStamp bigint, windowsize json)");

//const rows = reader.getRowObjectsJson();

/*console.log(rows);

setInterval(async() => {
    console.log("data fra DB " + JSON.stringify(receivedData));
    try { 
        connection.runAndReadAll("INSERT INTO EventLog SELECT * from read_json(receivedData)");
    } catch (e) {
        console.log(`Could not DB data with error ${e}`);
    }
}, 5000);
*/