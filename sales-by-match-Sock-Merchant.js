function sockMerchant(n, ar) {
  
    let dic = {}
   let count = 0
    for(let i = 0; i < ar.length; i++){
        if(!dic[ar[i]]){
            dic[ar[i]] = 1 
        }else{
            count++
            delete dic[ar[i]]
        }
     
    }
    console.log("hey")
    console.log(dic)
    console.log(count)
      return count
  }
  


function sockMerchant(n, ar) {
    var res = 0;
        ar.sort();
        for(let i=0; i<n;i++){
            if(ar[i] == ar[i+1]){
                i++;
                      res++;
               }
        }
    return res;
    }


function sockMerchant(n, ar) {
    var ones = {}, pairs = 0;
    for (var i = 0; i < n; i++) {
    if (ones.hasOwnProperty(ar[i])) {
        pairs++;
        delete ones[ar[i]];
    } else {
        ones[ar[i]] = 0;
    }
}
return pairs
}