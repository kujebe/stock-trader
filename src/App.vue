<template>
  <div class="container">
    <app-header/>
    <div class="row">
      <div class="col-md-12">
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/Header.vue";

export default {
  components: {
    AppHeader
  },

  created() {
    this.$store.dispatch("iniStocks");
  }
};
</script>

<style>
body {
  padding: 30px;
}
.slide-enter-active {
  animation: slide-in 200ms ease-out forwards;
}
.slide-leave-active {
  animation: slide-out 200ms ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: tranlateY(-30px);
    opacity: 0;
  }
  to {
    transform: tranlateY(0);
    opacity: 1;
  }
}
@keyframes slide-out {
  from {
    transform: tranlateY(0);
    opacity: 1;
  }
  to {
    transform: tranlateY(-30px);
    opacity: 0;
  }
}
</style>
