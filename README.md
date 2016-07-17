# epok
[![Build Status](https://travis-ci.org/jmcclanahan/Epok.svg?branch=master)](https://travis-ci.org/jmcclanahan/epok)
[![Coverage Status](https://coveralls.io/repos/github/jmcclanahan/Epok/badge.svg?branch=master)](https://coveralls.io/github/jmcclanahan/epok?branch=master)
* Epok extends Date() functionality with easy to use functions and Chai-like syntax
* No external dependencies
* Since this is just a wrapper around Date(), all leap year calculations are taken care of for you

# Installation
`npm install epok`

# Usage
```javascript
// 2016-06-29T07:30:00.000Z
Epok().now

// 2016-06-29T07:40:00.000Z
Epok().minutes(10).from.now

// 2016-06-29T07:20:00.000Z
Epok().minutes(10).ago

// 600000
Epok().minutes(10).to.milliseconds

// 2016-06-30T11:50:00.000Z
Epok().days(1).hours(4).minutes(20).from.now

// 2018-10-03T05:00:00.000Z
Epok().years(2).months(3).days(4).from.date('6/29/2016')
```

# API
#### `Epok()`
Creates a `Date` that defaults to the current date a time.

```javascript
// Default
Epok()

// With Optional Offset date
Epok('6/29/2016') // or
Epok(new Date(6/29/2016))
```

#### `now`
Returns the current date
```javascript
Epok().now
```

#### `from`
Used in conjunction with `now` or `date` to return a `Date` from the specified date/time

```javascript
// Return the date 1 day from now
Epok().days(1).from.now

// Return the date 1 day from 6/29/2016
Epok().days(1).from.date('6/29/2016')
```

#### `date`
Used in conjunction with `from` to return a `Date` from the specified date/time

```javascript
// Defaults to the current date if no date is specified
Epok().days(1).hours(4).from.date()

// You can use a string representation of the date
Epok().days(1).from.date('6/29/2016')

// Or you can pass a Date() object
Epok().days(1).hours(2).from.date(new Date('6/29/2016'))
```

#### `ago`
Returns the `Date` from some time ago

```javascript
// Return the date 1 day ago
Epok().days(1).ago

// Return the date 1 day ago from 6/29/2016
Epok('6/29/2016').days(1).ago
```

#### `to`
Used in conjunction with `milliseconds` and `seconds` to return the duration in milliseconds or seconds. See `milliseconds` and `seconds` for usage.

#### `milliseconds`
Returns the specified duration in milliseconds

```javascript
// Return 10 minutes in milliseconds
Epok().minutes(10).to.milliseconds

// Return 1 year, 2 days and 3 hours in milliseconds
Epok().years(1).days(2).hours(3).to.milliseconds
```
**NOTE**: Months cannot be converted to milliseconds currently because of the varying days in a month. This functionality is planned for the future.

#### `seconds`
Returns the specified duration in seconds

```javascript
// Return 10 minutes in seconds
Epok().minutes(10).to.seconds

// Return 1 year, 2 days and 3 hours in seconds
Epok().years(1).days(2).hours(3).to.seconds
```
**NOTE**: Months cannot be converted to seconds currently because of the varying days in a month. This functionality is planned for the future.

#### `minutes`
Specify the number of minutes to be used in the duration or date calculation. `minutes` can be chained with other time functions. E.g. `hours` `days` `weeks` `months` `years` See example below

```javascript
// Return the date 10 minutes from now
Epok().minutes(10).from.now

// Return 10 minutes in milliseconds
Epok().minutes(10).to.milliseconds

// Return the date 2 days, 3 hours, and 24 minutes from now
Epok().days(2).hours(3).minutes(24).from.now
```

#### `hours`
Specify the number of hours to be used in the duration or date calculation. `hours` can be chained with other time functions. E.g. `minutes` `days` `weeks` `months` `years` See example below

```javascript
// Return the `Date` 10 hours from now
Epok().hours(10).from.now

// Return 10 hours in milliseconds
Epok().hours(10).to.milliseconds

// Return the `Date` 2 days, 3 hours, and 24 minutes from now
Epok().days(2).hours(3).minutes(24).from.now
```

#### `days`
Specify the number of days to be used in the duration or date calculation. `days` can be chained with other time functions. E.g. `minutes` `hours` `weeks` `months` `years` See example below

```javascript
// Return the `Date` 10 days from now
Epok().days(10).from.now

// Return 10 days in milliseconds
Epok().days(10).to.milliseconds

// Return the `Date` 2 days, 3 hours, and 24 minutes from now
Epok().days(2).hours(3).minutes(24).from.now
```

#### `weeks`
Specify the number of weeks to be used in the duration or date calculation. `weeks` can be chained with other time functions. E.g. `minutes` `hours` `days` `months` `years` See example below

```javascript
// Return the `Date` 10 weeks from now
Epok().weeks(10).from.now

// Return 10 weeks in milliseconds
Epok().weeks(10).to.milliseconds

// Return the `Date` 2 years, 3 months, and 22 weeks from now
Epok().years(2).months(3).weeks(10).from.now
```

#### `months`
Specify the number of months to be used in the duration or date calculation. `months` can be chained with other time functions. E.g. `minutes` `hours` `days` `weeks` `years` See example below

```javascript
// Return the `Date` 10 months from now
Epok().months(10).from.now

// Return 10 months in milliseconds
Epok().months(10).to.milliseconds

// Return the `Date` 2 years, 3 months, and 22 weeks from now
Epok().years(2).months(3).weeks(10).from.now
```

#### `years`
Specify the number of years to be used in the duration or date calculation. `years` can be chained with other time functions. E.g. `minutes` `hours` `days` `weeks` `years` See example below

```javascript
// Return the `Date` 10 years from now
Epok().years(10).from.now

// Return 10 years in milliseconds
Epok().years(10).to.milliseconds

// Return the `Date` 2 years, 3 months, and 22 weeks from now
Epok().years(2).months(3).weeks(10).from.now
```

#### `isLeapYear([year])`
Takes a year and returns `true` if it is a leap year and `false` otherwise

```javascript
// true
Epok().isLeapYear(2000)

// false
Epok().isLeapYear(2015)

// true
Epok().isLeapYear(2016)
```
