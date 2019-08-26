const REFRESH_TIME = 1000
const POMODORO_DEFAULT = 25 * 60
const POMODOROS_GOAL_DEFAULT = 70
const GOAL_INDICATOR_FORMAT_DEFAULT = 2
const NOTIFICATION_TITLE_DEFAULT = 'Time is over.'
const NOTIFICATION_BODY_DEFAULT = 'Well done!'
const NOTIFICATION_SOUND_DEFAULT = 'sound1.mp3'
const NOTIFICATION_VOLUME_DEFAULT = 100
const COLOR_THEME_DEFAULT = 'green'
const TAB_TITLE_DEFAULT = 'Pomodoros Ketchup'

const COLOR_THEMES = {
  green: {
    superLight: '#F1F8E2',
    light: '#D2E8A6',
    primary: '#98CA32',
    dark: '#719627',
    superDark: '#263409'
  },
  blue: {
    superLight: '#E7F3EF',
    light: '#A9D6C7',
    primary: '#72C0A7',
    dark: '#3D7F6A',
    superDark: '#093426'
  },
  red: {
    superLight: '#FFE5DC',
    light: '#FFC3AE',
    primary: '#FD8458',
    dark: '#D63900',
    superDark: '#341509'
  },
  yellow: {
    superLight: '#FFFCDC',
    light: '#F1EA9D',
    primary: '#E1D447',
    dark: '#AA9D18',
    superDark: '#343009'
  }
}

const NOTIFICATION_SOUNDS = [
  'sound1.mp3',
  'sound2.mp3',
  'sound3.mp3',
  'sound4.mp3'
]

export {
  REFRESH_TIME,
  POMODORO_DEFAULT,
  POMODOROS_GOAL_DEFAULT,
  GOAL_INDICATOR_FORMAT_DEFAULT,
  NOTIFICATION_TITLE_DEFAULT,
  NOTIFICATION_BODY_DEFAULT,
  NOTIFICATION_SOUND_DEFAULT,
  NOTIFICATION_SOUNDS,
  NOTIFICATION_VOLUME_DEFAULT,
  COLOR_THEME_DEFAULT,
  TAB_TITLE_DEFAULT,
  COLOR_THEMES
}
