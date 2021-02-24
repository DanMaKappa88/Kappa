function addBinary(a,b) {
    let seged= a+b;
      let seged2=2;
      let segedT=[];
      while (seged >= 1){
        if(seged%seged2===0){
          segedT.push('1');
        }
      else {
        segedT.push('0');
            } 
        
        if(seged===1 ){
         segedT.push('1');
        return segedT;
             }
      if (seged<0){
        segedT.join('');
        return segedT;
      }
      seged/=seged2;
      seged2*=2;
      segedT.join('');
        }
    return segedT;
    }

  console.log(addBinary(1,2));