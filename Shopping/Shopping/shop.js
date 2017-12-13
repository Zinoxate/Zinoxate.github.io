


$(function(){
    //SCOPE !!! !!! !!!
    //GLOBAL vs. LOCAL VARIABLES
    //PROPER WAY FOR GLOBAL
    var number1;
    var number2;
    var number3;
    var number4;

    var totaldrone = 892.98;
    var totallaptop = 819.00;
    var totalusb = 8.99;
    var totalprinter = 2500.00;
    
    
    //MATHS
    $(".total_cost").click(function(){
    
    //INPUT
    
    number1 = parseInt($("#num1").val());
    number2 = parseInt($("#num2").val());
    number3 = parseInt($("#num3").val());
    number4 = parseInt($("#num4").val());
       
    //CALCULATE
    var total = number1 + totalusb
    var totalt = number2 + totallaptop
    var totalth = number3 + totaldrone
    var totalf = number4 + totalprinter

     //OUTPUT
       $(".total").css("font-size", "32px");
       $(".total").html(answer);
       
       $(".totalt").css("font-size", "32px");
       $(".totalt").html(answer);
       
       $(".totalth").css("font-size", "32px");
       $(".totalth").html(answer);
       
       $(".totalf").css("font-size", "32px");
       $(".totalf").html(answer);
        
    });
    //MATH END
    
    
    
    //SHOW AND HIDING BUTTONS

    $(document).ready(function(){
        $(".btn-danger").click(function(){
            $(".page_filler").toggle(2500);
        })
    });

    $(document).ready(function(){
        $(".btn-danger").click(function(){
            $(".page_fillerTwo").toggle(2500);
        })
    });

    $(document).ready(function(){
        $(".descO").click(function(){
            $(".ItemOne_Description").toggle(2500);
        })
    });

    $(document).ready(function(){
        $(".desctw").click(function(){
            $(".ItemTwo_Description").toggle(2500);
        })
    });

    $(document).ready(function(){
        $(".descth").click(function(){
            $(".ItemThree_Description").toggle(2500);
        })
    });

    $(document).ready(function(){
        $(".descf").click(function(){
            $(".ItemFour_Description").toggle(2500);
        })
    });

    //SHOW AND HIDING END







})