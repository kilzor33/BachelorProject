var dotenv = require('dotenv').config();
var snowflake = require('snowflake-sdk');

var connection = snowflake.createConnection({
  account: process.env.DBACCOUNT,
  username: process.env.DBUSER,
  password: process.env.DBPASSWORD
});

connection.connectAsync( 
    function(err, conn) {
        if (err) {
            console.error('Unable to connect: ' + err.message);
        } 
        else {
            console.log('Successfully connected to Snowflake.');
            // Optional: store the connection ID.
            connection.connection_ID = conn.getId();
        }
    }
);

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