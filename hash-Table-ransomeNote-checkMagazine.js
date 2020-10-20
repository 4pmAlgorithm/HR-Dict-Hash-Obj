// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {
    //ive got a lovely bunch of coconuts
    //ive got some coconuts 
    //no
            let magazineDict = {};    

            for(let i = 0 ; i < magazine.length; i++){
            
                if(!magazineDict[magazine[i]]){
                    magazineDict[magazine[i]] = 1
                }else{
                    magazineDict[magazine[i]] = magazineDict[magazine[i]] +1
                    console.log(":::::m", magazineDict)
                }
             }
            
            for(let i = 0; i < note.length; i++){
                if(note[i] in magazineDict){ //!!! if the key is in the magazine 
                    if( magazineDict[note[i]] > 0 ){
                        magazineDict[note[i]] =
                        magazineDict[note[i]] -1
                        console.log(":::::n", magazineDict)
                    }else{
                        return "No" //if magazineDic[note[i]] < 0 also no
                        break; 
                    }
            }else{
                return "No" //if note[i] is not in the magazineDict
                break;
            }
        }

    return "Yes"
}

console.log(checkMagazine("ive got a lovely bunch of coconuts", "ive got some coconuts"))