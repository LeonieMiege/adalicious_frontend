<template>
  <div class="min-h-screen">
    
    <WelcomeScreen
      v-if="currentView === 'welcome'"
      @name-submitted="handleNameSubmit"
    />
    <MenuView
      v-if="currentView === 'menu'"
      :customer-name="customerName"
      @order-submitted="handleOrderSubmit"
      @switch-to-kitchen="switchToKitchen"
    />
    <OrderTrackingView
      v-if="currentView === 'tracking'"
      :customer-name="customerName"
      :current-order="currentOrder"
      @back-to-menu="backToMenu"
    />
    <KitchenView
      v-if="currentView === 'kitchen'"
      @switch-to-menu="switchToMenu"
    />
  </div>
</template>

<script>
import WelcomeScreen from './components/WelcomeScreen.vue'
import MenuView from './components/MenuView.vue'
import OrderTrackingView from './components/OrderTrackingView.vue'
import KitchenView from './components/KitchenView.vue'

export default {
  name: 'App',
  components: {
    WelcomeScreen,
    MenuView,
    OrderTrackingView,
    KitchenView
  },
  data() {
    return {
      currentView: 'welcome', // Start with welcome
      customerName: '',
      currentOrder: null
    }
  },
  methods: {
    handleNameSubmit(name) {
      console.log('Name submitted:', name)
      this.customerName = name
      this.currentView = 'menu'
    },
    handleOrderSubmit(order) {
      console.log('Order submitted:', order)
      this.currentOrder = order
      this.currentView = 'tracking'
    },
    switchToKitchen() {
      console.log('Switching to kitchen view')
      this.currentView = 'kitchen'
    },
    switchToMenu() {
      console.log('Switching to menu view')
      this.currentView = 'menu'
    },
    backToMenu() {
      console.log('Going back to menu')
      this.currentOrder = null
      this.currentView = 'menu'
    }
  }
}
</script>