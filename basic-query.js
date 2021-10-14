const bodybuilder = require('bodybuilder')
// const client = new Client({
//     node:'http://127.0.0.1:9200' ,
//     maxRetries: 5,
//     requestTimeout: 60000,
//     sniffOnStart: true
//   })
function getAllBlacklistedUsers(){
    const body=bodybuilder()
    .query('match','status',5)
    .build();
    // out put
   // {"query":{"match":{"status":5}}}
    console.log('%cindex.js line:12 JSON.stringify(body', 'color: #007acc;', JSON.stringify(body));
}
function getPaginatedResults(status=5,pageNumber,pageSize){
    const body=bodybuilder()
    .query('match','status',status)
    .from ((pageNumber-1)*pageSize)
    .size(pageSize)
    .build();
    console.log('%cindex.js line:20 JSON.stringify(body', 'color: #007acc;', JSON.stringify(body));
    //{"from":0,"size":10,"query":{"match":{"status":5}}}
}
function getSortedBlacklistedUsers(){
    const body=bodybuilder()
    .query('match','status',5)
    .sort('created_at','desc')
    .build();
    console.log('%cindex.js line:27 JSON.stringify(body', 'color: #007acc;', JSON.stringify(body));
    //{"sort":[{"created_at":{"order":"desc"}}],"query":{"match":{"status":5}}}
}
function getBlacklistedUsersByMobile(mobile){
    const body=bodybuilder()
    .query('match','status',5)
    .filter('term','mobile',mobile)
    .sort('created_at','desc')
    .build();
    console.log('%cindex.js line:35 JSON.stringify(body', 'color: #007acc;', JSON.stringify(body));
    //{"sort":[{"created_at":{"order":"desc"}}],"query":{"bool":{"filter":{"term":{"mobile":"+923499023398"}},"must":{"match":{"status":5}}}}}
}

  function run(){
    getAllBlacklistedUsers();
    getPaginatedResults(5,1,10);
    getSortedBlacklistedUsers();
    getBlacklistedUsersByMobile('+923499023398')

  }
run();
