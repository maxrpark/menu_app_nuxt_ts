<template>
  <main>
    <SectionTitle :props="heroInfo" class="mt-5 container text-center" />
    <div
      class="container d-flex flex-column justify-content-center align-items-center"
    >
      <section>
        <h2 class="text-center">Menu App</h2>
        <p>
          Menu app is a Nuxt application built using typescript, Pinia, Netlify
          Serverless Functions, and Firebase.
        </p>
        <p>
          The idea of the app is to replace the traditional restaurant's printed
          menu with a digital one.
        </p>
        <p>The application is divided into two-part, customer, and manager.</p>
      </section>
      <secion>
        <h2 class="text-center">Custumer</h2>
        <p>
          The customer can choose from one of the available tables and after
          that has access to the table page.
        </p>
        <p>
          On this page, the customer can find all the available options on the
          menu and filter them into categories and subcategories.
        </p>
        <p>
          Each menu item has a small description and price, it also has the
          option to select the amount and add it to the table order.
        </p>
        <p>
          On the table page, the customer can also check the table order details
          and totals.
        </p>
        <p>
          Finally, there are two buttons on the top left, one to call a waiter
          and another one to ask for the bill.
        </p>
      </secion>
      <section>
        <h2 class="text-center">Manager</h2>
        <p>
          The manager page is only available after login. On this page, the
          manager can take an overview of the restaurant.
        </p>
        <p>There 5 sections on the manager page:</p>
        <h4>Total Section</h4>
        <p>Display sales of the day</p>
        <h4>Tables Section</h4>
        <p>
          Take a look at all the tables, select a specific table, and also can
          reserve or clear them.
        </p>
        <h4>Single Table Section</h4>
        <p>
          If the manager clicks on table details can get access to all the
          orders of the table. With a bottom to checkout
        </p>
        <h4>Checkout section</h4>
        <p>
          Get final details of the table and confirm checkout. After the
          checkout is confirmed the table is available again and the daily total
          amount is updated.
        </p>
        <h4>Order sections</h4>
        <p>
          Show every new order coming from the tables. Click on the x icon to
          mark the orders as completed. Completed orders are removed from the
          list.
        </p>
        <h2 class="text-center">Pinia</h2>
        <p>
          The main two reasons for this project were to build something with
          Nuxt and Pinia.
        </p>
        <p>
          That is why more a less entire states of the application are
          controlled using Pinia.
        </p>
      </section>
      <section>
        <h2 class="text-center">Firebase</h2>
        <p>
          I wanted to have some backend functionalities and I did not want to
          create a Django server for that, so I decide to learn firebase and
          create some documents for table control, orders, and checkout.
        </p>
        <p>
          I used firebase real-time update so the entire all is always updated
          even if it's used on different devices at the same time.
        </p>
        <p>
          I also used firebase auth to create a manager account, to have access
          to the manager page.
        </p>
      </section>
      <section>
        <h2 class="text-center">Netlify serverless functions</h2>
        <p>
          I also created an API for the menu items. I used netlify serverless
          functions and airtable, since it is easier and faster for these small
          tasks.
        </p>
        <h2 class="text-center">Deployment</h2>
        <p>The side is deployed in Netlify.</p>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
onMounted(() => {
  window.scrollTo(0, 0);
});
let heroInfo = reactive({
  title: 'About',
  text: 'Learn about Menu App',
});
</script>

<style scoped>
p {
  max-width: 660px;
}
h2 {
  margin: 1rem;
}
h3 {
  margin: 0.5rem;
}
</style>
