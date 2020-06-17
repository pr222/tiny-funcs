/**
 * Tests for the statistics module.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @version 1.0.0
 */

import chai from 'chai'
import * as tinyFuncs from '../src/tinyFuncs.js'

const expect = chai.expect

// ------------------------------------------------------------------------------
//  add
// ------------------------------------------------------------------------------
describe('add', () => {
  it('add() should return 42', () => {
    expect(tinyFuncs.add()).to.eql(42)
  })
})

// ------------------------------------------------------------------------------
//  concat
// ------------------------------------------------------------------------------
describe('concat', () => {
  it('concat() should return \'I\'m going to learn how to program in 9 weeks.\'', () => {
    expect(tinyFuncs.concat()).to.eql('I\'m going to learn how to program in 9 weeks.')
  })
})

// ------------------------------------------------------------------------------
//  round
// ------------------------------------------------------------------------------
describe('round', () => {
  it('round() should return 42', () => {
    expect(tinyFuncs.round()).to.eql(42)
  })
})

// ------------------------------------------------------------------------------
//  getOddNumbers
// ------------------------------------------------------------------------------
describe('getOddNumbers', () => {
  it('getOddNumbers(10) should return 1, 3, 5, 7, 9', () => {
    expect(tinyFuncs.getOddNumbers(10)).to.eql('1, 3, 5, 7, 9')
  })

  it('getOddNumbers(1) should return 1', () => {
    expect(tinyFuncs.getOddNumbers(1)).to.eql('1')
  })

  it('getOddNumbers(0) should return \'\'', () => {
    expect(tinyFuncs.getOddNumbers(0)).to.eql('')
  })

  it('getOddNumbers(25) should return \'1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25,\'', () => {
    expect(tinyFuncs.getOddNumbers(25)).to.eql('1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25')
  })
})

// ------------------------------------------------------------------------------
//  greetings
// ------------------------------------------------------------------------------
describe('greetings', () => {
  it('greetings() should return the right message', () => {
    const hour = new Date().getHours()
    const result = tinyFuncs.greetings()
    if (hour >= 8 && hour < 12) {
      expect(result).to.eql('Good morning!')
    } else if (hour >= 12 && hour < 18) {
      expect(result).to.eql('Good afternoon!')
    } else if (hour >= 18 && hour < 24) {
      expect(result).to.eql('Good evening!')
    } else {
      expect(result).to.eql('Good night!')
    }
  })
})

// ------------------------------------------------------------------------------
//  replaceHyphensFor
// ------------------------------------------------------------------------------
describe('replaceHyphensFor', () => {
  it('replaceHyphensFor(\'Hello-World!\') should return \'Hello World!\'', () => {
    expect(tinyFuncs.replaceHyphensFor('Hello-World!')).to.eql('Hello World!')
  })

  it('replaceHyphensFor(\'Hello-JavaScript-World!\') should return \'Hello Javascript World!\'', () => {
    expect(tinyFuncs.replaceHyphensFor('Hello-JavaScript-World!')).to.eql('Hello JavaScript World!')
  })

  it('replaceHyphensFor(\'Hello World!\') should return \'Hello World!\'', () => {
    expect(tinyFuncs.replaceHyphensFor('Hello World!')).to.eql('Hello World!')
  })
})

// ------------------------------------------------------------------------------
//  replaceHyphensWhile
// ------------------------------------------------------------------------------
describe('replaceHyphensWhile', () => {
  it('replaceHyphensWhile(\'Hello-World!\') should return \'Hello World!\'', () => {
    expect(tinyFuncs.replaceHyphensWhile('Hello-World!')).to.eql('Hello World!')
  })

  it('replaceHyphensWhile(\'Hello-JavaScript-World!\') should return \'Hello Javascript World!\'', () => {
    expect(tinyFuncs.replaceHyphensWhile('Hello-JavaScript-World!')).to.eql('Hello JavaScript World!')
  })

  it('replaceHyphensWhile(\'Hello World!\') should return \'Hello World!\'', () => {
    expect(tinyFuncs.replaceHyphensWhile('Hello World!')).to.eql('Hello World!')
  })

  it('replaceHyphensWhile(\'-Hello-World-!-\') should return \' Hello World ! \'', () => {
    expect(tinyFuncs.replaceHyphensWhile('-Hello-World-!-')).to.eql(' Hello World ! ')
  })
})

// ------------------------------------------------------------------------------
//  firstThree
// ------------------------------------------------------------------------------
describe('firstThree', () => {
  it('firstThree() should return \'11-12-13, 21-22-23, 31-32-33, 41-42-43, 51-52-53\'', () => {
    expect(tinyFuncs.getNumberSequence()).to.eql('11-12-13, 21-22-23, 31-32-33, 41-42-43, 51-52-53')
  })
})
