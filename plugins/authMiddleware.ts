import { useRestaurantStore } from '~~/store/restaurant';

export default defineNuxtPlugin(() => {
  addRouteMiddleware('auth', () => {
    const store = useRestaurantStore();
    let router = useRouter();
    if (store.user === null) {
      router.push('/login');
    }
  });
});
