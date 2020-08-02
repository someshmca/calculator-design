

var calcId;
var lis;
var arr;
var shuffledArray;
var sortedArray;
window.onload=function(){
    callCalc();
}
function callCalc(){
  calcId=document.getElementById("calcId");
  lis='';
  arr=[
    {
      colorCode: "#6D95A5",
      value: 1
    },
    {
      colorCode: "#278AA7",
      value: 2
    },
    {
      colorCode: "#2E444D",
      value: 3
    },
    {
      colorCode: "#278AA7",
      value: 4
    },
    {
      colorCode: "#2E444D",
      value: 5
    },
    {
      colorCode: "#BFBFBF",
      value: 6
    },
    {
      colorCode: "#BFBFBF",
      value: 7
    },
    {
      colorCode: "#6D95A5",      
      value: 8
    },
    {
      colorCode: "#2E444D",
      value: 9
    }
  ];
  console.log(" arr 1 "+arr[1].colorCode);
  arr.forEach(obj => {
    lis+="<li style='background:"+obj.colorCode+";'>"+obj.value+"</li>";
  });
  calcId.innerHTML=lis;
  
}
function shuffle() {
  lis='';
  shuffledArray = arr.sort(() => Math.random() - 0.5);
  shuffledArray.forEach(obj => {
    lis+="<li style='background:"+obj.colorCode+";'>"+obj.value+"</li>";
  });
  calcId.innerHTML=lis;
}
function sortArray() {
  lis='';
  sortedArray = arr.sort((a, b) => {
    return a.value-b.value;
  });
  console.log("sortedArray length : "+sortedArray.length);
  console.log("sortedArray one  : "+sortedArray[0].value);
  sortedArray.forEach(obj => {
    lis+="<li style='background:"+obj.colorCode+";'>"+obj.value+"</li>";
  });

  calcId.innerHTML=lis;
  console.log(calcId.innerHTML)
}