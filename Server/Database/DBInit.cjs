require('dotenv').config();
var snowflake = require('snowflake-sdk');

var connection = snowflake.createConnection({
  account: process.env.DBACCOUNT,
  username: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  database: "TESTDB",
  schema: "PUBLIC",
  warehouse: "SNOWFLAKE_LEARNING_WH"
});

establishConnection();

async function establishConnection() {
    await connection.connectAsync( 
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

    const isConnectionValid = await connection.isValidAsync();

    var statement = connection.execute({
        sqlText: 'CREATE DATABASE testdb',
        complete: function(err, stmt, rows) {
            if (err) {
            console.error('Failed to execute statement due to the following error: ' + err.message);
            } else {
            console.log('Successfully executed statement: ' + stmt.getSqlText());
            }
        }
    });

    function testMulti() {
        console.log('execute multi-statement query');
        connection.execute({
            sqlText:  'create or replace table test(n int); insert into test values(1), (2); select * from test order by n',
            parameters: { MULTI_STATEMENT_COUNT: 3 },
            complete: function (err, stmt, rows) {
            if (err) {
                console.error('Failed to execute statement: ' + err.message);
            } else {
                console.log('==== complete');
                console.log('==== sqlText=' + stmt.getSqlText());
                if (rows) {
                let stream = stmt.streamRows();
                console.log('====QueryId=' + stmt.getQueryId());

                stream.on('data', function (row) {
                    console.log(row);
                });
                stream.on('end', function () {
                    console.log('done');
                });
                }

                if ('hasNext' in stmt && stmt.hasNext()) {
                stmt.NextResult();
                } else {
                connection.destroy(function (err1) {
                    if (err1) {
                    console.error('Unable to disconnect: ' + err1.message);
                    } else {
                    console.log('Disconnected connection with id: ' + connection.getId());
                    }
                });
                }
                }
            },
        });
    }
    testMulti();
}


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