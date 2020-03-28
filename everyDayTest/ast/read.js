// const recast = require('recast');
// recast.run(function(ast, printSource) {
//     printSource(ast)
// })

// =============================ast节点遍历===============================================

// const recast = require('recast')

// recast.run(function(ast, printSource) {
//     recast.visit(ast, {
//         visitExpressionStatement: function(path) {
//             const node = path.node
//             printSource(node)
//             this.traverse(path)
//         }
//     })
// });


//=======================tnt-判断ast对象类型===========================
const recast = require("recast");
const TNT = recast.types.namedTypes

recast.run(function(ast, printSource) {
    recast.visit(ast, {
        visitExpressionStatement: function(path) {
            const node = path.value
                // 判断是否为ExpressionStatement，正确则输出一行字。
            if (TNT.ExpressionStatement.check(node)) {
                console.log('这是一个ExpressionStatement')
            }
            this.traverse(path);
        }
    });
});