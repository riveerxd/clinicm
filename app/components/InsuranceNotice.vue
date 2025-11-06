<template>
  <section class="py-12 relative">
    <div class="max-w-5xl mx-auto px-4">
      <div class="text-center">
        <!-- Icon -->
        <div class="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-6 animate-bounce">
          <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>

        <!-- Main Text -->
        <h3 class="text-3xl md:text-4xl font-black text-gray-900 mb-4">
          Spolupracujeme se všemi pojišťovnami
        </h3>
        
        <!-- Subtext -->
        <div class="inline-flex items-center space-x-3 bg-green-50 rounded-full px-8 py-4 border-2 border-green-200">
          <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
          </svg>
          <p class="text-2xl md:text-3xl font-bold text-green-600">
            Vše zdarma!
          </p>
        </div>

        <!-- Additional info -->
        <p class="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
          Standardní vyšetření a léčba jsou plně hrazeny zdravotní pojišťovnou
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic can be added here if needed
</script>

<style scoped>
@keyframes bounce {
  0%, 100% {
    transform: translateY(-5%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

.animate-bounce {
  animation: bounce 2s infinite;
}
</style>

