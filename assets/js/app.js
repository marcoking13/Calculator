var total = 0;
var newValue = "";
$(".bubble").on("click",(event)=>{

  var num = event.target.attributes.number.value;
  if(num == "="){
      total = eval(newValue);
       $(".total").text(total).addClass("answer");
         return newValue= total;
  }
  if(num=="c"){
    newValue="";
     total =0;
     return  $(".total").text(0).removeClass("answer");
  }
  newValue+=num;
  $(".total").text(newValue);

});
