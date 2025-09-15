<template>
  <div id="opening-clinic" class="w-full h-min max-w-7xl mx-auto p-4 mt-8">
    <!-- Clinic Name Header -->
    <div class="text-center mb-6">
      <div class="inline-flex items-center space-x-4">
        <div class="w-16 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
        <div class="w-3 h-3 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full"></div>
        <div class="w-16 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
      </div>
      <h1 class="text-4xl lg:text-5xl font-black text-gray-900 mb-2 mt-4">
        Naše klinika
      </h1>
      <p class="text-gray-600 text-sm">Táborská 325/57</p>
    </div>

    <!-- Main Content Box -->
    <div
      class="bg-white/60 backdrop-blur-md rounded-2xl border border-white/40 shadow-lg overflow-hidden"
    >
      <div class="grid lg:grid-cols-2 gap-0">
        
        <!-- Left Side - Google Maps -->
        <div class="relative h-80 lg:h-full">
          <div
            class="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center"
          >
            <!-- Google Maps Placeholder - Replace with actual Google Maps component -->
            <div style="width: 100%; height: 100%">
              <iframe
                width="100%"
                height="100%"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=T%C3%A1borsk%C3%A1%20325/57+(M Clinic)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                title="M Clinic - Táborská 325/57, Praha 4"
                loading="lazy"
                ><a
                  href="https://www.mapsdirections.info/fr/calculer-la-population-sur-une-carte"
                  >mesurer la population sur une carte</a
                ></iframe
              >
            </div>
          </div>
        </div>

        <!-- Right Side - Opening Hours -->
        <div class="p-4 lg:p-6 bg-gradient-to-br from-white/70 to-blue-50/40 lg:h-full flex flex-col justify-center">
          <div class="space-y-4">
            
            

            <!-- Client-side dynamic status -->
            <ClientOnly>
              <template #default>
                <!-- Current Status -->
                <div class="text-center">
                  <div class="inline-flex items-center space-x-3 mb-2">
                    <div 
                      class="w-4 h-4 rounded-full animate-pulse"
                      :class="statusColor"
                    ></div>
                    <span class="text-lg font-semibold" :class="statusTextColor">
                      {{ currentStatus }}
                    </span>
                  </div>
                  
                  <!-- Time until next change -->
                  <div v-if="timeUntilNextChange" class="text-sm text-gray-600">
                    {{ timeUntilNextChange }}
                  </div>
                </div>
              </template>
              
              <template #fallback>
                <!-- SEO-friendly fallback content -->
                <div class="text-center">
                  <div class="inline-flex items-center space-x-3 mb-2">
                    <div class="w-4 h-4 rounded-full bg-blue-500"></div>
                    <span class="text-lg font-semibold text-gray-700">
                      Otevírací doba
                    </span>
                  </div>
                  <div class="text-sm text-gray-600">
                    Pondělí - Čtvrtek: 8:00 - 17:00, Pátek: 8:00 - 12:00
                  </div>
                </div>
              </template>
            </ClientOnly>

            <!-- Opening Hours Table (Always visible for SEO) -->
            <div class="">
              
              <div class="space-y-1.5">
                <div 
                  v-for="(hours, day) in openingHours" 
                  :key="day"
                  class="flex items-center justify-between p-2.5 rounded-xl transition-all duration-300"
                  :class="getDayRowClass(day)"
                >
                  <div class="flex items-center space-x-3">
                    <div
                      class="w-6 h-6 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center"
                    >
                      <span class="text-white font-bold text-xs">{{
                        getDayInitial(day)
                      }}</span>
                    </div>
                    <span class="font-semibold text-gray-800 capitalize text-sm">{{
                      getDayName(day)
                    }}</span>
                  </div>
                  
                  <div class="text-right">
                    <div
                      v-if="hours && hours.open && hours.close"
                      class="space-y-0.5"
                    >
                      <!-- Display split hours if available -->
                      <div v-if="hours.splitHours && hours.splitHours.length > 0">
                        <div 
                          v-for="(slot, index) in hours.splitHours" 
                          :key="index"
                          class="space-y-0.5"
                        >
                          <div class="font-bold text-gray-900 text-sm">
                            {{ formatTime(slot.open) }} - {{ formatTime(slot.close) }}
                          </div>
                          <div v-if="slot.description" class="text-xs text-blue-600 italic">
                            {{ slot.description }}
                          </div>
                        </div>
                      </div>
                      <!-- Fallback to single time range -->
                      <div v-else>
                        <div class="font-bold text-gray-900 text-sm">
                          {{ formatTime(hours.open) }} - {{ formatTime(hours.close) }}
                        </div>
                      </div>
                      <div class="text-xs text-gray-500">
                        {{ hours.duration }}
                      </div>
                    </div>
                    <div v-else class="text-red-500 font-semibold text-sm">Zavřeno</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

// Opening hours configuration
const openingHours = ref({
  monday: { 
    open: "08:00", 
    close: "17:00", 
    duration: "8 hodin (8:00-12:00, 13:00-17:00)",
    splitHours: [
      { open: "08:00", close: "12:00" },
      { open: "13:00", close: "17:00" }
    ]
  },
  tuesday: { 
    open: "08:00", 
    close: "13:00", 
    duration: "5 hodin",
    splitHours: [
      { open: "08:00", close: "13:00" }
    ]
  },
  wednesday: { 
    open: "08:00", 
    close: "16:00", 
    duration: "7 hodin (8:00-12:00, 13:00-16:00)",
    splitHours: [
      { open: "08:00", close: "12:00" },
      { open: "13:00", close: "16:00", description: "Peritesty, pouze objednaní pacienti" }
    ]
  },
  thursday: { 
    open: "08:00", 
    close: "17:00", 
    duration: "8 hodin (8:00-12:00, 13:00-17:00)",
    splitHours: [
      { open: "08:00", close: "12:00" },
      { open: "13:00", close: "17:00" }
    ]
  },
  friday: { 
    open: "08:00", 
    close: "12:00", 
    duration: "4 hodiny",
    splitHours: [
      { open: "08:00", close: "12:00" }
    ]
  },
  saturday: null, // Closed
  sunday: null, // Closed
});

// Reactive state - will be set on client side
const currentTime = ref(new Date());
const currentDay = ref("");
const currentStatus = ref("Načítání...");
const statusColor = ref("bg-gray-400");
const statusTextColor = ref("text-gray-600");
const timeUntilNextChange = ref("");

let timeInterval = null;

// Get day names in Czech
const dayNames = {
  monday: "Pondělí",
  tuesday: "Úterý",
  wednesday: "Středa",
  thursday: "Čtvrtek",
  friday: "Pátek",
  saturday: "Sobota",
  sunday: "Neděle",
};

// Get day initials
const dayInitials = {
  monday: "P",
  tuesday: "Ú",
  wednesday: "S",
  thursday: "Č",
  friday: "P",
  saturday: "S",
  sunday: "N",
};

// Helper functions
const getDayName = (day) => dayNames[day] || day;
const getDayInitial = (day) => dayInitials[day] || day.charAt(0).toUpperCase();

const formatTime = (time) => {
  if (!time) return "";
  return time;
};

const getDayRowClass = (day) => {
  if (day === currentDay.value) {
    return "bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 shadow-md";
  }
  return "bg-white/40 hover:bg-white/60";
};

// Calculate current status
const calculateStatus = () => {
  const now = new Date();
  currentTime.value = now;

  const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const currentDayIndex = now.getDay();
  currentDay.value = days[currentDayIndex];

  const todayHours = openingHours.value[currentDay.value];

  // Check if clinic is closed today
  if (!todayHours || !todayHours.open || !todayHours.close) {
    currentStatus.value = "Dnes máme zavřeno";
    statusColor.value = "bg-red-500";
    statusTextColor.value = "text-red-600";

    // Find next open day
    let nextOpenDay = null;
    let nextOpenTime = null;

    for (let i = 1; i <= 7; i++) {
      const checkDay = days[(currentDayIndex + i) % 7];
      const checkHours = openingHours.value[checkDay];
      if (checkHours && checkHours.open) {
        nextOpenDay = checkDay;
        nextOpenTime = checkHours.open;
        break;
      }
    }

    if (nextOpenDay && nextOpenTime) {
      const dayName = dayNames[nextOpenDay];
      timeUntilNextChange.value = `Otevíráme ${dayName.toLowerCase()} v ${nextOpenTime}`;
    } else {
      timeUntilNextChange.value = "Otevíráme v pondělí v 8:00";
    }
    return;
  }

  const currentTimeStr = now.toTimeString().slice(0, 5);
  
  // Check if clinic is currently open (handling split hours)
  let isCurrentlyOpen = false;
  let nextCloseTime = null;
  let currentSlot = null;

  if (todayHours.splitHours && todayHours.splitHours.length > 0) {
    // Check each time slot
    for (const slot of todayHours.splitHours) {
      if (currentTimeStr >= slot.open && currentTimeStr < slot.close) {
        isCurrentlyOpen = true;
        currentSlot = slot;
        nextCloseTime = slot.close;
        break;
      }
    }
  } else {
    // Single time range
    if (currentTimeStr >= todayHours.open && currentTimeStr < todayHours.close) {
      isCurrentlyOpen = true;
      nextCloseTime = todayHours.close;
    }
  }

  if (isCurrentlyOpen) {
    // Clinic is open
    const closeTimeDate = new Date();
    const [closeHour, closeMinute] = nextCloseTime.split(":");
    closeTimeDate.setHours(parseInt(closeHour), parseInt(closeMinute), 0);

    const timeUntilClose = closeTimeDate.getTime() - now.getTime();
    const hoursUntilClose = Math.floor(timeUntilClose / (1000 * 60 * 60));
    const minutesUntilClose = Math.floor(
      (timeUntilClose % (1000 * 60 * 60)) / (1000 * 60)
    );

    if (hoursUntilClose < 1) {
      // Closing in less than an hour
      currentStatus.value = "Brzy zavíráme";
      statusColor.value = "bg-yellow-500";
      statusTextColor.value = "text-yellow-600";
      timeUntilNextChange.value = `Zavíráme za ${minutesUntilClose} minut`;
    } else {
      // Open normally
      currentStatus.value = "Máme otevřeno";
      statusColor.value = "bg-green-500";
      statusTextColor.value = "text-green-600";
      timeUntilNextChange.value = `Zavíráme za ${hoursUntilClose}h ${minutesUntilClose}m`;
    }
  } else {
    // Clinic is closed
    currentStatus.value = "Máme zavřeno";
    statusColor.value = "bg-red-500";
    statusTextColor.value = "text-red-600";

    // Find next opening time today
    let nextOpenTime = null;
    if (todayHours.splitHours && todayHours.splitHours.length > 0) {
      for (const slot of todayHours.splitHours) {
        if (currentTimeStr < slot.open) {
          nextOpenTime = slot.open;
          break;
        }
      }
    } else if (currentTimeStr < todayHours.open) {
      nextOpenTime = todayHours.open;
    }

    if (nextOpenTime) {
      // Opens later today
      timeUntilNextChange.value = `Otevíráme v ${nextOpenTime}`;
    } else {
      // Opens tomorrow
      const tomorrow = new Date(now);
      tomorrow.setDate(tomorrow.getDate() + 1);
      const tomorrowDay = days[tomorrow.getDay()];
      const tomorrowHours = openingHours.value[tomorrowDay];

      if (tomorrowHours && tomorrowHours.open) {
        timeUntilNextChange.value = `Otevíráme zítra v ${tomorrowHours.open}`;
      } else {
        // Find next open day
        let nextOpenDay = null;
        let nextOpenTime = null;

        for (let i = 1; i <= 7; i++) {
          const checkDay = days[(tomorrow.getDay() + i) % 7];
          const checkHours = openingHours.value[checkDay];
          if (checkHours && checkHours.open) {
            nextOpenDay = checkDay;
            nextOpenTime = checkHours.open;
            break;
          }
        }

        if (nextOpenDay && nextOpenTime) {
          const dayName = dayNames[nextOpenDay];
          timeUntilNextChange.value = `Otevíráme ${dayName.toLowerCase()} v ${nextOpenTime}`;
        } else {
          timeUntilNextChange.value = "Otevíráme v pondělí v 8:00";
        }
      }
    }
  }
};

// Client-side only logic
onMounted(() => {
  // Calculate status immediately
  calculateStatus();
  
  // Set up interval to update every minute
  timeInterval = setInterval(calculateStatus, 60000);
});

onUnmounted(() => {
  if (timeInterval) {
    clearInterval(timeInterval);
  }
});

// Enhanced SEO meta tags with structured data
useHead({
  title: "M Clinic | Oční klinika Praha 4 - Otevírací doba a kontakt",
  meta: [
    {
      name: "description",
      content: "M Clinic - Oční klinika v Praze 4, Táborská 325/57. Aktuální otevírací doba: Po-Čt 8:00-17:00, Pá 8:00-12:00. Profesionální péče o zrak s moderním vybavením. Tel: +420 241 740 815",
    },
    {
      name: "keywords",
      content: "M Clinic, oční klinika Praha 4, otevírací doba, oční vyšetření, Táborská 325/57, oční lékař Praha, optometrie, vyšetření zraku, kontaktní čočky, brýle",
    },
    {
      name: "author",
      content: "M Clinic s.r.o.",
    },
    {
      name: "robots",
      content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    },
    // Open Graph tags for social media
    { 
      property: "og:title", 
      content: "M Clinic | Oční klinika Praha 4 - Otevírací doba" 
    },
    {
      property: "og:description",
      content: "Oční klinika v Praze 4 s profesionální péčí o zrak. Otevírací doba: Po-Čt 8:00-17:00, Pá 8:00-12:00. Táborská 325/57.",
    },
    { 
      property: "og:type", 
      content: "business.business" 
    },
    { 
      property: "og:url", 
      content: "https://www.clinicm.cz/" 
    },
    { 
      property: "og:site_name", 
      content: "M Clinic" 
    },
    { 
      property: "og:locale", 
      content: "cs_CZ" 
    },
    // Twitter Card tags
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "M Clinic | Oční klinika Praha 4",
    },
    {
      name: "twitter:description",
      content: "Oční klinika v Praze 4. Otevírací doba: Po-Čt 8:00-17:00, Pá 8:00-12:00. Táborská 325/57.",
    },
    // Local business SEO
    {
      name: "geo.region",
      content: "CZ-PR",
    },
    {
      name: "geo.placename",
      content: "Praha 4",
    },
    {
      name: "geo.position",
      content: "50.062980;14.441230",
    },
    {
      name: "ICBM",
      content: "50.062980, 14.441230",
    },
    // Enhanced Schema.org structured data
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": ["MedicalBusiness", "LocalBusiness"],
        "name": "M Clinic",
        "alternateName": "M Clinic s.r.o.",
        "description": "Oční klinika s lidským přístupem a moderním vybavením v Praze 4. Specializujeme se na komplexní péči o zrak.",
        "url": "https://www.clinicm.cz",
        "telephone": "+420241740815",
        "email": "sestra@clinicm.cz",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Táborská 325/57",
          "addressLocality": "Praha 4",
          "addressRegion": "Praha",
          "postalCode": "14000",
          "addressCountry": "CZ"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 50.062980,
          "longitude": 14.441230
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Thursday"],
            "opens": "08:00",
            "closes": "17:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Tuesday",
            "opens": "08:00",
            "closes": "13:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Wednesday",
            "opens": "08:00",
            "closes": "16:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Friday",
            "opens": "08:00",
            "closes": "12:00"
          }
        ],
        "medicalSpecialty": "Ophthalmology",
        "availableService": [
          {
            "@type": "MedicalProcedure",
            "name": "Komplexní oční vyšetření",
            "description": "Kompletní vyšetření zraku a očí"
          },
          {
            "@type": "MedicalProcedure", 
            "name": "Vyšetření očního pozadí",
            "description": "Specializované vyšetření sítnice"
          },
          {
            "@type": "MedicalProcedure", 
            "name": "Předpis brýlí a kontaktních čoček",
            "description": "Optometrické služby"
          }
        ],
        "priceRange": "$$",
        "currenciesAccepted": "CZK",
        "paymentAccepted": ["Cash", "Credit Card"],
        "hasMap": "https://maps.google.com/maps?q=Táborská+325/57,+Praha+4",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "127"
        }
      })
    }
  ],
  link: [
    {
      rel: "canonical",
      href: "https://www.clinicm.cz/",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Domů",
            "item": "https://www.clinicm.cz/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Otevírací doba",
            "item": "https://www.clinicm.cz/#opening-clinic"
          }
        ]
      })
    }
  ]
});
</script>

<style scoped>
/* Custom animations */
@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Smooth transitions */
* {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Backdrop blur support */
.backdrop-blur-md {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

/* Gradient text */
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}

/* Hover effects */
.hover\:bg-white\/60:hover {
  background-color: rgba(255, 255, 255, 0.6);
}

/* Shadow effects */
.shadow-2xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* SSR safe animations */
@media (prefers-reduced-motion: no-preference) {
  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
}
</style>
