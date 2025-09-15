<template>
  <div id="our-team" class="w-full max-w-6xl mx-auto p-6 mt-16">
    <!-- Section Header -->
    <div class="text-center mb-12">
      <div class="inline-flex items-center space-x-4 mb-4">
        <div class="w-16 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
        <div class="w-3 h-3 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full"></div>
        <div class="w-16 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
      </div>
      <h2 class="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
        Náš tým
      </h2>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
        Odborníci s dlouholetými zkušenostmi v oboru oftalmologie
      </p>
    </div>

    <!-- Team Members Grid -->
    <div class="grid md:grid-cols-2 gap-8 lg:gap-12">
      
      <!-- MUDr. Petr Markvart -->
      <div class="group">
        <div class="bg-white/60 backdrop-blur-md rounded-2xl border border-white/40 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          
          <!-- Profile Image -->
          <div class="relative h-80 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
              <!-- Placeholder for profile image - replace with actual image -->
              <div class="text-center p-8">
                <div class="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            <!-- Status Badge -->
            <div class="absolute top-4 right-4">
              <div class="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                Lékař
              </div>
            </div>
          </div>

          <!-- Member Info -->
          <div class="p-6">
            <div class="text-center space-y-3">
              <!-- Name and Title -->
              <div>
                <h3 class="text-2xl font-black text-gray-900 mb-1">
                  MUDr. Petr Markvart
                </h3>
                <p class="text-blue-600 font-semibold">Oftalmolog</p>
              </div>

              

              <!-- Experience -->
              <div class="flex items-center justify-center space-x-6 text-center">
                <div>
                  <div class="text-2xl font-black text-gray-900">15+</div>
                  <div class="text-xs text-gray-500 font-semibold uppercase tracking-wide">Let praxe</div>
                </div>
                <div class="w-px h-8 bg-gray-300"></div>
                <div>
                  <div class="text-2xl font-black text-gray-900">5000+</div>
                  <div class="text-xs text-gray-500 font-semibold uppercase tracking-wide">Operací</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Hana Šorfová -->
      <div class="group">
        <div class="bg-white/60 backdrop-blur-md rounded-2xl border border-white/40 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          
          <!-- Profile Image -->
          <div class="relative h-80 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center">
              <!-- Placeholder for profile image - replace with actual image -->
              <div class="text-center p-8">
                <div class="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            <!-- Status Badge -->
            <div class="absolute top-4 right-4">
              <div class="bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                Sestra
              </div>
            </div>
          </div>

          <!-- Member Info -->
          <div class="p-6">
            <div class="text-center space-y-3">
              <!-- Name and Title -->
              <div>
                <h3 class="text-2xl font-black text-gray-900 mb-1">
                  Hana Šorfová
                </h3>
                <p class="text-indigo-600 font-semibold">Ošetřovatelská péče</p>
              </div>

              <!-- Experience -->
              <div class="flex items-center justify-center space-x-6 text-center">
                <div>
                  <div class="text-2xl font-black text-gray-900">12+</div>
                  <div class="text-xs text-gray-500 font-semibold uppercase tracking-wide">Let praxe</div>
                </div>
                <div class="w-px h-8 bg-gray-300"></div>
                <div>
                  <div class="text-2xl font-black text-gray-900">3000+</div>
                  <div class="text-xs text-gray-500 font-semibold uppercase tracking-wide">Pacientů</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Team Values Section -->
    <div class="mt-16 text-center">
      <div class="bg-white/60 backdrop-blur-md rounded-2xl border border-white/40 shadow-lg p-8">
        <h3 class="text-2xl font-bold text-gray-900 mb-6">Naše hodnoty</h3>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="space-y-3">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900">Odbornost</h4>
            <p class="text-sm text-gray-600">Nejmodernější technologie a postupy</p>
          </div>
          
          <div class="space-y-3">
            <div class="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900">Péče</h4>
            <p class="text-sm text-gray-600">Individuální přístup ke každému pacientovi</p>
          </div>
          
          <div class="space-y-3">
            <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900">Inovace</h4>
            <p class="text-sm text-gray-600">Průběžné vzdělávání a rozvoj</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// OurTeam component with team member profiles
</script>

<style scoped>
/* Smooth transitions */
* {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Backdrop blur support */
.backdrop-blur-md {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

/* Hover effects */
.group:hover .group-hover\:shadow-xl {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.group:hover .group-hover\:-translate-y-1 {
  transform: translateY(-4px);
}
</style> 