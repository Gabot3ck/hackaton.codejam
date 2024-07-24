import { collection, onSnapshot, query } from "firebase/firestore"; 
import { getRecords, getAreas, recorded, savingNewRecord } from "./appSlice";
import { FirebaseDB } from "../../firebase/config";
import moment from "moment";


export const getAreasNames = () => {
  return async( dispatch ) => {

    const q = query(collection(FirebaseDB, 'areas_tipos'));
  
    onSnapshot(q, (querySnapshot) => {
      const records = [];
  
      querySnapshot.forEach((doc) => {
        records.push( {...doc.data(), id:doc.id} );
      });
      
      console.log(records)
      const areas = records.sort( (a,b) => a.tipo.localeCompare(b.tipo) ) 
  
      dispatch( getAreas( areas) );
    });
  }
}


export const getRecordsList = () => {
  return async( dispatch ) => {

    const q = query(collection(FirebaseDB, 'registros'));
  
    onSnapshot(q, (querySnapshot) => {
      const records = [];
  
      querySnapshot.forEach((doc) => {
        records.push({...doc.data(), id:doc.id});
      });

      const data = [...records].sort( (a,b) => {

        const dateA = moment(a.fecha, 'DD-MM-YYYY HH:mm:ss');
        const dateB = moment(b.fecha, 'DD-MM-YYYY HH:mm:ss');
      
        if (dateB.isBefore(dateA)) {
          return -1;
        } else if (dateB.isAfter(dateA)) {
          return 1;
        } else {
          return 0;
        }
      
      });
  
      dispatch( getRecords( data ) );
      dispatch( recorded() );
    });
  }
}

export const startNewRecord = () => {
  return async ( dispatch ) => {
    dispatch( savingNewRecord() );
  }
}



