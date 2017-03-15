<template>
  <div class="daily">
    日程
    <calendar></calendar>
  </div>
</template>
<script>
import calendar from '@/components/calendar'
export default {
  name: 'daily',
  components: {
    calendar
  }
}
</script>
