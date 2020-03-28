class _Lazyman {
    constructor(name) {
            this.tasks = []; //设置任务队列
            let task = (name => () => {
                console.log(`Hi! This is ${name} !`);
                this.next();
            })(name);
            this.tasks.push(task);
            //通过settimeout的方法，将执行函数放入下一个事件队列中，从而达到先注册事件，后执行的目的

            setTimeout(() => {
                this.next();
            }, 0);

        }
        //尾调用函数，一个任务执行完然后再调用下一个任务
    next() {
            let task = this.tasks.shift();
            task && task();
        }
        //相当于闭包
        // task(name){
        //      return ()=>{
        //         console.log(`Hi! This is ${name} !`);
        //         this.next();
        //      }
        // }

    eat(food) {
        let task = (food => () => {
            console.log(`Eat ${food}`);
            this.next();
        })(food);
        this.tasks.push(task);
        return this;
    }

    sleep(time) {
        let task = (time => () => {
            setTimeout(() => {
                console.log(`Wake up after ${time} s!`);
                this.next();
            }, time * 1000)
        })(time);
        this.tasks.push(task);
        return this;
    }

    sleepFirst(time) {
        let task = (time => () => {
            setTimeout(() => {
                console.log(`Wake up after ${time} s!`);
                this.next();
            }, time * 1000)
        })(time);
        this.tasks.unshift(task); //sleepFirst函数需要最先执行，所以我们需要在任务队列前面放入，然后再执行后面的任务
        return this;
    }

}

function LazyMan(name) {
    return new _Lazyman(name);
}
// LazyMan("Hank")
// 输出:Hi! This is Hank!
 
// LazyMan("Hank").sleep(10).eat("dinner")
// Hi! This is Hank!
// //等待10秒..
// Wake up after 10
// Eat dinner~
 
LazyMan("Hank").eat("dinner").eat("supper")
    // Hi This is Hank!
    // Eat dinner~
    // Eat supper~
     
    // LazyMan("Hank").sleepFirst(5).eat("supper")
    //等待5秒
    // Wake up after 5
    // Hi This is Hank!
    // Eat supper