import { calcNewDate, calcTime, isLeapYear } from './dateUtil'

export function Epok(offset) {
  if(!(this instanceof Epok)) {
    return new Epok(offset)
  }

  this._date = offset ? new Date(offset) : new Date()
}

Epok.prototype = {
  date: function(fromDate) {
    if (!(fromDate instanceof Date)) {
      fromDate = fromDate ? new Date(fromDate) : new Date()
    }
    this._date = fromDate
    return calcNewDate.call(this)
  },
  isLeapYear: function(year) {
    return isLeapYear(year)
  },
  minutes: function(minutes) {
    this._minutes = minutes
    return this
  },
  hours: function(hours) {
    this._hours = hours
    return this
  },
  days: function(days) {
    this._days = days
    return this
  },
  weeks: function(weeks) {
    this._weeks = weeks
    return this
  },
  months: function(months) {
    this._months = months
    return this
  },
  years: function(years) {
    this._years = years
    return this
  }
}

Object.defineProperties(Epok.prototype, {
  from: {
    get: function() {
      this._from = true
      return this
    }
  },
  to: {
    get: function() {
      this._to = true
      return this
    }
  },
  milliseconds: {
    get: function() {
      this._toMillis = true
      return calcTime.call(this)
    }
  },
  seconds: {
    get: function() {
      this._toSeconds = true
      return calcTime.call(this)
    }
  },
  ago: {
    get: function() {
      this._ago = true
      return calcNewDate.call(this)
    }
  },
  now: {
    get: function() {
      return calcNewDate.call(this)
    }
  }
})
