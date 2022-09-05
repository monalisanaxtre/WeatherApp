import {openDatabase} from 'react-native-sqlite-storage';
var db = openDatabase({name: 'UserDatabase.db'});

export function createTables(){
    db.transaction(function (txn) {
        txn.executeSql(
          'CREATE TABLE IF NOT EXISTS LoginDetails (EMAIL text NOT NULL,PHONE_NUMBER text NOT NULL,FIRST_NAME text NOT NULL,LAST_NAME text NOT NULL,PASSWORD text NOT NULL)',
          [],
          (error) => {
            if(error){
            console.log("Table not created..");
            console.log(JSON.stringify(error));
            }
            else{
                console.log("DB Created");
            }
          },
        );
})}