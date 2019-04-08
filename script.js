var Name=[];
var Price=[];

$(".Additem").click(function(){
    var Item= $(".Pn").val();
    Name.push(Item);
    console.log(Name);
    $(".number-of-items").text(Name.length);
    $(".product-name").append("<p>"+Item+"</p>");
    var Item= $(".Pp").val();
    Price.push(Item);
    console.log(Price);
    $(".product-price").append("<p>"+Item+"</p>");
});

$(".Buyitem").click(function(){
       
});