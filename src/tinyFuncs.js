/**
 * tinyFuncs module.
 *
 * @module src/tinyFuncs
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author Pauliina Raitaniemi <pr222ja@student.lnu.se>
 * @version 1.0.0
 */

// ------------------------------------------------------------------------------
//  Public interface
// ------------------------------------------------------------------------------

/**
 * Returns the sum of two local variables.
 *
 * @returns {number} The result of an arithmetic operation.
 */
export function add () {
  const a = 21
  let b = '21'
  b = Number.parseInt(b)
  return a + b
}

/**
 * Returns a string combined of multiple local variables.
 *
 * @returns {string} The string 'I'm going to learn how to program in 9 weeks.'.
 */
export function concat () {
  const message = 'I\'m going to learn how to program in'
  const time = 9
  const weeks = 'weeks.'
  return (`${message} ${time} ${weeks}`)
}

/**
 * Returns the sum of two local variables, rounded to the nearest integer.
 *
 * @returns {number} The sum of two variables rounded to the nearest integer.
 */
export function round () {
  const firstNumber = 12.24
  const secondNumber = 29.27
  return Math.round(firstNumber + secondNumber)
}

/**
 * Returns a string with the sequence of odd numbers from one up to the value of the parameter.
 *
 * @param {number} max - An integer greater than zero.
 * @returns {string} A string with comma separated odd values.
 */
export function getOddNumbers (max) {
  // Make result into a string value
  let result = ''

  for (let i = 1; i <= max; i += 2) {
    if (result.length > 0) {
      result += ', '
    }
    result += i
  }
  return result
}

/**
 * Returns a string with a greeting message according to the time of day.
 *
 * If hour is between 8 and 12 the message should be "Good morning!".
 * If hour is between 12 and 18 the message should be "Good afternoon!".
 * If hour is between 18 and 24 the message should be "Good evening!".
 * If hour is between 24 and 8 the message should be "Good night!".
 *
 * @returns {string} A greeting according to the time of day.
 */
export function greetings () {
  let hour = new Date().getHours()
  if (hour < 8) {
    hour = 'Good night!'
  } else if (hour < 12) {
    hour = 'Good morning!'
  } else if (hour < 18) {
    hour = 'Good afternoon!'
  } else if (hour < 24) {
    hour = 'Good evening!'
  }
  return hour
}

/**
 * Returns a string where all hyphens (-) is replaced by a space.
 *
 * @param {string} str - The string being searched and replaced on.
 * @returns {string} A new string with all matches of a hyphen replaced by a space.
 */
export function replaceHyphensFor (str) {
  let result = ''

  for (let i = 0; i < str.length; i++) {
    const theCheckedCharacter = str.charAt(i)
    if (theCheckedCharacter === '-') {
      result += ' '
    } else {
      result += theCheckedCharacter
    }
  }

  return result
}

/**
 * Returns a string where all hyphens (-) is replaced by a space.
 *
 * @param {string} str - The string being searched and replaced on.
 * @returns {string} A new string with all matches of a hyphen replaced by a space.
 */
export function replaceHyphensWhile (str) {
  let result = ''
  let i = 0

  while (i < str.length) {
    const theCheckedCharacter = str.charAt(i)
    if (theCheckedCharacter === '-') {
      result += ' '
    } else {
      result += theCheckedCharacter
    }
    i++
  }

  return result
}

/**
 * Returns a string containing a few number sequences.
 *
 * @returns {string} A string '11-12-13, 21-22-23, 31-32-33, 41-42-43, 51-52-53'.
 */
export function getNumberSequence() {
  const groupingsMaxValue = 5
  const numbersMaxValue = 3

  let result = ''

  for (let grouping = 1; grouping <= groupingsMaxValue; grouping++) {
    for (let theNumber = 1; theNumber <= numbersMaxValue; theNumber++) {
      // Result as a string
      result += `${grouping}${theNumber}`
      // Add '-' but not to the last number
      if (theNumber !== numbersMaxValue) {
        result += '-'
      }
    }

    if (grouping < groupingsMaxValue) {
      result += ', '
    }
  }

  return result
}
