var sum=0;
var click=0;
var product=1;
var quo=1;
function add(x)
{
  click= click+ 1;
  sum = sum + x;
  print();
}
function multi(x)
{
  click=click+1;
  product=product*x;
  print2();


}
function divi(x)
{
  click=click+1;
  quo=x/quo;

  print3()
}
function settozero()
{
  sum = 0;
  click=0;
  product=1;
  quo=1;
  document.getElementById("output").innerHTML=  " ";
  document.getElementById("output2").innerHTML=" ";
  document.getElementById("output3").innerHTML=" ";


}
function print()
{


document.getElementById("output").innerHTML="sum:" +sum +"<br>"+"numers clicked: "+click;

}
function print2()
{
  document.getElementById("output2").innerHTML="product: " + product+"<br>"+"numers clicked: "+click;

}

function print3()
{
  document.getElementById("output3").innerHTML= "qoution:" + quo+"<br>"+"numbers clicked:"+click;

}
