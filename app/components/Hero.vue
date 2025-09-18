<template>
  <section id="hero" class="relative h-min flex items-start justify-center overflow-hidden">
    <!-- Main content container -->
    <div class="w-full h-min max-w-7xl mx-auto p-4">
      <div class="grid lg:grid-cols-2 gap-16 items-center py-20">
        
        <!-- Left side - Text content -->
        <div class="space-y-8">
          <!-- Main heading -->
          <div class="space-y-6">
            <h1 class="text-6xl lg:text-8xl font-black leading-none tracking-tight">
              <span class="text-blue-600">M</span>
              <span class="text-gray-900">Clinic</span>
            </h1>
            
            <p class="text-xl lg:text-2xl font-bold text-gray-700 leading-relaxed max-w-lg">
              Precizní péče o zrak s lidským přístupem
            </p>
          </div>
          
          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 pt-6">
            <a href="tel:+420123456789" class="group px-8 py-4 bg-gray-900 text-white font-bold rounded-lg shadow-sm hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 ease-out">
              <span class="flex items-center space-x-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span class="w-full text-center sm:text-left block">Zavolat</span>
              </span>
            </a>
            <a href="mailto:info@mclinic.cz" class="px-8 py-4 border-2 border-gray-900 text-gray-900 font-bold rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300">
              <span class="flex items-center space-x-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span>Email</span>
              </span>
            </a>
          </div>
          
          <!-- Trust indicators -->
          <div class="flex items-center space-x-8 pt-8">
            <div class="flex items-center space-x-2">
              <div class="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span class="text-sm text-gray-600 font-semibold">Certifikovaní specialisté</span>
            </div>
            <div class="flex items-center space-x-2">
              <div class="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span class="text-sm text-gray-600 font-semibold">Nejmodernější technologie</span>
            </div>
          </div>
        </div>
        
        <!-- Right side - Image -->
        <div class="relative">
          <div class="relative">
            <!-- Main image with premium styling -->
            <div class="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/heroimageop.webp" 
                alt="Pokročilé vyšetření očí" 
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
              >
              <!-- Subtle overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
            </div>
          </div>
          
          <!-- Stats card -->
          <div class="absolute -bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-gray-100">
            <div class="grid grid-cols-3 gap-6 text-center">
              <div class="space-y-1">
                <div class="text-2xl font-black text-gray-900">15+</div>
                <div class="text-xs text-gray-500 uppercase tracking-wide font-semibold">Let</div>
              </div>
              <div class="space-y-1">
                <div class="text-2xl font-black text-gray-900">10k+</div>
                <div class="text-xs text-gray-500 uppercase tracking-wide font-semibold">Pacientů</div>
              </div>
              <div class="space-y-1">
                <div class="text-2xl font-black text-gray-900">99%</div>
                <div class="text-xs text-gray-500 uppercase tracking-wide font-semibold">Úspěšnost</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Minimal decorative elements -->
    <div class="absolute top-1/4 right-1/4 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl"></div>
    <div class="absolute bottom-1/4 left-1/4 w-24 h-24 bg-blue-50/40 rounded-full blur-2xl"></div>
  </section>
</template>

<script setup>
const smoothScrollTo = (sectionId) => {
  // Find the target section
  const targetSection = document.getElementById(sectionId);
  
  if (targetSection) {
    // Get navbar height for offset (adjust this value based on your navbar height)
    const navbarHeight = 80; // Approximate navbar height in pixels
    
    // Get the splitter element within the section (usually the first decorative element)
    const splitter = targetSection.querySelector('.inline-flex.items-center.space-x-4') || targetSection;
    
    // Calculate position with offset
    const elementPosition = splitter.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
    
    // Premium smooth scroll with longer duration
    const startPosition = window.pageYOffset;
    const distance = offsetPosition - startPosition;
    const duration = 1200; // 1.2 seconds for premium feel
    let start = null;
    
    function animation(currentTime) {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    // Easing function for smooth, premium feel
    function easeInOutCubic(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t * t + b;
      t -= 2;
      return c / 2 * (t * t * t + 2) + b;
    }
    
    requestAnimationFrame(animation);
  }
};
</script>

<style scoped>
/* Smooth hover transitions for buttons and image only */
button {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

img {
  transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}
</style> 