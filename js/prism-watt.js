Prism.languages.watt = {
    'comment': /#.*$/m,
    'string': {
        pattern: /(["'])(?:(?=(\\?))\2.)*?\1/,
        greedy: true
    },
    'keyword': /\b(import|type|fun|unit|return|for|in|to|new|from|while|match|case|default)\b/,
    'boolean': /\b(true|false)\b/,
    'number': /\b\d+(\.\d+)?\b/,
    'operator': /[-+*\/=<>!:]+/,
    'punctuation': /[{}[\];(),.]/,
    'variable': /\b[a-zA-Z_][a-zA-Z0-9_]*\b/,
};
