<template>
  <full-calendar locale="en"></full-calendar>
</template>
<script>
import fullCalendar from 'vue-fullcalendar'
export default {
  name: 'calendar',
  components: {
    'full-calendar': fullCalendar
  }
}
</script>
