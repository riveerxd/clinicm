<template>
  <section id="pricing" class="py-20 relative">

    <div class="max-w-7xl mx-auto px-4 relative z-10">
      <!-- Header Section -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center space-x-4 mb-6">
          <div class="w-16 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
          <div class="w-3 h-3 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full"></div>
          <div class="w-16 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
        </div>
        <h2 class="text-4xl md:text-5xl font-black text-gray-900 mb-6">
          Ceník
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Komplexní péče o vaše zdraví s moderním vybavením a zkušenými odborníky
        </p>
      </div>

      <!-- Pricing Grid -->
      <div class="grid gap-8 lg:grid-cols-1 md:grid-cols-2 lg:gap-12">
        
        <!-- Non-insured Procedures -->
        <div class="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
          <div class="text-center mb-8">
            <h3 class="text-3xl font-bold text-gray-900 mb-4">Zákroky nehrazené zdravotní pojišťovnou</h3>
            <p class="text-gray-600">Vyšetření a služby mimo standardní pojištění</p>
          </div>
          
          <div class="grid gap-4 sm:grid-cols-2">
            <div class="bg-blue-50 rounded-2xl p-4 text-center">
              <span class="text-gray-800 font-semibold text-sm block mb-2">Vyšetření na řidičský průkaz</span>
              <span class="text-xl font-bold text-blue-600">800 Kč</span>
            </div>
            
            <div class="bg-blue-50 rounded-2xl p-4 text-center">
              <span class="text-gray-800 font-semibold text-sm block mb-2">Vyšetření na řidičský průkaz - Senioři</span>
              <span class="text-xl font-bold text-blue-600">800 Kč</span>
            </div>
            
            <div class="bg-blue-50 rounded-2xl p-4 text-center">
              <span class="text-gray-800 font-semibold text-sm block mb-2">Vyšetření na zbrojní průkaz</span>
              <span class="text-xl font-bold text-blue-600">1500 Kč</span>
            </div>
            
            <div class="bg-blue-50 rounded-2xl p-4 text-center">
              <span class="text-gray-800 font-semibold text-sm block mb-2">Preventivní prohlídky pro zaměstnavatele</span>
              <span class="text-xl font-bold text-blue-600">1000 Kč</span>
              <p class="text-xs text-gray-600 italic mt-2">cílené vyšetření pro zaměstnavatele nebo jiné nezdravotnické instituce</p>
            </div>
            
            <div class="bg-blue-50 rounded-2xl p-4 text-center">
              <span class="text-gray-800 font-semibold text-sm block mb-2">Výpis karty</span>
              <span class="text-xl font-bold text-blue-600">300 Kč</span>
            </div>
            
            <div class="bg-blue-50 rounded-2xl p-4 text-center">
              <span class="text-gray-800 font-semibold text-sm block mb-2">Sepsání potvrzení</span>
              <span class="text-xl font-bold text-blue-600">800 Kč</span>
              <p class="text-xs text-gray-600 italic mt-2">které nesouvisí s léčebnou činností</p>
            </div>
            
            <div class="bg-blue-50 rounded-2xl p-4 text-center">
              <span class="text-gray-800 font-semibold text-sm block mb-2">Vyšetření OCT – sítnice, obě oči</span>
              <span class="text-xl font-bold text-blue-600">700 Kč</span>
              
            </div>
            
            <div class="bg-blue-50 rounded-2xl p-4 text-center">
              <span class="text-gray-800 font-semibold text-sm block mb-2">Vyšetření samoplátců - nepojištěných klientů</span>
              <span class="text-xl font-bold text-blue-600">2000 Kč</span>
              <p class="text-xs text-gray-600 italic mt-2">preventivní</p>
            </div>
          </div>

          
        </div>

        <!-- Plastic Surgery -->
        <div class="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 lg:col-span-2 lg:max-w-2xl lg:mx-auto">
          <div class="text-center mb-8">
            <h3 class="text-3xl font-bold text-gray-900 mb-4">Plastická operace očních víček</h3>
            <p class="text-gray-600">Profesionální chirurgické zákroky pro mladistvý vzhled</p>
          </div>
          
          <div class="grid gap-6 sm:grid-cols-2 max-w-lg mx-auto">
            <div class="bg-emerald-50 rounded-2xl p-6 text-center">
              <h4 class="text-xl font-bold text-gray-800 mb-4">Horních víček</h4>
              <span class="text-3xl font-bold text-emerald-600">15 000 Kč</span>
            </div>
            
            <div class="bg-emerald-50 rounded-2xl p-6 text-center">
              <h4 class="text-xl font-bold text-gray-800 mb-4">Dolních víček</h4>
              <span class="text-3xl font-bold text-emerald-600">15 000 Kč</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic can be added here if needed
</script>

<style scoped>
/* Custom styles for enhanced visual appeal */
.transition-all {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Enhanced shadow effects */
.shadow-xl {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>

