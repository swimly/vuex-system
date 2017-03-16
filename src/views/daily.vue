<template>
  <div class="daily">
    <calendar></calendar>
  </div>
</template>
<script>
import calendar from '@/components/calendar'
export default {
  name: 'daily',
  head: {
    title: {
      inner: '日程'
    }
  },
  components: {
    calendar
  }
}
</script>
