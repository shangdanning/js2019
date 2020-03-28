// throw "Error2"; // 抛出了一个值为字符串的异常
// throw 42; // 抛出了一个值为整数42的异常
// throw true;

//=======================================================

// try {
//     let n = 60;
//     throw n; // 抛出一个数值异常
// } catch (e) {
//     console.log('222');
//     if (e <= 50) {
//         // 异常在 1-50 之间时，直接处理
//     } else {
//         // 异常无法处理，重新抛出
//         throw e;
//     }
// } finally {
//     console.log('111');
// }
// console.log("可以走到这里吗？")

//==============================================
// try {
//     throw "myException"; // generates an exception
// } catch (e) {
//     // statements to handle any exceptions
//     console.log(e); // pass exception object to error handler
// }

//==============================================

// function isValidJSON(text) {
//     try {
//         JSON.parse(text);
//         return true;
//     } catch {
//         return false;
//     }
// }
// console.log(isValidJSON({
//     a: "111"
// }));

//===========================================
try {
    try {
        throw new Error("oops");
    } catch (ex) {
        console.error("inner", ex.message);
        throw ex;
        // return;
    } finally {
        console.log("finally");
        // return;
    }
} catch (ex) {
    console.error("outer", ex.message);
}