<template>
  <section id="services" class="py-20 relative">
    <!-- Background decorative elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 relative z-10">
      <!-- Header Section -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center space-x-4 mb-6">
          <div class="w-16 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
          <div class="w-3 h-3 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full"></div>
          <div class="w-16 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
        </div>
        <h2 class="text-4xl md:text-5xl font-black text-gray-900 mb-6">
          Naše služby
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Komplexní péče o vaše zdraví s moderním vybavením a zkušenými odborníky
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid gap-8 lg:grid-cols-2 lg:gap-12">
        
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
              <p class="text-xs text-gray-600 italic mt-2">pojištěnci 111 a 213 zdarma (Zárubova)</p>
            </div>
            
            <div class="bg-blue-50 rounded-2xl p-4 text-center">
              <span class="text-gray-800 font-semibold text-sm block mb-2">Vyšetření samoplátců - nepojištěných klientů</span>
              <span class="text-xl font-bold text-blue-600">2000 Kč</span>
              <p class="text-xs text-gray-600 italic mt-2">preventivní</p>
            </div>
          </div>
        </div>

        <!-- Aesthetic Medicine -->
        <div class="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
          <div class="text-center mb-8">
            <h3 class="text-3xl font-bold text-gray-900 mb-4">Estetická medicína</h3>
            <p class="text-gray-600">Moderní estetické procedury pro krásu a mládí</p>
          </div>
          
          <div class="space-y-6">
            <!-- Hyaluronic Acid -->
            <div class="bg-purple-50 rounded-2xl p-6 text-center">
              <span class="text-gray-800 font-semibold text-lg block mb-3">Aplikace intradermálních výplní</span>
              <span class="text-2xl font-bold text-purple-600">4 999 Kč</span>
              <p class="text-sm text-gray-600 mt-2">kyselinou hyaluronovou, cena za 1 ml</p>
            </div>
            
            <!-- Botox Section -->
            <div class="bg-purple-50 rounded-2xl p-6">
              <h4 class="text-xl font-bold text-gray-800 mb-4 text-center">Botox</h4>
              <div class="grid gap-3 sm:grid-cols-2">
                <div class="bg-white rounded-xl p-3 text-center">
                  <span class="text-gray-700 text-sm block mb-1">Oblast čela</span>
                  <span class="text-lg font-bold text-purple-600">3000 Kč</span>
                  <p class="text-xs text-gray-500 mt-1">(25j)</p>
                </div>
                <div class="bg-white rounded-xl p-3 text-center">
                  <span class="text-gray-700 text-sm block mb-1">Svislé vrásky mezi obočím</span>
                  <span class="text-lg font-bold text-purple-600">3000 Kč</span>
                  <p class="text-xs text-gray-500 mt-1">(25j)</p>
                </div>
                <div class="bg-white rounded-xl p-3 text-center">
                  <span class="text-gray-700 text-sm block mb-1">Vrásky u vnějších koutků očí</span>
                  <span class="text-lg font-bold text-purple-600">3000 Kč</span>
                  <p class="text-xs text-gray-500 mt-1">(25j)</p>
                </div>
                <div class="bg-white rounded-xl p-3 text-center">
                  <span class="text-gray-700 text-sm block mb-1">Botox proti pocení do obou podpaží</span>
                  <span class="text-lg font-bold text-purple-600">7000 Kč</span>
                  <p class="text-xs text-gray-500 mt-1">(50j)</p>
                </div>
              </div>
              <p class="text-sm text-gray-600 italic bg-white rounded-lg p-3 mt-4 text-center">V případě, že si klient přeje méně jednotek, cena za 1 jednotku činí 130 Kč</p>
            </div>
            
            <!-- Other Aesthetic Services -->
            <div class="grid gap-4 sm:grid-cols-2">
              <div class="bg-purple-50 rounded-2xl p-4 text-center">
                <h4 class="text-lg font-bold text-gray-800 mb-3">Mezoterapie</h4>
                <span class="text-xl font-bold text-purple-600">od 2500 Kč</span>
                <p class="text-sm text-gray-600 mt-2">cena dle spotřebovaného materiálu</p>
              </div>
              
              <div class="bg-purple-50 rounded-2xl p-4 text-center">
                <h4 class="text-lg font-bold text-gray-800 mb-3">Odstranění patologických útvarů</h4>
                <span class="text-lg font-bold text-purple-600">od 1000 Kč</span>
                <p class="text-sm text-gray-600 mt-2">v oblasti očních víček</p>
              </div>
              
              <div class="bg-purple-50 rounded-2xl p-4 text-center sm:col-span-2">
                <span class="text-gray-700 font-semibold text-sm block mb-2">Kapky k prodlužování řas a vyšetření</span>
                <span class="text-lg font-bold text-purple-600">1500 Kč</span>
                <p class="text-sm text-gray-600 mt-2">1 lahvička</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Plastic Surgery - Centered on second row -->
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