<template>
  <div class="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="bg-white rounded-3xl shadow-lg p-6 mb-6">
        <div class="flex justify-between items-center">
          <div class="flex items-center space-x-3">
            <div class="text-4xl">🥦</div>
            <div>
              <h1 class="text-2xl font-bold text-gray-800">Adalicious</h1>
              <p class="text-gray-600">Bonjour {{ customerName }}!</p>
            </div>
          </div>
          <button
            @click="$emit('switch-to-kitchen')"
            class="bg-gray-800 text-white px-4 py-2 rounded-xl text-sm hover:bg-gray-700 transition-colors"
          >
            Interface cuisine →
          </button>
        </div>
      </div>

      <!-- Menu Items -->
      <div class="space-y-4 mb-6">
        <div
          v-for="item in menu"
          :key="item.id"
          class="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow"
        >
          <div class="flex items-center space-x-4">
            <div class="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-2xl">
              {{ item.image }}
            </div>
            <div class="flex-1">
              <h3 class="text-xl font-semibold text-gray-800 mb-1">{{ item.plate }}</h3>
              <p class="text-gray-600 text-sm mb-2">{{ item.description }}</p>
              <div class="flex items-center justify-between">
                <span class="text-lg font-bold text-green-600">{{ item.price }}€</span>
                <button
                  @click="addToCart(item)"
                  class="bg-blue-500 text-white px-6 py-2 rounded-xl hover:bg-blue-600 transition-colors"
                >
                  Commander
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Cart Summary -->
      <div v-if="cart.length > 0" class="bg-white rounded-2xl shadow-lg p-6">
        <h2 class="text-xl font-bold text-gray-800 mb-4">Votre commande</h2>
        <div class="space-y-3 mb-4">
          <div
            v-for="item in cart"
            :key="item.id"
            class="flex justify-between items-center"
          >
            <div class="flex items-center space-x-3">
              <span class="text-xl">{{ item.image }}</span>
              <span class="text-gray-800">{{ item.plate }}</span>
              <span class="text-sm text-gray-500">x{{ item.quantity }}</span>
            </div>
            <span class="font-semibold">{{ (item.price * item.quantity).toFixed(2) }}€</span>
          </div>
        </div>
        <div class="border-t pt-4">
          <div class="flex justify-between items-center mb-4">
            <span class="text-xl font-bold">Total: {{ getTotalPrice().toFixed(2) }}€</span>
            <button
              @click="submitOrder"
              :disabled="loading"
              class="bg-green-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-600 disabled:opacity-50 transition-colors"
            >
              {{ loading ? 'Commande en cours...' : 'Valider la commande' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>