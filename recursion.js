const print = (num)=>{
    if(num === 0)
      return;
    console.log(num);
    print(num-1);
}
print(10);