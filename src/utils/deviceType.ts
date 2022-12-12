'use strict'

const deviceType = (): string => {
  if (window.innerWidth <= 768) {
    return 'Mobile'
  } else if (window.innerWidth > 768 && window.innerWidth <= 1024) {
    return 'Tab'
  } else {
    return 'Desktop'
  }
}

export { deviceType }