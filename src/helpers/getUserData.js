import { doc, getDoc } from "firebase/firestore";
import { FirebaseDB } from "../firebase/config";


export const getUserData = async( uid='', data ) => {
  if ( !uid ) throw new Error('El UID del usuario no existe');

  const docRef = doc(FirebaseDB, "usuarios", uid);

  const docUser = await getDoc(docRef);

  if (docUser.exists) {
    const dataUser = docUser.data();
    const nameUser = dataUser[data];

    return nameUser
  }

}
