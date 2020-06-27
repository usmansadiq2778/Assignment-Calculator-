



              function getnumber(num){
                
                var cal=document.getElementById('result');
                cal.value += num;

              }
         function clearres(){
          var cal=document.getElementById('result');
          cal.value="" 
         }
         
         
         function rslt(){
          var cal=document.getElementById('result');
          cal.value = eval(cal.value);
         }