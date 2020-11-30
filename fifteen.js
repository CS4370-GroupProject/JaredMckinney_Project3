var mainDiv;    
var counter =0;



window.onload = function(){
        


    mainDiv = $('puzzlearea');
    var myURL = "url('background.jpg')";
    setItUp(myURL);
    document.getElementById("shufflebutton").onclick = shuffleIt;
    
 
    var cr = document.createElement('div');
    cr.id = 'myCounter';
    $('overall').appendChild(cr);
    $('myCounter').style.height = "20px";
    $('myCounter').style.background = "rgba(176,196,222,0.6)";
    $('myCounter').style.marginTop = "10px";
    $('myCounter').style.padding = "5px";
    $('myCounter').style.border = "thin dotted black";
    $('myCounter').innerHTML= "Counter: "
    $('myCounter').innerHTML= "Counter: " + counter.toString();
    
	
    var sl = document.createElement('select');
    sl.name = 'sl';
    sl.id = 'sl';
    $('controls').appendChild(sl);
    var option1 = document.createElement("option");
           option1.text="Elephant";
        option1.value="elephant";
        sl.appendChild(option1);
    var option2 = document.createElement("option");
           option2.text="Waterfall";
        option2.value="waterfall";
        sl.appendChild(option2);
    var option3 = document.createElement("option");
           option3.text="Sunset";
        option3.value="sunset";
        sl.appendChild(option3);
    sl.onchange = runSl;
        
  
    var cb = document.createElement('input');
    cb.type='checkbox';
    cb.name='cbox';
    cb.value='cbox';
    cb.id='cbId';
    $('controls').appendChild(cb);
    
    var label = document.createElement('label')
    label.htmlFor = "cbId";
    label.appendChild(document.createTextNode('Show/Hide'));
    $('controls').appendChild(label);
    
    cb.onclick=runCb;
    
    
    }   
    
    
  
    var sec = 0,
      timeoutHandler;

    function pad(val) {
    return val > 9 ? val : "0" + val;
    }

    function pausePad() {
    clearTimeout( timeoutHandler );
    }

    function resumePad() {
    pausePad();
    runPad();
    }

    function resetPad() {
    sec = 0;
    resumePad();
    }

    function runPad() {
    timeoutHandler = setInterval(function() {
        document.getElementById("seconds").innerHTML = pad(++sec % 60);
        document.getElementById("minutes").innerHTML = pad(parseInt(sec / 60, 10));
    }, 1000);
    }
    runPad();
        
    
    
    
  
    function runSl() {
    pausePad();
    counter =0;  //reset
    $('myCounter').innerHTML= "Counter: " + counter.toString();
        
        var x = document.getElementById("sl").selectedIndex;
           if (document.getElementsByTagName("option")[x].value == 'elephant')
        setItUp("url('background.jpg')");
        if (document.getElementsByTagName("option")[x].value == 'waterfall')
        setItUp("url('waterfall.jpeg')");
        if (document.getElementsByTagName("option")[x].value == 'sunset')
        setItUp("url('sunset.jpeg')");

    
    }    
    
    
   
    function setItUp(myURL){
    
    for (i=0;i<15; i++)
    {    
        mainDiv.getElementsByTagName('div')[i].addClassName("puzzlepiece");
        mainDiv.getElementsByTagName('div')[i].style.background  = myURL;
        mainDiv.getElementsByTagName('div')[i].onclick = setup;
            
        }
        
            
    mainDiv.getElementsByTagName('div')[0].style.left= '0px';
    mainDiv.getElementsByTagName('div')[0].style.top='0px';    
    mainDiv.getElementsByTagName('div')[0].style.backgroundPosition='0px 0px';
                        
    mainDiv.getElementsByTagName('div')[1].style.left= '100px';
    mainDiv.getElementsByTagName('div')[1].style.top='0px';
    mainDiv.getElementsByTagName('div')[1].style.backgroundPosition='-100px 0px';

    mainDiv.getElementsByTagName('div')[2].style.left= '200px';
    mainDiv.getElementsByTagName('div')[2].style.top='0px';
    mainDiv.getElementsByTagName('div')[2].style.backgroundPosition='-200px 0px';
            
    mainDiv.getElementsByTagName('div')[3].style.left= '300px';
    mainDiv.getElementsByTagName('div')[3].style.top='0px';
    mainDiv.getElementsByTagName('div')[3].style.backgroundPosition='-300px 0px';
            
    mainDiv.getElementsByTagName('div')[4].style.left= '0px';
    mainDiv.getElementsByTagName('div')[4].style.top='100px';
    mainDiv.getElementsByTagName('div')[4].style.backgroundPosition='0px -100px';
            
    mainDiv.getElementsByTagName('div')[5].style.left= '100px';
    mainDiv.getElementsByTagName('div')[5].style.top='100px';
    mainDiv.getElementsByTagName('div')[5].style.backgroundPosition='-100px -100px';
            
    mainDiv.getElementsByTagName('div')[6].style.left= '200px';
    mainDiv.getElementsByTagName('div')[6].style.top='100px';
    mainDiv.getElementsByTagName('div')[6].style.backgroundPosition='-200px -100px';
            
    mainDiv.getElementsByTagName('div')[7].style.left= '300px';
    mainDiv.getElementsByTagName('div')[7].style.top='100px';
    mainDiv.getElementsByTagName('div')[7].style.backgroundPosition='-300px -100px';
                
    mainDiv.getElementsByTagName('div')[8].style.left= '0px';
    mainDiv.getElementsByTagName('div')[8].style.top='200px';
    mainDiv.getElementsByTagName('div')[8].style.backgroundPosition='0px -200px';
        
    mainDiv.getElementsByTagName('div')[9].style.left= '100px';
    mainDiv.getElementsByTagName('div')[9].style.top='200px';
    mainDiv.getElementsByTagName('div')[9].style.backgroundPosition='-100px -200px';
        
    mainDiv.getElementsByTagName('div')[10].style.left= '200px';
    mainDiv.getElementsByTagName('div')[10].style.top='200px';
    mainDiv.getElementsByTagName('div')[10].style.backgroundPosition='-200px -200px';
        
    mainDiv.getElementsByTagName('div')[11].style.left= '300px';
    mainDiv.getElementsByTagName('div')[11].style.top='200px';
    mainDiv.getElementsByTagName('div')[11].style.backgroundPosition='-300px -200px';
        
    mainDiv.getElementsByTagName('div')[12].style.left= '0px';
    mainDiv.getElementsByTagName('div')[12].style.top='300px';
    mainDiv.getElementsByTagName('div')[12].style.backgroundPosition='0px -300px';
        
    mainDiv.getElementsByTagName('div')[13].style.left= '100px';
    mainDiv.getElementsByTagName('div')[13].style.top='300px';
    mainDiv.getElementsByTagName('div')[13].style.backgroundPosition='-100px -300px';
        
    mainDiv.getElementsByTagName('div')[14].style.left= '200px';
    mainDiv.getElementsByTagName('div')[14].style.top='300px';
    mainDiv.getElementsByTagName('div')[14].style.backgroundPosition='-200px -300px';
        
    }    
    
  
    function myRandom(){
        var arr = []
    while(arr.length < 15){
      var randomnumber=Math.ceil(Math.random()*15)
      var found=false;
      for(var i=0;i<arr.length;i++){
    if(arr[i]==randomnumber){found=true;break}
      }
      if(!found)arr[arr.length]=randomnumber;
    }
    return arr;
    }
    
    
    function runCb() {
        
    var type;
    if($('cbId').checked) 
        {        
        
    for (i=0;i<15; i++)
    mainDiv.getElementsByTagName('div')[i].style.color = "rgba(0,0,0,0)";
    } else {
    for (i=0;i<15; i++)
    mainDiv.getElementsByTagName('div')[i].style.color = "rgba(0,0,0,1)";
    }
    }

    var eLeft = '300px'; 
    var eTop = '300px';
    var tempLeft, tempTop; 
    

   
    function setup() {

    counter++;
    
    $('myCounter').innerHTML= "Counter: " + counter.toString(); 


    tempLeft = this.style.left;
    tempTop = this.style.top;
    this.style.left = eLeft;
    this.style.top = eTop;
    eLeft = tempLeft;
    eTop = tempTop;

    }


    function blink(selector){
    $(selector).fadeOut('slow', function(){
    $(this).fadeIn('slow', function(){
        blink(this);
    });
    });
    }

 
    function shuffleIt(){
    
    
    
    counter =0;  
    $('myCounter').innerHTML= "Counter: " + counter.toString(); 
    
    eLeft = '300px'; 
    eTop = '300px';
    
    var myArray = $('puzzlearea').getElementsByTagName('div');

    giveCoordinates(myArray);
    
    }
    
  
    function giveCoordinates(array){
   
    
    var arr = []
      while(arr.length < 15){
      var randomnumber=Math.ceil(Math.random()*15)
      var found=false;
      for(var i=0;i<arr.length;i++){
    if(arr[i]==randomnumber){found=true;break}
      }
      if(!found)arr[arr.length]=randomnumber;
    }

    array[arr[14]-1].style.left= '0px';
    array[arr[14]-1].style.top='0px';    
    array[arr[13]-1].style.left= '100px';
    array[arr[13]-1].style.top='0px';
    array[arr[12]-1].style.left= '200px';
    array[arr[12]-1].style.top='0px';
    array[arr[11]-1].style.left= '300px';
    array[arr[11]-1].style.top='0px';
    array[arr[10]-1].style.left= '0px';
    array[arr[10]-1].style.top='100px';
    array[arr[9]-1].style.left= '100px';
    array[arr[9]-1].style.top='100px';
    array[arr[8]-1].style.left= '200px';
    array[arr[8]-1].style.top='100px';
    array[arr[7]-1].style.left= '300px';
    array[arr[7]-1].style.top='100px';
    array[arr[6]-1].style.left= '0px';
    array[arr[6]-1].style.top='200px';
    array[arr[5]-1].style.left= '100px';
    array[arr[5]-1].style.top='200px';
    array[arr[4]-1].style.left= '200px';
    array[arr[4]-1].style.top='200px';
    array[arr[3]-1].style.left= '300px';
    array[arr[3]-1].style.top='200px';
    array[arr[2]-1].style.left= '0px';
    array[arr[2]-1].style.top='300px';
    array[arr[1]-1].style.left= '100px';
    array[arr[1]-1].style.top='300px';
    array[arr[0]-1].style.left= '200px';
    array[arr[0]-1].style.top='300px';
    
    }
