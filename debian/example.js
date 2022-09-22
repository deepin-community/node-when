when = require('when');

/* a very simple promise */
when(2, x => x+3)
.then(result => console.log('The result of 2+3 is ' + result))

/* an erroneous promise */
when(0, function (x) { throw new Error('oups!')})
.then(result => console.log('The value would be:' + result))
.catch(err => console.log('Catched: ' + err))
