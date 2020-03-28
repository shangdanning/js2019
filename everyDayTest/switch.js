//如果你忘记添加break，那么代码将会从值所匹配的 case 语句开始运行，然后持续执行下一个 case 语句而不论值是否匹配

// var foo = 0;
// switch (foo) {
//     case -1:
//         console.log('negative 1');
//         break;
//     case 0: // foo 的值为 0 所以匹配这里所以这一块会运行
//         console.log(0);
//         // 注意：那个没写的 break 原本在这儿
//     case 1: // 'case 0:' 里没有 break 语句所以这个 case 也会运行
//         console.log(1);
//         break; // 遇到了这个 break 所以不会再继续进入 'case 2:' 了
//     case 2:
//         console.log(2);
//         break;
//     default:
//         console.log('default');
// }

//=======================switch模拟多个if语句================================

// var a = 100;
// var b = NaN;
// switch (true) {
//     case isNaN(a) || isNaN(b):
//         console.log('NaNNaN');
//         break;
//     case a === b:
//         console.log(0);
//         break;
//     case a < b:
//         console.log(-1);
//         break;
//     default:
//         console.log(1);
// }

var Animal = 'Dinosaur';
switch (Animal) {
    case 'Cow':
    case 'Giraffe':
    case 'Dog':
    case 'Pig':
        console.log('This animal will go on Noah\'s Ark.');
        break;
    case 'Dinosaur':
    default:
        console.log('This animal will not.');
}