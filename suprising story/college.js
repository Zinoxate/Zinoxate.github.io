  $(function(){
  
    question1();
    
});

//QUESTION ONE (1)

var question1 = function(){
    
    //UPDATE GRAPHICS
    
    $("div.narrative, span.q1").html("Are you ready for the love to enter your heart?")
    $(".q1").show();
    //.HTML OVERRIGHTS
    $(".buttons").html("<button class='btn btn-primary q1-yes'> YES </button>");
    //.APPEND DOESNT
    $(".buttons").append("<button class='btn btn-primary q1-no'> NO </button>");
    
    //MAKE IT WORK
    
    $(".q1-yes").click(function(){
      
      //Update Sidebar
      $(".q1-choice").html("Yes").show();
      //Run Question 2
      question2();
    });
   $(".q1-no").click(function(){
       
      //Update Sidebar
      $(".q1-choice").html("NO").show();
      //Buh bye
      $(".narrative").html("Just refresh the page when you're ready.");
      //make buttons hide
      $(".buttons").hide();
    });
};

//QUESTION TWO (2)

var question2 = function(){
    
    //UPDATE GRAPHICS
    
    $("div.narrative, span.q2").html("The halls are filled, crowded even. You manage to get to your locker, using your code and unlocking your locker. Opening it up and you see a note fall down and land on the bottom.");
    $(".q2").show();
    $(".buttons").html("<button class='btn btn-primary q2-open'> Open The Letter </button>");
    $(".buttons").append("<button class='btn btn-primary q2-leave'> Leave The Letter </button>");
    
    //MAKE IT WORK
    
    $(".q2-open").click(function(){
       
       //Update Sidebar
        $(".q2-choice").html("Opened.").show();
        //Run Question 3
        question3("opened");
    });
    $(".q2-leave").click(function(){
        
        //Update sidebar
        $(".q2-choice").html("Left.").show();
        //Run Question 4
        question4("left");
    });
    
};

//QUESTION THREE (3)

var question3 = function(){
    
    //UPDATE GRAPHICS
    $("div.narrative, span.q3").html("You open the letter. The handwriting seems really neat and beautiful. You place it in your bag and grab your supplies, rushing to your class to finish reading the letter. You finally take a seat and begin to read the letter, It tells you to meet this girl after 4th period.")
    $(".images").html("<img src='transparent letter.jfif'>")
    $(".q3").show();    
    $(".buttons").html("<button class='btn btn-primary q3-meet'> Yes, Meet her. </button>")
    $(".buttons").append("<button class='btn btn-primary q3-dont'> No, Dont meet her. </button>")
    
    //MAKE IT WORK
    
    $(".q3-meet").click(function(){
       
       //Update sidebar
       $(".q3-choice").html("Meeting.").show();
       //Run Question 5
       question5("meeting");
    });
    $(".q3-dont").click(function(){
       
       //Update sidebar
       $(".q3-choice").html("Not Meeting.").show();
        //Run Question 6
        question6("dont");
    });
};

//QUESTION FOUR (4)

var question4 = function(){
  
  //UPDATE GRAPHICS
  $("div.narrative, span.q4").html("You let the letter drop onto the ground, not really caring about that letter that was placed into your locker. You grab your supplies then suddenly bump into someone.")
  $(".q4").show();
  $(".buttons").html("<button class='btn btn-primary q4-sorry'> Say sorry. </button>")
  $(".buttons").append("<button class='btn btn-primary q4-ignore'> Ignore it. </button>")
    
    //MAKE IT WORK
    
    $(".q4-sorry").click(function(){
       
       //Update sidebar
       $(".q4-choice").html("Sorry").show();
       //Run Question 7
       question7();
    });
    $(".q4-ignore").click(function(){
       
       //Update sidebar
       $(".q4-choice").html("Ignoring").show();
       //Run Question 8
       question8();
    });
    
};

//QUESTION FIVE (5)

var question5 = function(){
  
  //UPDATE GRAPHICS
  $("div.narrative,span.q5").html("As the day progresses, your english period is about to be finished. You take out the note and read it. It says to meet her near Mr.Jone's classrom. You glue this information into your head, ready to set off and meet this stranger for some odd reason. The bell rings and you exit the classroom. You want to take the long way, because you just want to see what this person looks like. Then again you want to take the short-way, so you can find out whats going on.")
  $(".q5").show();
  $(".buttons").html("<button class='btn btn-primary q5-long'> I'll take the long way. </button>")
  $(".buttons").append("<button class='btn btn-primary q5-short'> I'll take the short way. </button>")
  
  //MAKE IT WORK
    
    $(".q5-long").click(function(){
       
       //Update sidebar
        $(".q5-choice").html("Long way").show();
        //Run Question 9
        question9();
    });
    $(".q5-short").click(function(){
       
       //Update sidebar
       $(".q5-choice").html("Short way").show();
       //Run Question 10
       question10(); 
    });
    
};

//QUESTION SIX (6)

var question6 = function(){
    
    //UPDATE THE GRAPHICS
    $("div.narrative, span.q6").html("Your concious says to not meet the stranger. The bell rings and you gather your stuff, taking your time.Then suddenly, a girl stops by you, wanting to see the note.")
    $(".q6").show();
    $(".buttons").html("<button class= 'btn btn-primary q6-who'> Who are you? </button>")
    $(".buttons").append("<button class= 'btn btn-primary q6-why'> Why do you want it? </button>")
    
    //MAKE IT WORK
    
    $(".q6-who").click(function(){
        
        //Update sidebar
        $(".q6-choice").html("Who").show();
        //Run Question 11
        question11();
    });
    $(".q6-why").click(function(){
       
       //Update sidebar
        $(".q6-choice").html("Why").show();
        //Run Question 12
        question12();
    });
};

//QUESTION SEVEN (7)

var question7 = function(){
  
//UPDATE GRAPHICS
  $("div.narrative, span.q7").html("You looked up instantly and said sorry to the stranger. You noticed it was a really cute girl. She points at that letter on the ground, saying that you dropped something..")
  $(".q7").show();
  $(".buttons").html("<button class='btn btn-primary q7-grab'> grab the letter </button>")
  $(".buttons").append("<button class='btn btn-primary q7-ignore'> Ignore the statement </button>")
    
    //MAKE IT WORK
    
    $(".q7-grab").click(function(){
       
       //Update sidebar
       $(".q7-choice").html("Grabbed").show();
       //Run Question 13
       question13();
    });
    $(".q7-ignore").click(function(){
       
       //Update sidebar
       $(".q7-choice").html("Ignored").show();
       //Run Question 14
       question14();
    });
    
};

//QUESTION EIGHT (8)


