let query=$(".search-Btn");
let val=$(".inputval");
query.on("click",function(){
    let url='https://www.google.com/search?q='+val.val();
    window.open(url,'_self');

})