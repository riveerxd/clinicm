<template>
  <section class="py-10">
    <div class="max-w-7xl mx-auto px-4">
      <div class="grid gap-8 lg:grid-cols-2">
        
        <!-- Contact Info Section -->
        <div class="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
          <div class="text-center mb-8">
            <h3 class="text-3xl font-bold text-gray-900 mb-4">Kontaktní informace</h3>
          </div>
          
          <div class="space-y-6">
            <!-- Phone Contact -->
            <a 
              href="tel:+420241740815" 
              class="flex items-center space-x-4 p-4 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-lg"
            >
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-gray-900">Telefon</h4>
                <span class="text-blue-600 font-medium">
                  +420 241 740 815
                </span>
              </div>
            </a>

            <!-- Email Contact -->
            <a 
              href="mailto:sestra@clinicm.cz" 
              class="flex items-center space-x-4 p-4 bg-emerald-50 rounded-2xl hover:bg-emerald-100 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-lg"
            >
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-gray-900">Email</h4>
                <span class="text-emerald-600 font-medium">
                  sestra@clinicm.cz
                </span>
              </div>
            </a>

            <!-- Address -->
            <a 
              href="https://www.google.com/maps/place/T%C3%A1borsk%C3%A1+325%2F57,+140+00+Praha+4-Nusle/@50.0630329,14.4363658,1192m/data=!3m2!1e3!4b1!4m10!1m2!2m1!1sT%C3%A1borsk%C3%A1+325%2F57,+Praha+4,+Czech+Republic!3m6!1s0x470b947eb666a62f:0xa204fea4517fec20!8m2!3d50.063033!4d14.4412421!15sCipUw6Fib3Jza8OhIDMyNS81NywgUHJhaGEgNCwgQ3plY2ggUmVwdWJsaWOSAQpzdWJwcmVtaXNl4AEA!16s%2Fg%2F11c23cbb5d?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              class="flex items-center space-x-4 p-4 bg-purple-50 rounded-2xl hover:bg-purple-100 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-lg"
            >
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-gray-900">Adresa</h4>
                <span class="text-purple-600 font-medium">
                  Táborská 325/57<br>
                  140 00 Praha 4
                </span>
              </div>
            </a>
          </div>
        </div>

        <!-- Aktuality Section -->
        <div class="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
          <div class="text-center mb-8">
            <h3 class="text-3xl font-bold text-gray-900 mb-4">Aktuality</h3>
          </div>
          
          <div class="space-y-4">
            <!-- News Item 1 -->
            <div class="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-4 border-l-4 border-emerald-500">
              <div class="flex items-start justify-between">
                <div class="flex-1">
                  <div class="flex items-center space-x-2 mb-2">
                    <span class="text-xs font-semibold text-emerald-600 bg-emerald-100 px-2 py-1 rounded-full">
                      NOVÉ
                    </span>
                    <span class="text-xs text-gray-500">15. 9. 2025</span>
                  </div>
                  <h4 class="text-lg font-semibold text-gray-900 mb-2">Příjímáme nové pacienty</h4>
                
                </div>
              </div>
            </div>

            <!-- News Item 2 
            <div class="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-4 border-l-4 border-emerald-500">
              <div class="flex items-start justify-between">
                <div class="flex-1">
                  <div class="flex items-center space-x-2 mb-2">
                    <span class="text-xs font-semibold text-emerald-600 bg-emerald-100 px-2 py-1 rounded-full">
                      OZNÁMENÍ
                    </span>
                    <span class="text-xs text-gray-500">10. 9. 2025</span>
                  </div>
                  <h4 class="text-lg font-semibold text-gray-900 mb-2">Změna ordinačních hodin</h4>
                  <p class="text-gray-600 text-sm">
                    Od 20. září budeme mít rozšířené ordinační hodiny - nově i ve čtvrtek odpoledne.
                  </p>
                </div>
              </div>
            </div>
            -->

            
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
.transition-colors {
  transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Enhanced shadow effects */
.shadow-xl {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style> 