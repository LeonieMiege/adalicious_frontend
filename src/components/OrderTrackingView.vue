<template>
  <div class="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
    <div class="max-w-2xl mx-auto">
      <!-- Header -->
      <div class="bg-white rounded-3xl shadow-lg p-6 mb-6">
        <div class="flex justify-between items-center">
          <div class="flex items-center space-x-3">
            <div class="text-4xl">🥦</div>
            <div>
              <h1 class="text-2xl font-bold text-gray-800">Adalicious</h1>
              <p class="text-gray-600">Merci pour ta commande {{ customerName }}!</p>
            </div>
          </div>
          <button
            @click="$emit('back-to-menu')"
            class="bg-gray-500 text-white px-4 py-2 rounded-xl hover:bg-gray-600 transition-colors"
          >
            ← Retour
          </button>
        </div>
      </div>

      <!-- Order Status -->
      <div class="bg-white rounded-2xl shadow-lg p-8 text-center">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">Suivi :</h2>
        
        <div class="mb-8">
          <div :class="`inline-flex items-center space-x-3 px-6 py-4 rounded-2xl ${statusDisplay.color}`">
            <span class="text-3xl">{{ statusDisplay.icon }}</span>
            <span class="text-xl font-semibold">{{ statusDisplay.text }}</span>
          </div>
        </div>

        <!-- Order Details -->
        <div class="bg-gray-50 rounded-xl p-6 mb-6">
          <h3 class="text-lg font-semibold text-gray-800 mb-4">Commande #{{ orderStatus.id }}</h3>
          <div class="space-y-3">
            <div
              v-for="(item, index) in orderStatus.items"
              :key="index"
              class="flex items-center justify-between"
            >
              <div class="flex items-center space-x-3">
                <span class="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  🍽️
                </span>
                <div class="text-left">
                  <p class="font-semibold text-gray-800">{{ item.plate }}</p>
                  <p class="text-sm text-gray-600">x{{ item.quantity }}</p>
                </div>
              </div>
              <span class="font-semibold">{{ (item.price * item.quantity).toFixed(2) }}€</span>
            </div>
          </div>
          <div class="border-t mt-4 pt-4">
            <div class="flex justify-between items-center">
              <span class="text-lg font-bold">Total:</span>
              <span class="text-lg font-bold">{{ orderStatus.total_price }}€</span>
            </div>
          </div>
        </div>

        <div
          v-if="orderStatus.status === 'ready'"
          class="bg-green-50 border border-green-200 rounded-xl p-4"
        >
          <p class="text-green-800 font-semibold">🎉 Votre commande est prête à être récupérée !</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>