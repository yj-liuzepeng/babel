const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;

const source = `
    (async function() {
        console.log('hello guangguang');
    })();
`;

const ast = parser.parse(source);

traverse(ast, {
    StringLiteral(path) {
        path.node.value = path.node.value.replace('guangguang', 'dongdong')
    }
});

const { code, map} = generate(ast, {
    sourceMaps: true
});

console.log(code);
console.log(JSON.stringify(map));
