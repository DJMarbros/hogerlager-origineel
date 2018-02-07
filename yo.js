
var pen;



function start(){ 
  
    pen = document.getElementById("backgroundtable").getContext("2d"); 
    pen.beginPath();
     pen.fillStyle="black";
    
   
    pen.fill();
}

function reageerOpTekenFiguur1(){
 
    
  var dobbele = Math.floor(Math.random() * 6) + 1;;
  var dobbel2 = Math.floor(Math.random() * 6) + 1;;
  var dobbel3 = Math.floor(Math.random() * 6) + 1;; 
  
  
  
     pen = document.getElementById("backgroundtable").getContext("2d"); 
    pen.beginPath();
     pen.fillStyle="black";
     
    
    
    console.log(dobbele);
   
   pen = document.getElementById("backgroundtable").getContext("2d"); 
    pen.beginPath();
     pen.fillStyle="black";
      pen.moveTo(75,49);
    pen.arc(104.2,38,2,0,2*Math.PI);
    
    pen.fillStyle="white";
    
    pen.fillRect(70,40,18,15);
    pen.fillRect(95,30,18,15);
    pen.fillRect(80,60,18,15);
     
     
    pen.fillRect(210,40,18,15);
    pen.fillRect(190,30,18,15);
    pen.fillRect(190,60,18,15);
/*-------------------------------------------------------------------------------------*/

    /*dobbelstenen gooien 1*/
    
    if (dobbele==1){
        pen = document.getElementById("backgroundtable").getContext("2d"); 
    pen.beginPath();
    pen.fillStyle="black";
    
     pen.fillStyle="black";
    pen.moveTo(75,49);
    pen.arc(104.2,38,2,0,2*Math.PI); 
    pen.fill();
    }
    
    if (dobbel2==1){
         pen = document.getElementById("backgroundtable").getContext("2d"); 
    pen.beginPath();
    pen.fillStyle="black";
    pen.moveTo(75,49);
    pen.arc(79.2,48,2,0,2*Math.PI); 
    pen.fill();
    }
    
    if (dobbel3==1){
         pen = document.getElementById("backgroundtable").getContext("2d"); 
    pen.beginPath();
    pen.fillStyle="black";
    pen.moveTo(215,34);
    pen.arc(89,67.5,2,0,2*Math.PI);
pen.fill();
}
/*-------------------------------------------------------------------------------------*/

    /*dobbelstenen gooien 2*/
     
    if (dobbele==2)
    {
        
     pen = document.getElementById("backgroundtable").getContext("2d"); 
    pen.beginPath();
     pen.fillStyle="black";
    pen.moveTo(85,44);
    pen.arc(99,33,2,0,2*Math.PI); 
    pen.moveTo(190,49);
    pen.arc(110,42.5,2,0,2*Math.PI);
    console.log("werkt");
     pen.fill();
   
    }
    
    if (dobbel2==2){
         pen = document.getElementById("backgroundtable").getContext("2d"); 
    pen.beginPath();
    pen.fillStyle="black";
        pen.moveTo(85,44);
    pen.arc(74,43,2,0,2*Math.PI); 
    pen.moveTo(190,49);
    pen.arc(85,52.5,2,0,2*Math.PI);
    pen.fill();
    }
    
    if (dobbel3==2){
         pen = document.getElementById("backgroundtable").getContext("2d"); 
    pen.beginPath();
    pen.fillStyle="black";
     pen.moveTo(85,44);
    pen.arc(84,63,2,0,2*Math.PI);
    pen.moveTo(190,49);
    pen.arc(94,72.5,2,0,2*Math.PI);   
    pen.fill();
    }
/*-------------------------------------------------------------------------------------*/
    /*dobbelstenen gooien 3*/
    if (dobbele==3){
         pen = document.getElementById("backgroundtable").getContext("2d"); 
    pen.beginPath();
    pen.fillStyle="black";
      pen.moveTo(85,44);
    pen.arc(99,33,2,0,2*Math.PI);
    pen.moveTo(75,49);
    pen.arc(104.2,38,2,0,2*Math.PI); 
    pen.moveTo(190,49);
    pen.arc(110,42.5,2,0,2*Math.PI);  
    pen.fill();
    }
    
    if (dobbel2==3){
         pen = document.getElementById("backgroundtable").getContext("2d"); 
    pen.beginPath();
    pen.fillStyle="black";
        pen.moveTo(85,44);
    pen.arc(74,43,2,0,2*Math.PI);
    pen.moveTo(75,49);
    pen.arc(79.2,48,2,0,2*Math.PI);  
    pen.moveTo(190,49);
    pen.arc(85,52.5,2,0,2*Math.PI);
    pen.fill();
        
    }
    
    if (dobbel3==3){
         pen = document.getElementById("backgroundtable").getContext("2d"); 
    pen.beginPath();
    pen.fillStyle="black";
       pen.moveTo(85,44);
    pen.arc(84,63,2,0,2*Math.PI);
    pen.moveTo(215,34);
    pen.arc(89,67.5,2,0,2*Math.PI); 
    pen.moveTo(190,49);
    pen.arc(94,72.5,2,0,2*Math.PI); 
    pen.fill();
    }
/*-------------------------------------------------------------------------------------*/
    /*dobbelstenen gooien 4*/
    if (dobbele==4){
         pen = document.getElementById("backgroundtable").getContext("2d"); 
    pen.beginPath();
    pen.fillStyle="black";
        pen.moveTo(85,44);
    pen.arc(99,33,2,0,2*Math.PI);
    pen.moveTo(85,49);
    pen.arc(99,42.5,2,0,2*Math.PI);
     
    pen.moveTo(110,44);
    pen.arc(110,33,2,0,2*Math.PI); 
    pen.moveTo(190,49);
    pen.arc(110,42.5,2,0,2*Math.PI);
    pen.fill();
        
    }
    
    if (dobbel2==4){
         pen = document.getElementById("backgroundtable").getContext("2d"); 
    pen.beginPath();
    pen.fillStyle="black";
        pen.moveTo(85,44);
    pen.arc(74,43,2,0,2*Math.PI);
    pen.moveTo(85,49);
    pen.arc(74,52.5,2,0,2*Math.PI);
    pen.fill();
     
    pen.moveTo(110,44);
    pen.arc(85,43,2,0,2*Math.PI); 
    pen.moveTo(190,49);
    pen.arc(85,52.5,2,0,2*Math.PI);
    pen.fill();
        
    }
    
    if (dobbel3==4){
         pen = document.getElementById("backgroundtable").getContext("2d"); 
    pen.beginPath();
    pen.fillStyle="black";
        pen.moveTo(85,44);
    pen.arc(84,63,2,0,2*Math.PI);
    pen.moveTo(85,49);
    pen.arc(84,72.5,2,0,2*Math.PI);
     
    pen.moveTo(110,44);
    pen.arc(94,63,2,0,2*Math.PI); 
    pen.moveTo(190,49);
    pen.arc(94,72.5,2,0,2*Math.PI);
    pen.fill();
        
    }
/*-------------------------------------------------------------------------------------*/
    
    /*dobbelstenen gooien 5*/
    if (dobbele==5){
         pen = document.getElementById("backgroundtable").getContext("2d"); 
    pen.beginPath();
    pen.fillStyle="black";
        pen.moveTo(85,44);
    pen.arc(99,33,2,0,2*Math.PI);
    pen.moveTo(75,49);
    pen.arc(104.2,38,2,0,2*Math.PI); 
    pen.moveTo(85,49);
    pen.arc(99,42.5,2,0,2*Math.PI);
     
    pen.moveTo(110,44);
    pen.arc(110,33,2,0,2*Math.PI); 
    pen.moveTo(190,49);
    pen.arc(110,42.5,2,0,2*Math.PI);
    pen.fill();
        
    }
    
    if (dobbel2==5){
         pen = document.getElementById("backgroundtable").getContext("2d"); 
    pen.beginPath();
    pen.fillStyle="black";
        pen.moveTo(85,44);
    pen.arc(74,43,2,0,2*Math.PI);
    pen.moveTo(75,49);
    pen.arc(79.2,48,2,0,2*Math.PI); 
    pen.moveTo(85,49);
    pen.arc(74,52.5,2,0,2*Math.PI);
     
    pen.moveTo(110,44);
    pen.arc(85,43,2,0,2*Math.PI); 
    pen.moveTo(190,49);
    pen.arc(85,52.5,2,0,2*Math.PI);
    pen.fill();
        
    }
    
    if (dobbel3==5){
         pen = document.getElementById("backgroundtable").getContext("2d"); 
    pen.beginPath();
    pen.fillStyle="black";
        pen.moveTo(85,44);
    pen.arc(84,63,2,0,2*Math.PI);
    pen.moveTo(215,34);
    pen.arc(89,67.5,2,0,2*Math.PI); 
    pen.moveTo(85,49);
    pen.arc(84,72.5,2,0,2*Math.PI);
     
    pen.moveTo(110,44);
    pen.arc(94,63,2,0,2*Math.PI); 
    pen.moveTo(190,49);
    pen.arc(94,72.5,2,0,2*Math.PI);
    pen.fill();
        
    }
    
/*-------------------------------------------------------------------------------------*/
    
    /*dobbelstenen gooien 6*/
    
  if (dobbele==6){
       pen = document.getElementById("backgroundtable").getContext("2d"); 
    pen.beginPath();
    
     
      
      pen.fillStyle="black";
      
     pen.moveTo(99,34);
    pen.arc(99,33,2,0,2*Math.PI); 
    pen.moveTo(100,49);
    pen.arc(99,38,2,0,2*Math.PI);
    pen.moveTo(100,44);
     pen.arc(99,42.5,2,0,2*Math.PI);
     
    pen.moveTo(110,44);
    pen.arc(110,33,2,0,2*Math.PI); 
    pen.moveTo(110,49);
    pen.arc(110,38,2,0,2*Math.PI);
    pen.moveTo(110,54);
     pen.arc(110,42.5,2,0,2*Math.PI);
     pen.fill();
     
      
      
  }
  
  
  if (dobbel2==6){
       pen = document.getElementById("backgroundtable").getContext("2d"); 
    pen.beginPath();
      pen.fillStyle="black";
     pen.moveTo(74,44);
    pen.arc(74,43,2,0,2*Math.PI); 
    pen.moveTo(75,49);
    pen.arc(74,48,2,0,2*Math.PI);
    pen.moveTo(75,54);
     pen.arc(74,52.5,2,0,2*Math.PI);
     
    pen.moveTo(85,44);
    pen.arc(85,43,2,0,2*Math.PI); 
    pen.moveTo(85,49);
    pen.arc(85,48,2,0,2*Math.PI);
    pen.moveTo(85,54);
     pen.arc(85,52.5,2,0,2*Math.PI);
     pen.fill();
      
      
  }
  
  if (dobbel3==6){
       pen = document.getElementById("backgroundtable").getContext("2d"); 
    pen.beginPath();
       pen.fillStyle="black";
     
    pen.moveTo(85,44);
    pen.arc(84,63,2,0,2*Math.PI);
    pen.moveTo(100,34);
    pen.arc(84,68,2,0,2*Math.PI); 
    pen.moveTo(85,49);
    pen.arc(84,72.5,2,0,2*Math.PI);
     
    pen.moveTo(110,44);
    pen.arc(94,63,2,0,2*Math.PI); 
    pen.moveTo(110,49);
    pen.arc(94,68,2,0,2*Math.PI);
    pen.moveTo(110,54);
     pen.arc(94,72.5,2,0,2*Math.PI);
     pen.fill();
      
  }
  pen = document.getElementById("backgroundtable").getContext("2d"); 
    pen.beginPath();
     pen.fillStyle="black";
    pen.fill();

}

/*-------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------*/
/*-------------------------SPELER DOBBELT--------------------------------------------------*/
/*-------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------*/

function reageerOpTekenFiguur2(){ 
 
    
  var dobbel4 = Math.floor(Math.random() * 6) + 1;;
  var dobbel5 = Math.floor(Math.random() * 6) + 1;;
  var dobbel6 = Math.floor(Math.random() * 6) + 1;; 
  
    console.log(dobbel4);
   
   
   pen = document.getElementById("backgroundtable").getContext("2d"); 
    pen.beginPath();
     pen.fillStyle="black";
      pen.moveTo(75,49);
    pen.arc(104.2,38,2,0,2*Math.PI);
    
    pen.fillStyle="white";
    
    pen.fillRect(70,40,18,15);
    pen.fillRect(95,30,18,15);
    pen.fillRect(80,60,18,15);
     
     
    pen.fillRect(210,40,18,15);
    pen.fillRect(190,30,18,15);
    pen.fillRect(190,60,18,15);
/*-------------------------------------------------------------------------------------*/

    /*dobbelstenen gooien 1*/
    
    if (dobbel4==1){
        pen = document.getElementById("backgroundtable").getContext("2d"); 
    pen.beginPath();
    pen.fillStyle="black";
    pen.moveTo(215,34);
    pen.arc(199,38,2,0,2*Math.PI); 
    pen.fill();
    }
    
    if (dobbel5==1){
         pen = document.getElementById("backgroundtable").getContext("2d"); 
    pen.beginPath();
    pen.fillStyle="black";
    pen.moveTo(215,34);
    pen.arc(219.2,48,2,0,2*Math.PI); 
    pen.fill();
    }
    
    if (dobbel6==1){
    pen = document.getElementById("backgroundtable").getContext("2d"); 
    pen.beginPath();
    pen.fillStyle="black";
    pen.moveTo(215,34);
    pen.arc(199,68,2,0,2*Math.PI); 
    pen.fill();
}
/*-------------------------------------------------------------------------------------*/

    /*dobbelstenen gooien 2*/
     
    if (dobbel4==2)
    {
        
    pen = document.getElementById("backgroundtable").getContext("2d"); 
    pen.beginPath();
    pen.fillStyle="black";
    pen.moveTo(85,44);
    pen.arc(194,33,2,0,2*Math.PI); 
    pen.moveTo(190,49);
    pen.arc(204,42.5,2,0,2*Math.PI);
    pen.fill();
    
   
    }
    
    if (dobbel5==2){
         pen = document.getElementById("backgroundtable").getContext("2d"); 
    pen.beginPath();
    pen.fillStyle="black";
    pen.moveTo(85,44);
    pen.arc(214,43,2,0,2*Math.PI);
    pen.moveTo(190,49);
    pen.arc(224,52.5,2,0,2*Math.PI);
    pen.fill();
    }
    
    if (dobbel6==2){
         pen = document.getElementById("backgroundtable").getContext("2d"); 
    pen.beginPath();
    pen.fillStyle="black";
    pen.moveTo(85,44);
    pen.arc(194,63,2,0,2*Math.PI);
    pen.moveTo(190,49);
    pen.arc(204,72.5,2,0,2*Math.PI);
    pen.fill();
    }
/*-------------------------------------------------------------------------------------*/
    /*dobbelstenen gooien 3*/
    if (dobbel4==3){
         pen = document.getElementById("backgroundtable").getContext("2d"); 
    pen.beginPath();
    pen.fillStyle="black";
    pen.moveTo(85,44);
    pen.arc(194,33,2,0,2*Math.PI);
    pen.moveTo(215,34);
    pen.arc(199,38,2,0,2*Math.PI);  
    pen.moveTo(190,49);
    pen.arc(204,42.5,2,0,2*Math.PI);
    pen.fill();
    }
    
    if (dobbel5==3){
         pen = document.getElementById("backgroundtable").getContext("2d"); 
    pen.beginPath();
    pen.fillStyle="black";
    pen.moveTo(85,44);
    pen.arc(214,43,2,0,2*Math.PI);
    pen.moveTo(215,34);
    pen.arc(219.2,48,2,0,2*Math.PI); 
    pen.moveTo(190,49);
    pen.arc(224,52.5,2,0,2*Math.PI);
    pen.fill();
        
    }
    
    if (dobbel6==3){
         pen = document.getElementById("backgroundtable").getContext("2d"); 
    pen.beginPath();
    pen.fillStyle="black";
    pen.moveTo(85,44);
    pen.arc(194,63,2,0,2*Math.PI);
    pen.moveTo(215,34);
    pen.arc(199,68,2,0,2*Math.PI); 
    pen.moveTo(190,49);
    pen.arc(204,72.5,2,0,2*Math.PI);
    pen.fill();
    }
/*-------------------------------------------------------------------------------------*/
    /*dobbelstenen gooien 4*/
    if (dobbel4==4){
         pen = document.getElementById("backgroundtable").getContext("2d"); 
    pen.beginPath();
    pen.fillStyle="black";
    pen.moveTo(85,44);
    pen.arc(194,33,2,0,2*Math.PI);
    pen.moveTo(85,49);
    pen.arc(194,42.5,2,0,2*Math.PI);
    pen.moveTo(110,44);
    pen.arc(204,33,2,0,2*Math.PI); 
    pen.moveTo(190,49);
    pen.arc(204,42.5,2,0,2*Math.PI);
    pen.fill();
        
    }
    
    if (dobbel5==4){
         pen = document.getElementById("backgroundtable").getContext("2d"); 
    pen.beginPath();
    pen.fillStyle="black";
    pen.moveTo(85,44);
    pen.arc(214,43,2,0,2*Math.PI);
    pen.moveTo(85,49);
    pen.arc(214,52.5,2,0,2*Math.PI);
     
    pen.moveTo(110,44);
    pen.arc(224,43,2,0,2*Math.PI); 
    pen.moveTo(190,49);
    pen.arc(224,52.5,2,0,2*Math.PI);
    pen.fill();
        
    }
    
    if (dobbel6==4){
         pen = document.getElementById("backgroundtable").getContext("2d"); 
    pen.beginPath();
    pen.fillStyle="black";
    pen.moveTo(85,44);
    pen.arc(194,63,2,0,2*Math.PI);
    pen.moveTo(85,49);
    pen.arc(194,72.5,2,0,2*Math.PI);
    pen.moveTo(110,44);
    pen.arc(204,63,2,0,2*Math.PI); 
    pen.moveTo(190,49);
    pen.arc(204,72.5,2,0,2*Math.PI);
    pen.fill();
        
    }
/*-------------------------------------------------------------------------------------*/
    
    /*dobbelstenen gooien 5*/
    if (dobbel4==5){
         pen = document.getElementById("backgroundtable").getContext("2d"); 
    pen.beginPath();
    pen.fillStyle="black";
    pen.moveTo(85,44);
    pen.arc(194,33,2,0,2*Math.PI);
    pen.moveTo(215,34);
    pen.arc(199,38,2,0,2*Math.PI); 
    pen.moveTo(85,49);
    pen.arc(194,42.5,2,0,2*Math.PI);
     
    pen.moveTo(110,44);
    pen.arc(204,33,2,0,2*Math.PI); 
    pen.moveTo(190,49);
    pen.arc(204,42.5,2,0,2*Math.PI);
    pen.fill();
        
    }
    
    if (dobbel5==5){
         pen = document.getElementById("backgroundtable").getContext("2d"); 
    pen.beginPath();
    pen.fillStyle="black";
    pen.moveTo(85,44);
    pen.arc(214,43,2,0,2*Math.PI);
    pen.moveTo(215,34);
    pen.arc(219.2,48,2,0,2*Math.PI); 
    pen.moveTo(85,49);
    pen.arc(214,52.5,2,0,2*Math.PI);
     
    pen.moveTo(110,44);
    pen.arc(224,43,2,0,2*Math.PI); 
    pen.moveTo(190,49);
    pen.arc(224,52.5,2,0,2*Math.PI);
    pen.fill();
        
    }
    
    if (dobbel6==5){
         pen = document.getElementById("backgroundtable").getContext("2d"); 
    pen.beginPath();
    pen.fillStyle="black";
    pen.moveTo(85,44);
    pen.arc(194,63,2,0,2*Math.PI);
    pen.moveTo(215,34);
    pen.arc(199,68,2,0,2*Math.PI); 
    pen.moveTo(85,49);
    pen.arc(194,72.5,2,0,2*Math.PI);
     
    pen.moveTo(110,44);
    pen.arc(204,63,2,0,2*Math.PI); 
    pen.moveTo(190,49);
    pen.arc(204,72.5,2,0,2*Math.PI);
    pen.fill();
        
    }
    
/*-------------------------------------------------------------------------------------*/
    
    /*dobbelstenen gooien 6*/
    
  if (dobbel4==6){
    pen = document.getElementById("backgroundtable").getContext("2d"); 
    pen.beginPath();
    pen.fillStyle="black";
   pen.moveTo(85,44);
    pen.arc(195,33,2,0,2*Math.PI);
    pen.moveTo(190,34);
    pen.arc(195,38,2,0,2*Math.PI); 
    pen.moveTo(85,49);
    pen.arc(195,42.5,2,0,2*Math.PI);
     
    pen.moveTo(110,44);
    pen.arc(203,33,2,0,2*Math.PI); 
    pen.moveTo(190,49);
    pen.arc(203,38,2,0,2*Math.PI);
    pen.moveTo(110,54);
     pen.arc(203,42.5,2,0,2*Math.PI);
     pen.fill();
     
      
      
  }
  
  
  if (dobbel5==6){
    
    pen = document.getElementById("backgroundtable").getContext("2d"); 
    pen.beginPath();
    pen.fillStyle="black";
    pen.fillStyle="black";
    pen.moveTo(85,44);
    pen.arc(215,43,2,0,2*Math.PI);
    pen.moveTo(215,34);
    pen.arc(215,48,2,0,2*Math.PI); 
    pen.moveTo(85,49);
    pen.arc(215,52.5,2,0,2*Math.PI);
     
    pen.moveTo(110,44);
    pen.arc(224,43,2,0,2*Math.PI); 
    pen.moveTo(190,49);
    pen.arc(224,48,2,0,2*Math.PI);
    pen.moveTo(110,54);
    pen.arc(224,52.5,2,0,2*Math.PI);
    pen.fill();
      
      
  }
  
  if (dobbel6==6){
       pen = document.getElementById("backgroundtable").getContext("2d"); 
    pen.beginPath();
    pen.fillStyle="black";     
    pen.moveTo(85,44);
    pen.arc(195,63,2,0,2*Math.PI);
    pen.moveTo(190,34);
    pen.arc(195,68,2,0,2*Math.PI); 
    pen.moveTo(85,49);
    pen.arc(195,72.5,2,0,2*Math.PI);
     
    pen.moveTo(110,44);
    pen.arc(203,63,2,0,2*Math.PI); 
    pen.moveTo(190,49);
    pen.arc(203,68,2,0,2*Math.PI);
    pen.moveTo(110,54);
    pen.arc(203,72.5,2,0,2*Math.PI);
    pen.fill();
}

}