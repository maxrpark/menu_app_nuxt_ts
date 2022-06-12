import { useRestaurantStore } from '~~/store/restaurant';

export default defineNuxtPlugin(() => {
  addRouteMiddleware('auth', () => {
    const store = useRestaurantStore();
    let router = useRouter();
    console.log(store.user);
    if (store.user === null) {
      router.push('/login');
    }
  });
});
