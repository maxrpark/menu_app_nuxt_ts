import { db } from '../firebase/config';
import { collection, onSnapshot, query, where } from 'firebase/firestore';

const getCollection = (c: string, q?: any) => {
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
    documents.value = results;
    isLoading.value = false;
  });

  watchEffect((onInvalidate) => {
    onInvalidate(() => unSub());
  });

  return { documents, isLoading };
};

export default getCollection;
