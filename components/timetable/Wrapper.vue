<template>
  <d-card class="timetable" elevation="n4" outlined>
    <d-row class="wrapper" align="stretch" :wrap="false">
      <d-column class="times" elevation="n8" no-padding>
        <d-card-subtitle class="spacer" glow elevation="n4">
          <d-icon name="clock"/>
          /
          <d-icon name="calender"/>
        </d-card-subtitle>
        <d-card-subtitle v-for="{from, to} in times" class="time py-0" glow>
          {{ from }} - {{ to }}
        </d-card-subtitle>
      </d-column>
      <d-column no-padding>
        <d-row class="week" elevation="2">
          <d-column class="day" no-padding v-for="(day, d) in days" width="135px" glow>
            <d-card-subtitle class="font-size-medium" :color="currentDay === d?'primary':''">{{ day }}</d-card-subtitle>
          </d-column>
        </d-row>
        <d-card class="schedule-wrapper" width="100%" elevation="n4">
          <HandlerWrapper :pending="pending" :error="error" :refresh="refresh">
            <d-row v-if="!pending" justify="stretch">
              <d-column v-for="(day, d) in schedule.daySchedules" class="day-column" no-padding width="135px">
                <TimetableItem v-for="schedule in day" :color="schedule.subject.color" :from="schedule.timeFrom"
                               :to="schedule.timeTo" :offset="offset">
                  {{ schedule.subject.name }}
                </TimetableItem>
              </d-column>
            </d-row>
          </HandlerWrapper>
        </d-card>
      </d-column>
    </d-row>
  </d-card>
</template>

<script setup lang="ts">

import moment from "moment";
import Timetable from "~/types/Timetable";

const config = useRuntimeConfig()

const {
  data: schedule,
  pending,
  error,
  refresh
} = await useLazyFetch<Timetable>(() => `/classroom/@current/timetable/@current`, {
  baseURL: config.public.API_BASE_URL,
  credentials: 'include',
})

const days = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU']
const times = [
  {
    from: '08:00',
    to: '08:45'
  },
  {
    from: '08:45',
    to: '09:30'
  },
  {
    from: '09:45',
    to: '10:30'
  },
  {
    from: '10:30',
    to: '11:15'
  },
  {
    from: '11:30',
    to: '12:15'
  },
  {
    from: '12:15',
    to: '13:00'
  },
]

const currentDay = computed(() => {
  return moment().isoWeekday();
})

const offset = computed(() => {
  if (!schedule.value) {
    return 0;
  }
  const arr = schedule.value.daySchedules.reduce(function (p: number[], c) {
    if (!c[0]) {
      return p;
    }
    return p.concat(c[0].timeFrom);
  }, []);

  return Math.min.apply(null, arr);
})
</script>

<style scoped lang="scss">
$height: 45px;

.timetable {
  .times {
    .time {
      height: $height;
    }

    .spacer {
      justify-content: center;
      height: $height;
    }
  }

  .week {
    .day {
      height: $height;
    }
  }

  .schedule-wrapper {
    height: calc(100% - $height);
    background-size: 45px 45px;
    background-image: radial-gradient(rgba(255, 255, 255, 0.025) 3px, rgba(0, 0, 0, 0) 3px);

    .day-column {
      position: relative;
    }
  }
}
</style>
