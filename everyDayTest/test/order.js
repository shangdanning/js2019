let listData = [{
            centerName: "营销平台中心",
            responseLevel: 11
        },
        {
            centerName: "智慧服务数字科技中心",
            responseLevel: 12
        },
        {
            centerName: "营销平台中心",
            responseLevel: 2
        },
        {
            centerName: "智慧服务数字科技中心",
            responseLevel: 1
        }
    ],
    optionData = [{
            centerName: "营销平台中心"
        },
        {
            centerName: "商业业务数字科技中心"
        },
        {
            centerName: "智慧服务数字科技中心"
        }
    ];
let tempOption = optionData.map((item) => {
        return item.centerName;
    })
    //[ '营销平台中心', '商业业务数字科技中心', '智慧服务数字科技中心' ]
    // console.log(tempOption);
var templistOne = [];
let temp = tempOption.forEach((orderName) => {
        listData.forEach((item) => {
            if (orderName == item.centerName) {
                templistOne.push(item);
            }
        })
    })
    //[ { centerName: '营销平台中心', responseLevel: 11 },
    // { centerName: '营销平台中心', responseLevel: 2 },
    // { centerName: '智慧服务数字科技中心', responseLevel: 12 },
    // { centerName: '智慧服务数字科技中心', responseLevel: 1 } ]
    // console.log(templistOne);
templistOne.sort(function(a, b) {
    if (a.centerName === b.centerName)
        return a.responseLevel - b.responseLevel;
})
console.log(templistOne);
// let resultData = [{
//         centerName: "营销平台中心",
//         responseLevel: 2
//     }, {
//         centerName: "营销平台中心",
//         responseLevel: 11
//     },
//     {
//         centerName: "智慧服务数字科技中心",
//         responseLevel: 1
//     }, {
//         centerName: "智慧服务数字科技中心",
//         responseLevel: 12
//     },
// ]