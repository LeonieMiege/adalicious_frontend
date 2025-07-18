<template>
  <div class="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
    <div class="bg-white rounded-3xl shadow-xl p-8 max-w-md w-full text-center">
      <div class="text-6xl mb-6">🥦</div>
      <h1 class="text-3xl font-bold text-gray-800 mb-2">Bienvenue sur Adalicious</h1>
      <p class="text-gray-600 mb-8">Pour commencer, peux-tu me donner ton prénom :</p>
      
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <input
          v-model="name"
          type="text"
          placeholder="Ton prénom"
          class="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 text-center text-lg"
          required
        />
        <button
          type="submit"
          class="w-full bg-blue-500 text-white py-4 rounded-xl font-semibold hover:bg-blue-600 transition-colors"
        >
          Valider
        </button>
      </form>
    </div>
  </div>
</template>

<script>

</script>