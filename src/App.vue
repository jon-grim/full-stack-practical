<template>
  <section class="p-4">
    <div>
      <div class="flex gap-2 mb-2 items-center">
        <p>Filter guests by</p>
        <select class="border rounded-lg border-slate-300 text-center">
          <option>visit count</option>
          <option>lifetime spend</option>
        </select>
        <select class="border rounded-lg border-slate-300 pl-1 ml-auto">
          <!-- TODO: use this value to specify number of guests to return -->
          <option :value="10">10</option>
          <option :value="25">25</option>
          <option :value="50">50</option>
        </select>
      </div>
      <input
        v-model="filterAmount"
        class="p-1 border border-solid border-slate-300 rounded-lg w-full"
        type="number"
        min="0"
        placeholder="filter amount"
      />
    </div>
    <p class="text-sm font-semibold mt-8 mb-1">
      <!-- TODO: show count of matching guests -->
    </p>
    <ul class="grid gap-2">
      <li v-for="guest in filteredGuests" :key="guest.id">
        <!-- TODO: display guests -->
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { Guest } from "./typings/Guest";
import { loadGuests } from "./api/loadGuests";
import GuestDetail from "./components/GuestDetail.vue";

export default {
  components: {
    GuestDetail,
  },
  data() {
    return {
      guests: [] as Guest[],
      filterAmount: "",
    };
  },
  computed: {
    currencyFormatter() {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      });
    },
    filteredGuests() {
      return this.guests;
    },
  },
  methods: {},
};
</script>
