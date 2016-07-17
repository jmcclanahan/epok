// Millisecond conversions
const _secondToMilli   = 1000
const _minuteToMilli   = 60 * _secondToMilli
const _hourToMilli     = 60 * _minuteToMilli
const _dayToMilli      = 24 * _hourToMilli
const _weekToMilli     = 7 * _dayToMilli
const _yearToMilli     = 52 * _weekToMilli + (24 * _hourToMilli)
const _leapYearToMilli = 52 * _weekToMilli + (2 * (24 * _hourToMilli))

// Second conversions
const _minuteToSec   = 60
const _hourToSec     = 60 * _minuteToSec
const _dayToSec      = 24 * _hourToSec
const _weekToSec     = 7 * _dayToSec
const _yearToSec     = 52 * _weekToSec + (24 * _hourToSec)
const _leapYearToSec = 52 * _weekToSec + (2 * (24 * _hourToSec))


/*
* Minutes
*/
export function minutesToMilliseconds(minutes) {
  return minutes * _minuteToMilli
}

export function minutesToSeconds(minutes) {
  return minutes * _minuteToSec
}

export function minutes(date, minutes) {
  return new Date(date.getTime() + minutes * _minuteToMilli)
}

/*
* Hours
*/
export function hoursToMilliseconds(hours) {
  return hours * _hourToMilli
}

export function hoursToSeconds(hours) {
  return hours * _hourToSec
}

export function hours(date, hours) {
  return new Date(date.getTime() + hours * _hourToMilli)
}

/*
* Days
*/
export function daysToMilliseconds(days) {
  return days * _dayToMilli;
}

export function daysToSeconds(days) {
  return days * _dayToSec
}

export function days(date, days) {
  return new Date(date.getTime() + days * _dayToMilli)
}

/*
* Weeks
*/
export function weeksToMilliseconds(weeks) {
  return weeks * _weekToMilli;
}

export function weeksToSeconds(weeks) {
  return weeks * _weekToSec;
}

export function weeks(date, weeks) {
  return new Date(date.getTime() + weeks * _weekToMilli)
}

/*
* Months
*/
export function months(date, months) {
  var days = date.getDate();
  date.setDate(1);
  date.setMonth(date.getMonth() + months);
  date.setDate(Math.min(days, getDaysInMonth(date.getFullYear(), date.getMonth())));
  return date;
}

/*
* Years
*/
export function yearsToMilliseconds(years) {
  return years * _yearToMilli;
}

export function yearsToSeconds(years) {
  return years * _yearToSec;
}

export function years(date, years) {
  let year = date.getFullYear()
  year += years
  date.setFullYear(year)

  return date
}

export function isLeapYear(year) {
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

export function getDaysInMonth(year, month) {
    return [31, (isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
};

export function calcNewDate() {
  if (this._from || this._ago) {
    if (this._minutes) {
      let m = Math.abs(this._minutes)
      m = this._from ? m : -m
      this._date = minutes(this._date, m)
    }

    if (this._hours) {
      let h = Math.abs(this._hours)
      h = this._from ? h : -h
      this._date = hours(this._date, h)
    }

    if (this._days) {
      let d = Math.abs(this._days)
      d = this._from ? d : -d
      this._date = days(this._date, d)
    }

    if (this._weeks) {
      let w = Math.abs(this._weeks)
      w = this._from ? w : -w
      this._date = weeks(this._date, w)
    }

    if (this._months) {
      let m = Math.abs(this._months)
      m = this._from ? m : -m
      this._date = months(this._date, m)
    }

    if (this._years) {
      let y = Math.abs(this._years)
      y = this._from ? y : -y
      this._date = years(this._date, y)
    }
  }
    return this._date
}

export function calcTime() {
  if (this._to) {
    let time = 0

    if (this._minutes) {
      const m = Math.abs(this._minutes)
      time += this._toSeconds ? minutesToSeconds(m) : minutesToMilliseconds(m)
    }

    if (this._hours) {
      const h = Math.abs(this._hours)
      time += this._toSeconds ? hoursToSeconds(h) : hoursToMilliseconds(h)
    }

    if (this._days) {
      const d = Math.abs(this._days)
      time += this._toSeconds ? daysToSeconds(d) : daysToMilliseconds(d)
    }

    if (this._weeks) {
      const w = Math.abs(this._weeks)
      time += this._toSeconds ? weeksToSeconds(w) : weeksToMilliseconds(w)
    }

    if (this._years) {
      const y = Math.abs(this._years)
      time += this._toSeconds ? yearsToSeconds(y) : yearsToMilliseconds(y)
    }

    return time
  }
}
