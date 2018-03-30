// http://marionebl.github.io/commitlint/#/concepts-commit-conventions

// type(scope?): subject
// body?
// footer?

// Level [0..2]: 0 disables the rule. For 1 it will be considered a warning for 2 an error.
// Applicable always|never: never inverts the rule.
// Value: value to use for this rule.

module.exports = {
  // parserPreset: './parser-preset',
  rules: {
    // Header
    'header-min-length': [2, 'always', 6],
    'header-max-length': [2, 'always', 120],

    // Body section
    'body-leading-blank': [2, 'never'],
    'body-min-length': [2, 'always', 30],
    'body-max-length': [2, 'always', 300],
    
    // Footer
    'footer-leading-blank': [2, 'never'],
    'footer-min-length': [2, 'always', 100],
    'footer-max-length': [2, 'always', 500],

    // Subject - TicketInfo
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never'],

    // Type
		'type-case': [2, 'always', 'lower-case'],
		'type-empty': [2, 'never'],
		'type-enum': [
			2,
			'always',
			[
				// 🎨 :art: when improving the format/structure of the code
				'art',

				// 🐎 :racehorse: when improving performance
				'racehorse',
				
				// 🚱 :non-potable_water: when plugging memory leaks
				'non-potable_water',
				
				// 📝 :memo: when writing docs
				'memo',
				
				// 🐧 :penguin: when fixing something on Linux
				'penguin',
				
				// 🍎 :apple: when fixing something on Mac OS
				'apple',
				
				// 🏁 :checkered_flag: when fixing something on Windows
				'checkered_flag',
				
				// 🐛 :bug: when fixing a bug
				'bug',
				
				// 🔥 :fire: when removing code or files
        'fire',

        // 💚 :green_heart: when fixing the CI build
        'green_heart',

        // ✅ :white_check_mark: when adding tests
        'white_check_mark',

        // 🔒 :lock: when dealing with security
        'lock',

        // ⬆️ :arrow_up: when upgrading dependencies
        'arrow_up',

        // :arrow_down: when downgrading dependencies
        'arrow_down',

        // 👕 :shirt: when removing linter warnings
        'shirt'
			]
		]
  }
}; 
