<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="bg-white rounded-3xl shadow-lg p-6 mb-6">
        <div class="flex justify-between items-center">
          <div class="flex items-center space-x-3">
            <div class="text-4xl">🥦</div>
            <div>
              <h1 class="text-2xl font-bold text-gray-800">Adalicious</h1>
              <p class="text-green-600 font-semibold">Vue cuisine</p>
            </div>
          </div>
          <button
            @click="$emit('switch-to-menu')"
            class="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition-colors"
          >
            ← Vue client
          </button>
        </div>
      </div>

      <!-- Orders List -->
      <div class="space-y-4">
        <div
          v-for="order in orders"
          :key="order.id"
          class="bg-white rounded-2xl shadow-md p-6"
        >
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center space-x-3">
              <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                🥦
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-800">
                  Commande de {{ order.customer_name }}
                </h3>
                <p class="text-sm text-gray-600">
                  {{ order.items.map(item => item.plate).join(', ') }}
                </p>
              </div>
            </div>
            <span class="text-sm text-gray-500">
              {{ formatTime(order.created_at) }}
            </span>
          </div>

          <div class="flex space-x-3">
            <button
              v-if="order.status === 'pending'"
              @click="updateOrderStatus(order.id, 'preparing')"
              :disabled="loading"
              class="bg-orange-500 text-white px-6 py-2 rounded-xl hover:bg-orange-600 disabled:opacity-50 transition-colors"
            >
              En préparation
            </button>
            <button
              v-if="order.status === 'preparing'"
              @click="updateOrderStatus(order.id, 'ready')"
              :disabled="loading"
              class="bg-green-500 text-white px-6 py-2 rounded-xl hover:bg-green-600 disabled:opacity-50 transition-colors"
            >
              Prêt !
            </button>
            <button
              @click="deleteOrder(order.id)"
              class="bg-red-500 text-white px-6 py-2 rounded-xl hover:bg-red-600 transition-colors"
            >
              Annuler la commande
            </button>
          </div>
        </div>
      </div>

      <!-- No Orders Message -->
      <div
        v-if="orders.length === 0"
        class="bg-white rounded-2xl shadow-md p-8 text-center"
      >
        <div class="text-6xl mb-4">🍽️</div>
        <h3 class="text-xl font-semibold text-gray-800 mb-2">Aucune commande en cours</h3>
        <p class="text-gray-600">Les nouvelles commandes apparaîtront ici</p>
      </div>
    </div>
  </div>
</template>

<script>

</script>