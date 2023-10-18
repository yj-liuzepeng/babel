const acorn = require("acorn");
const guangKeywordPlugin = require('./guangKeywordPlugin');

const Parser = acorn.Parser;

const newParser = Parser.extend(guangKeywordPlugin);

var program = 
`
    guang
    const a = 1
`;

const ast = newParser.parse(program);
const ast1 = Parser.parse(program);
console.log(ast);
console.log(ast1);
