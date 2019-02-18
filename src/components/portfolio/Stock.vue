<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">
          <strong>NAME:</strong>
          <span class="stock-name">{{stock.name}}</span>
          <small>(price: {{stock.price}} | Quantity: {{stock.quantity}})</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model.number="quantity"
            :class="{danger: insufficientQty}"
          >
        </div>
        <div class="pull-right">
          <button
            class="btn btn-info"
            :class="{'btn-danger': insufficientQty}"
            @click="sellStock"
            :disabled="insufficientQty || quantity <= 0 || !Number.isInteger(quantity)"
          >{{insufficientQty ? 'Not Enough Stocks' : 'Sell'}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    insufficientQty() {
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    ...mapActions({ placeSellOrder: "sellStock" }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.placeSellOrder(order);
      this.quantity = 0;
    }
  }
};
</script>
<style scoped>
.panel-title span.stock-name {
  color: #2342f1;
}
.danger {
  border: 1px solid red;
}
</style>