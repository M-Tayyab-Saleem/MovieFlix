import { db } from "../config/firebase-config";
import { getDocs, collection } from "firebase/firestore";

const myCollection = collection(db, "movies");

let getMovies = async () => {
  try {
    const data = await getDocs(myCollection);
    const filterData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return filterData
  } catch (err) {
    console.log(err);
  }
};

export default getMovies;
