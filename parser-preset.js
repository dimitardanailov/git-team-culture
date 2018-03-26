module.exports = {
	parserOpts: {
		headerPattern: /^(\w*)\((\w*)\)-(\w*)\s(.*)$/,
		headerCorrespondence: ['type', 'scope', 'ticket', 'subject'],

		bodyPattern: /^(\w*)\((\w*)\)-(\w*)\s(.*)$/,
		bodyCorrespondence: ['type', 'scope', 'ticket', 'subject'],
	}
};
