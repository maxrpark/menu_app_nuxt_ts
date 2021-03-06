import { useRestaurantStore } from '../store/restaurant';
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from '@firebase/auth';

const error = ref(null);
const isPending = ref(false);
const user = ref();

const login = async (email: string, password: string) => {
  const auth = getAuth();
  error.value = null;
  user.value = {};
  isPending.value = true;
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    user.value = res;
    if (!res) {
      throw new Error('Could not login');
    }
  } catch (err: any) {
    //fix

    error.value = err.message;
  }
  isPending.value = false;
};

export const useLogin = () => {
  return {
    login,
    error,
    isPending,
    user,
  };
};

export const unitUser = async () => {
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    const store = useRestaurantStore();
    store.SET_USER(user);
    store.appLoading = true;

    // @ts-ignore: Unreachable code error
    if (user) {
      const uid = user.uid;
      let router = useRouter();
      let route = useRoute();
      if (route.path === '/Login') {
        router.push('/manager');
      }
    } else {
      console.log('no user');
    }
    store.appLoading = false;
  });
};

export const logOutUser = async () => {
  const store = useRestaurantStore();
  const auth = getAuth();
  await auth.signOut();
  store.USER_LOGOUT();
  let router = useRouter();
  router.push('/');
};
