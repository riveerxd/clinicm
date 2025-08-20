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
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=T%C3%A1borsk%C3%A1%20325/57+(ClinicM)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
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

            <!-- Opening Hours Table -->
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
    currentStatus.value = "Zavřeno";
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
      timeUntilNextChange.value = `Otevře ${dayName.toLowerCase()} v ${nextOpenTime}`;
    } else {
      timeUntilNextChange.value = "Otevře v pondělí v 8:00";
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
      currentStatus.value = "Zavírá brzy";
      statusColor.value = "bg-yellow-500";
      statusTextColor.value = "text-yellow-600";
      timeUntilNextChange.value = `Zavírá za ${minutesUntilClose} minut`;
    } else {
      // Open normally
      currentStatus.value = "Otevřeno";
      statusColor.value = "bg-green-500";
      statusTextColor.value = "text-green-600";
      timeUntilNextChange.value = `Zavírá za ${hoursUntilClose}h ${minutesUntilClose}m`;
    }
  } else {
    // Clinic is closed
    currentStatus.value = "Zavřeno";
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
      timeUntilNextChange.value = `Otevře v ${nextOpenTime}`;
    } else {
      // Opens tomorrow
      const tomorrow = new Date(now);
      tomorrow.setDate(tomorrow.getDate() + 1);
      const tomorrowDay = days[tomorrow.getDay()];
      const tomorrowHours = openingHours.value[tomorrowDay];

      if (tomorrowHours && tomorrowHours.open) {
        timeUntilNextChange.value = `Otevře zítra v ${tomorrowHours.open}`;
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
          timeUntilNextChange.value = `Otevře ${dayName.toLowerCase()} v ${nextOpenTime}`;
        } else {
          timeUntilNextChange.value = "Otevře v pondělí v 8:00";
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

// SEO meta tags
useHead({
  title: "ClinicM - Otevírací doba a kontakt",
  meta: [
    {
      name: "description",
      content:
        "ClinicM - Oční klinika s lidským přístupem. Zjistěte naši otevírací dobu, adresu a kontaktní informace.",
    },
    {
      name: "keywords",
      content: "ClinicM, oční klinika, otevírací doba, Praha, kontakt, adresa",
    },
    { property: "og:title", content: "ClinicM - Otevírací doba a kontakt" },
    {
      property: "og:description",
      content:
        "ClinicM - Oční klinika s lidským přístupem. Zjistěte naši otevírací dobu, adresu a kontaktní informace.",
    },
    { property: "og:type", content: "website" },
  ],
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
