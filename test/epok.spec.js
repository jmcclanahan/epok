import { expect } from 'chai'

import { Epok } from '../src/epok'

const testDate     = new Date('June 29, 2016, 02:30:00')
const testLeapDate = new Date('February 28, 2016, 2:30:00')

describe('Epok', () => {

  it('should return the current date', () => {
    const actualDate      = Epok(testDate).now
    const actualMinutes   = getTime(actualDate)
    const actualNow       = getDate(actualDate)
    const expectedMinutes = '02:30:00'
    const expectedDate    = '6/29/2016'

    expect(actualNow).to.equal(expectedDate)
    expect(actualMinutes).to.equal(expectedMinutes)
  })

  describe('minutes', () => {

    it('10 minutes to milliseconds', () => {
      const actualSeconds   = Epok().minutes(10).to.milliseconds
      const expectedSeconds = 600000

      expect(actualSeconds).to.equal(expectedSeconds)
    })

    it('10 minutes to seconds', () => {
      const actualSeconds   = Epok().minutes(10).to.seconds
      const expectedSeconds = 600

      expect(actualSeconds).to.equal(expectedSeconds)
    })

    it('10 minutes from now', () => {
      const actualDate      = Epok(testDate).minutes(10).from.now
      const actualMinutes   = getTime(actualDate)
      const expectedMinutes = '02:40:00'

      expect(actualMinutes).to.equal(expectedMinutes)
    })

    it('10 minutes from a specified date', () => {
      const actualDate      = Epok().minutes(10).from.date(new Date('06/29/2016'))
      const actualMinutes   = getTime(actualDate)
      const expectedMinutes = '00:10:00'

      expect(actualMinutes).to.equal(expectedMinutes)
    })

    it('10 minutes from a specified date string', () => {
      const actualDate      = Epok().minutes(10).from.date('06/29/2016')
      const actualMinutes   = getTime(actualDate)
      const expectedMinutes = '00:10:00'

      expect(actualMinutes).to.equal(expectedMinutes)
    })

    it('10 minutes ago', () => {
      const actualDate      = Epok(testDate).minutes(10).ago
      const actualMinutes   = getTime(actualDate)
      const expectedMinutes = '02:20:00'

      expect(actualMinutes).to.equal(expectedMinutes)
    })
  })

  describe('hours', () => {

    it('1 hour to milliseconds', () => {
      const actualSeconds   = Epok().hours(1).to.milliseconds
      const expectedSeconds = 3600000

      expect(actualSeconds).to.equal(expectedSeconds)
    })

    it('1 hour to seconds', () => {
      const actualSeconds   = Epok().hours(1).to.seconds
      const expectedSeconds = 3600

      expect(actualSeconds).to.equal(expectedSeconds)
    })

    it('1 hour from now', () => {
      const actualDate      = Epok(testDate).hours(1).from.now
      const actualMinutes   = getTime(actualDate)
      const expectedMinutes = '03:30:00'

      expect(actualMinutes).to.equal(expectedMinutes)
    })

    it('1 hour ago', () => {
      const actualDate      = Epok(testDate).hours(1).ago
      const actualMinutes   = getTime(actualDate)
      const expectedMinutes = '01:30:00'

      expect(actualMinutes).to.equal(expectedMinutes)
    })
  })

  describe('days', () => {

    it('1 day to milliseconds', () => {
      const actualSeconds   = Epok().days(1).to.milliseconds
      const expectedSeconds = 86400000

      expect(actualSeconds).to.equal(expectedSeconds)
    })

    it('1 day to seconds', () => {
      const actualSeconds   = Epok().days(1).to.seconds
      const expectedSeconds = 86400

      expect(actualSeconds).to.equal(expectedSeconds)
    })

    it('1 day from now', () => {
      const actualDate      = Epok(testDate).days(1).from.now
      const actualDays      = getDate(actualDate)
      const actualMinutes   = getTime(actualDate)
      const expectedDays    = '6/30/2016'
      const expectedMinutes = '02:30:00'

      expect(actualDays).to.equal(expectedDays)
      expect(actualMinutes).to.equal(expectedMinutes)
    })

    it('1 day from a specified date', () => {
      const actualDate    = Epok().days(1).from.date(new Date('06/29/2016'))
      const actualDays    = getDate(actualDate)
      const expectedDate  = '6/30/2016'

      expect(actualDays).to.equal(expectedDate)
    })

    it('1 day from a specified date string', () => {
      const actualDate    = Epok().days(1).from.date('06/29/2016')
      const actualDays    = getDate(actualDate)
      const expectedDate  = '6/30/2016'

      expect(actualDays).to.equal(expectedDate)
    })

    it('1 day ago', () => {
      const actualDate      = Epok(testDate).days(1).ago
      const actualDays      = getDate(actualDate)
      const actualMinutes   = getTime(actualDate)
      const expectedDays    = '6/28/2016'
      const expectedMinutes = '02:30:00'

      expect(actualDays).to.equal(expectedDays)
      expect(actualMinutes).to.equal(expectedMinutes)
    })
  })

  describe('weeks', () => {

    it('1 week to milliseconds', () => {
      const actualSeconds   = Epok().weeks(1).to.milliseconds
      const expectedSeconds = 604800000

      expect(actualSeconds).to.equal(expectedSeconds)
    })

    it('1 week to seconds', () => {
      const actualSeconds   = Epok().weeks(1).to.seconds
      const expectedSeconds = 604800

      expect(actualSeconds).to.equal(expectedSeconds)
    })

    it('1 week from now', () => {
      const actualDate      = Epok(testDate).weeks(1).from.now
      const actualWeeks     = getDate(actualDate)
      const actualMinutes   = getTime(actualDate)
      const expectedWeeks   = '7/6/2016'
      const expectedMinutes = '02:30:00'

      expect(actualWeeks).to.equal(expectedWeeks)
      expect(actualMinutes).to.equal(expectedMinutes)
    })

    it('1 week from a specified date', () => {
      const actualDate   = Epok().weeks(1).from.date(new Date('06/29/2016'))
      const actualWeeks  = getDate(actualDate)
      const expectedDate = '7/6/2016'

      expect(actualWeeks).to.equal(expectedDate)
    })

    it('1 week from a specified date string', () => {
      const actualDate   = Epok().weeks(1).from.date('06/29/2016')
      const actualWeeks  = getDate(actualDate)
      const expectedDate = '7/6/2016'

      expect(actualWeeks).to.equal(expectedDate)
    })

    it('1 week ago', () => {
      const actualDate       = Epok(testDate).weeks(1).ago
      const actualWeeks      = getDate(actualDate)
      const actualMinutes    = getTime(actualDate)
      const expectedWeeks    = '6/22/2016'
      const expectedMinutes  = '02:30:00'

      expect(actualWeeks).to.equal(expectedWeeks)
      expect(actualMinutes).to.equal(expectedMinutes)
    })
  })

  describe('months', () => {

    it('1 month from now', () => {
      const actualDate      = Epok(testDate).months(1).from.now
      const actualMonths    = getDate(actualDate)
      const actualMinutes   = getTime(actualDate)
      const expectedMonths  = '7/29/2016'
      const expectedMinutes = '02:30:00'

      expect(actualMonths).to.equal(expectedMonths)
      expect(actualMinutes).to.equal(expectedMinutes)
    })

    it('1 month from a specified date', () => {
      const actualDate   = Epok().months(1).from.date(new Date('06/29/2016'))
      const actualMonths = getDate(actualDate)
      const expectedDate = '7/29/2016'

      expect(actualMonths).to.equal(expectedDate)
    })

    it('1 month from a specified date string', () => {
      const actualDate   = Epok().months(1).from.date('06/29/2016')
      const actualMonths = getDate(actualDate)
      const expectedDate = '7/29/2016'

      expect(actualMonths).to.equal(expectedDate)
    })

    it('1 month from now using date()', () => {
      const actualDate   = Epok().months(1).from.date()
      const actualMonths = getDate(actualDate)
      const expectedDate = getDate(Epok().months(1).from.now)

      expect(actualMonths).to.equal(expectedDate)
    })

    it('1 month ago', () => {
      const actualDate      = Epok(testDate).months(1).ago
      const actualMonths    = getDate(actualDate)
      const actualMinutes   = getTime(actualDate)
      const expectedMonths  = '5/29/2016'
      const expectedMinutes = '02:30:00'

      expect(actualMonths).to.equal(expectedMonths)
      expect(actualMinutes).to.equal(expectedMinutes)
    })

    it('should handle leap year', () => {
      const actualDate   = Epok(new Date('01/31/2016')).months(1).from.now
      const actualMonths = getDate(actualDate)
      const expectedDate = '2/29/2016'

      expect(actualMonths).to.equal(expectedDate)
    })

    it('should handle a non-leap year', () => {
      const actualDate   = Epok(new Date('01/31/2015')).months(1).from.now
      const actualMonths = getDate(actualDate)
      const expectedDate = '2/28/2015'

      expect(actualMonths).to.equal(expectedDate)
    })
  })

  describe('years', () => {

    it('1 year to milliseconds', () => {
      const actualSeconds   = Epok().years(1).to.milliseconds
      const expectedSeconds = 31536000000

      expect(actualSeconds).to.equal(expectedSeconds)
    })

    it('1 year to milliseconds', () => {
      const actualSeconds   = Epok().years(1).to.seconds
      const expectedSeconds = 31536000

      expect(actualSeconds).to.equal(expectedSeconds)
    })

    it('1 year from now', () => {
      const actualDate      = Epok(testDate).years(1).from.now
      const actualYears     = getDate(actualDate)
      const actualMinutes   = getTime(actualDate)
      const expectedYears   = '6/29/2017'
      const expectedMinutes = '02:30:00'

      expect(actualYears).to.equal(expectedYears)
      expect(actualMinutes).to.equal(expectedMinutes)
    })

    it('1 year from a specified date', () => {
      const actualDate    = Epok().years(1).from.date(new Date('06/29/2016'))
      const actualYears   = getDate(actualDate)
      const expectedDate  = '6/29/2017'

      expect(actualYears).to.equal(expectedDate)
    })

    it('1 years from a specified date string', () => {
      const actualDate    = Epok().years(1).from.date('06/29/2016')
      const actualYears   = getDate(actualDate)
      const expectedDate  = '6/29/2017'

      expect(actualYears).to.equal(expectedDate)
    })

    it('1 year ago', () => {
      const actualDate      = Epok(testDate).years(1).ago
      const actualYears     = getDate(actualDate)
      const actualMinutes   = getTime(actualDate)
      const expectedYears   = '6/29/2015'
      const expectedMinutes = '02:30:00'

      expect(actualYears).to.equal(expectedYears)
      expect(actualMinutes).to.equal(expectedMinutes)
    })
  })

  describe('hours and minutes', () => {

    it('1 hour and 10 minutes to milliseconds', () => {
      const actualTime   = Epok(testDate).hours(1).minutes(10).to.milliseconds
      const expectedTime = 4200000

      expect(actualTime).to.equal(expectedTime)
    })

    it('1 hour and 10 minutes to seconds', () => {
      const actualTime   = Epok(testDate).hours(1).minutes(10).to.seconds
      const expectedTime = 4200

      expect(actualTime).to.equal(expectedTime)
    })

    it('1 hour and 10 minutes from now', () => {
      const actualDate   = Epok(testDate).hours(1).minutes(10).from.now
      const actualTime   = getTime(actualDate)
      const expectedTime = '03:40:00'

      expect(actualTime).to.equal(expectedTime)
    })

    it('1 hour and 10 minutes from a specified date', () => {
      const actualDate   = Epok().hours(1).minutes(10).from.date(new Date('06/29/2016'))
      const actualTime   = getTime(actualDate)
      const expectedTime = '01:10:00'

      expect(actualTime).to.equal(expectedTime)
    })

    it('1 hour and 10 minutes from a specified date string', () => {
      const actualDate   = Epok().hours(1).minutes(10).from.date('06/29/2016')
      const actualTime   = getTime(actualDate)
      const expectedTime = '01:10:00'

      expect(actualTime).to.equal(expectedTime)
    })

    it('1 hour and 10 minutes ago', () => {
      const actualDate   = Epok(testDate).hours(1).minutes(10).ago
      const actualTime   = getTime(actualDate)
      const expectedTime = '01:20:00'

      expect(actualTime).to.equal(expectedTime)
    })
  })

  describe('days and hours', () => {

    it('1 day and 1 hour to milliseconds', () => {
      const actualTime   = Epok(testDate).days(1).hours(1).to.milliseconds
      const expectedTime = 90000000

      expect(actualTime).to.equal(expectedTime)
    })

    it('1 day and 1 hour to seconds', () => {
      const actualTime   = Epok(testDate).days(1).hours(1).to.seconds
      const expectedTime = 90000

      expect(actualTime).to.equal(expectedTime)
    })

    it('1 day and 1 hour from now', () => {
      const actualDate   = Epok(testDate).days(1).hours(1).from.now
      const actualDays   = getDate(actualDate)
      const actualTime   = getTime(actualDate)
      const expectedDate = '6/30/2016'
      const expectedTime = '03:30:00'

      expect(actualDays).to.equal(expectedDate)
      expect(actualTime).to.equal(expectedTime)
    })

    it('1 day and 1 hour ago', () => {
      const actualDate   = Epok(testDate).days(1).hours(1).ago
      const actualDays   = getDate(actualDate)
      const actualTime   = getTime(actualDate)
      const expectedDate = '6/28/2016'
      const expectedTime = '01:30:00'

      expect(actualDays).to.equal(expectedDate)
      expect(actualTime).to.equal(expectedTime)
    })
  })

  describe('days, hours and minutes', () => {

    it('1 day, 1 hour and 10 minutes to milliseconds', () => {
      const actualTime   = Epok(testDate).days(1).hours(1).minutes(10).to.milliseconds
      const expectedTime = 90600000

      expect(actualTime).to.equal(expectedTime)
    })

    it('1 day, 1 hour and 10 minutes to seconds', () => {
      const actualTime   = Epok(testDate).days(1).hours(1).minutes(10).to.seconds
      const expectedTime = 90600

      expect(actualTime).to.equal(expectedTime)
    })

    it('1 day, 1 hour and 10 minutes from now', () => {
      const actualDate   = Epok(testDate).days(1).hours(1).minutes(10).from.now
      const actualDays   = getDate(actualDate)
      const actualTime   = getTime(actualDate)
      const expectedDate = '6/30/2016'
      const expectedTime = '03:40:00'

      expect(actualDays).to.equal(expectedDate)
      expect(actualTime).to.equal(expectedTime)
    })

    it('1 day, 1 hour and 10 minutes from a specified date', () => {
      const actualDate   = Epok().days(1).hours(1).minutes(10).from.date(new Date('06/29/2016'))
      const actualDays   = getDate(actualDate)
      const actualTime   = getTime(actualDate)
      const expectedDate = '6/30/2016'
      const expectedTime = '01:10:00'

      expect(actualDays).to.equal(expectedDate)
      expect(actualTime).to.equal(expectedTime)
    })

    it('1 hour and 10 minutes from a specified date string', () => {
      const actualDate   = Epok().days(1).hours(1).minutes(10).from.date('06/29/2016')
      const actualDays   = getDate(actualDate)
      const actualTime   = getTime(actualDate)
      const expectedDate = '6/30/2016'
      const expectedTime = '01:10:00'

      expect(actualDays).to.equal(expectedDate)
      expect(actualTime).to.equal(expectedTime)
    })

    it('1 day, 1 hour and 10 minutes ago', () => {
      const actualDate   = Epok(testDate).days(1).hours(1).minutes(10).ago
      const actualDays   = getDate(actualDate)
      const actualTime   = getTime(actualDate)
      const expectedDate = '6/28/2016'
      const expectedTime = '01:20:00'

      expect(actualDays).to.equal(expectedDate)
      expect(actualTime).to.equal(expectedTime)
    })
  })

  describe('years and months', () => {

    it('1 year and 2 months from now', () => {
      const actualDate   = Epok(testDate).years(1).months(2).from.now
      const actualDays   = getDate(actualDate)
      const actualTime   = getTime(actualDate)
      const expectedDate = '8/29/2017'
      const expectedTime = '02:30:00'

      expect(actualDays).to.equal(expectedDate)
      expect(actualTime).to.equal(expectedTime)
    })

    it('1 year and 2 months from a specified date', () => {
      const actualDate   = Epok().years(1).months(2).from.date(new Date('06/29/2016'))
      const actualYears  = getDate(actualDate)
      const actualTime   = getTime(actualDate)
      const expectedDate = '8/29/2017'
      const expectedTime = '00:00:00'

      expect(actualYears).to.equal(expectedDate)
      expect(actualTime).to.equal(expectedTime)
    })

    it('1 year and 2 months from a specified date string', () => {
      const actualDate   = Epok().years(1).months(2).from.date('06/29/2016')
      const actualYears  = getDate(actualDate)
      const actualTime   = getTime(actualDate)
      const expectedDate = '8/29/2017'
      const expectedTime = '00:00:00'

      expect(actualYears).to.equal(expectedDate)
      expect(actualTime).to.equal(expectedTime)
    })

    it('1 year and 2 months ago', () => {
      const actualDate   = Epok(testDate).years(1).months(2).ago
      const actualDays   = getDate(actualDate)
      const actualTime   = getTime(actualDate)
      const expectedDate = '4/29/2015'
      const expectedTime = '02:30:00'

      expect(actualDays).to.equal(expectedDate)
      expect(actualTime).to.equal(expectedTime)
    })
  })

  describe('leap years', () => {

    it('should determine the year 2000 is a leap year', () => {
      const actualLeapYear = Epok().isLeapYear(2000)

      expect(actualLeapYear).to.be.true
    })

    it('should determine the year 2016 is a leap year', () => {
      const actualLeapYear = Epok().isLeapYear(2016)

      expect(actualLeapYear).to.be.true
    })

    it('should determine the year 2015 is not a leap year', () => {
      const actualLeapYear = Epok().isLeapYear(2015)

      expect(actualLeapYear).to.be.false
    })
  })

})

function getTime(date) {
  return date.toLocaleTimeString('en-US', {
              hour12: false,
              hour: "numeric",
              minute: "numeric",
              second: "numeric"})
}

function getDate(date) {
  const month = date.getMonth() + 1
  const day   = date.getDate()
  const year  = String(date.getFullYear())
  return `${month}/${day}/${year}`
}
