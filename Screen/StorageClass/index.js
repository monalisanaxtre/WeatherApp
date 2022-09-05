import {openDatabase} from 'react-native-sqlite-storage';
var db = openDatabase({name: 'UserDatabase.db'});

export const insertLoginData = (payload, callback) => {
    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT OR REPLACE INTO LoginDetails (EMAIL,PHONE_NUMBER,FIRST_NAME,LAST_NAME,PASSWORD) VALUES (?,?,?,?,?)',
        [
          payload.EMAIL,
          payload.PHONE_NUMBER,
          payload.FIRST_NAME,
          payload.LAST_NAME,
          payload.PASSWORD,
        ],
        (tx, results) => {
          return callback(true);
        },
        (error) => {
          console.log('Payload in LoginDetails: ', payload);
          console.log(
            'LOG-IN DETAILS SAVED ON DATABASE error',
            JSON.stringify(error),
          );
          return callback(false);
        },
      );
    });
  };