const weekDay = document.querySelector('[data-testid=currentDayOfTheWeek]')
const currentTime = document.querySelector('[data-testid=currentUTCTime')

const date = new Date()

const weekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

weekDay.textContent = weekDays[date.getUTCDay()]
currentTime.textContent = date.getTime()
