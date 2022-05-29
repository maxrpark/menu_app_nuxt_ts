import { db } from '../firebase/config';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { useRestaurantStore } from '../store/restaurant';

const getCollection = (c: string, q?: any) => {
  let store = useRestaurantStore();
  const documents = ref([] as any);
  // collection reference
  let colRef = collection(db, c);
  let isLoading = ref(true);
  if (q) {
    // @ts-ignore: Unreachable code error
    colRef = query(colRef, where(...q));
  }

  const unSub = onSnapshot(colRef, (snapshot) => {
    let results: any = [];
    snapshot.forEach((doc) => {
      results.push({ ...doc.data(), id: doc.id });
    });
    // update values
    if (q) {
      store.custumberTable(results[0]);
    } else {
      store.setTables(results);
    }
    documents.value = results;
    isLoading.value = false;
  });

  watchEffect((onInvalidate) => {
    onInvalidate(() => unSub());
  });
  console.log('hello');
  return { documents, isLoading };
};

export default getCollection;
