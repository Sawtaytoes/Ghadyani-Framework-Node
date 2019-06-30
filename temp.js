const { catchError } = require('rxjs/operators')
const { concat, of, throwError } = require('rxjs')

try {
	const result = concat(of('works'), throwError(new Error('oops!')))

	result
	.pipe(
		catchError(() => of('still going'))
	)
	.subscribe(console.log, console.error)
}
catch(e) {
	console.log('caught', e)
}

console.log('yo')
