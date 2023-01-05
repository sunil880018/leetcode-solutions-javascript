const givenString = 'hellomynameissunil';
const map = {};
for(let i=0;i<givenString.length;i++){
    if(!map[givenString[i]])
      map[givenString[i]]=1;
    else
      map[givenString[i]]++;
}
for(const key in map){
  console.log(key , '->',map[key]);
}
