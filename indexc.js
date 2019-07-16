var canvas =document.querySelector('canvas');
var c = canvas.getContext('2d');
var b = canvas.getContext('2d');
var cx=320;
var cy=600;
var r=105;
var cancelMe="";
var cancelMe1="";
var time=0;
var time1=0;
c.globalCompositeOperation = "source-over";
 c. beginPath();
c.fillRect(90, 0,60, 50);
c.fillStyle = '#ffffff';
c.fill(); 

 b.beginPath();
 b.arc(cx, cy, r, 0, Math.PI * 2, false); 
  c.strokeStyle = '#ffffff';
  c.stroke();

  
    c.fillStyle = 'yellow';
    c.font='30px Helvetica';
    c.fillText('START',275,610);


   var x = Math.floor((Math.random() * 100) + 80);
     var w = Math.floor((Math.random() * 120) + 100);

  var y=0;
  var t=0;
  var t1=20;
   var y1=0;

  var x1 = 370;
 
   var w1 = Math.floor((Math.random() * 100) + 30);

  var yh=0;
  var i=0;
  var j1=2;
  var s=0; 
  var cx1;
  var cx2;
  var cy1;
  var cy2;
  var k=1; 
   var s1=0; 
  var s2=0;
  var p=0;
  var rt=r;
  var love = new Image();
  love.src='heart.jpg';
  var l=-1;
  var p1=0;
function animateblock()
{
 

 cancelMe=requestAnimationFrame(animateblock);
  
    c.clearRect(0,0, innerWidth, innerHeight);
    
   c.drawImage(love,470,20);

    c.fillStyle = '#ffffff';
    c.font='30px Helvetica';
    c.fillText('SCORE:'+s,10,40);

   c.fillRect(x,y-(i*760),w,30);
   
  
    if(y>400)
    {
   c.fillRect(x1,y1,w1,30);
   y1+=j1;
   if(y1>=760)
{
   x1 = Math.floor((Math.random() * 270)+260);
   y1=0;
   w1 = Math.floor((Math.random() * 120) + 100);



}
if(p==0){
if( Math.abs(cy1-y1)<=20  && (cx1>=(x1) && cx1<=(x1+w1)))
  {
      cancelAnimationFrame(cancelMe);
       c.fillStyle = '#ffffff';
       c.font='80px Helvetica';
       c.fillText('GAME OVER',80,400);
  }

  if( Math.abs(cx1-x1)<=20  && (cy1>=(y1) && cy1<=(y1+30)))
  {
      cancelAnimationFrame(cancelMe);

       c.fillStyle = '#ffffff';
       c.font='80px Helvetica';
       c.fillText('GAME OVER',80,400);
  }



if(Math.abs(cy1-y1)==(Math.sqrt(2)*20) && Math.abs(-(x1+w1)+cx1)==(Math.sqrt(2)*20))
{
  cancelAnimationFrame(cancelMe);

       c.fillStyle = '#ffffff';
       c.font='80px Helvetica';
       c.fillText('GAME OVER',80,400);
}
if (p1!=1){
if( Math.abs(cy2-y1)<=20 && (cx2>=(x1) && cx2<=(x1+w1)))
  {
      cancelAnimationFrame(cancelMe);
      c.fillStyle = '#ffffff';
       c.font='80px Helvetica';
       c.fillText('GAME OVER',80,400);
  }

  if( Math.abs(cx2-x1)<=20  && (cy2>=(y1) && cy2<=(y1+30)))
  {
      cancelAnimationFrame(cancelMe);
      c.fillStyle = '#ffffff';
       c.font='80px Helvetica';
       c.fillText('GAME OVER',80,400);
  }



if(Math.abs(cy2-y1)==(Math.sqrt(2)*20) && Math.abs(-(x1+w1)+cx2)==(Math.sqrt(2)*20))
{
  cancelAnimationFrame(cancelMe);
  c.fillStyle = '#ffffff';
       c.font='80px Helvetica';
       c.fillText('GAME OVER',80,400);
}

}


}




   }

if(document.getElementById("clock").addEventListener("click", clockwise));
else if( document.getElementById("anticlock").addEventListener("click", anticlockwise));
else
{
  cx1=cx+(r*Math.cos(t*(Math.PI)/180));
cx2=cx-(r*Math.cos(t*(Math.PI)/180));
cy1=cy-(r*Math.sin(t*(Math.PI)/180));
cy2=cy+(r*Math.sin(t*(Math.PI)/180));
      
  c.beginPath();
  c.arc(cx, cy, r, 0, Math.PI * 2, false); 
  c.strokeStyle = '#ffffff';
  c.stroke();

  c.beginPath();
  c.arc(cx1, cy1, 20, 0, Math.PI * 2, false); 
  c.fillStyle = '#0000ff';
  c.fill();
 
 if (p1!=1)
 {
  c.beginPath();
  c.arc(cx2, cy2, 20, 0, Math.PI * 2, false); 
  c.fillStyle = '#ff0000';
  c.fill();
}
}


y+=j1;

if(y>=(750*k))
{     i++;
      k++;   
    x = Math.floor((Math.random() * 100) + 80);
      w = Math.floor((Math.random() * 120) + 100);

}

if(p==0){

  if(( Math.abs(cy1-y+(i*760))<=20 && (cx1>=(x) && cx1<=(x+w)))||( Math.abs(cx1-x)<=20  && (cy1>=(y-(i*760)) && cy1<=(y-(i*760)+30)))||(Math.abs(cy1-y+(i*760))==(Math.sqrt(2)*20) && Math.abs(-(x+w)+cx1)==(Math.sqrt(2)*20)))
  {
      cancelAnimationFrame(cancelMe);
      c.fillStyle = '#ffffff';
       c.font='80px Helvetica';
       c.fillText('GAME OVER',80,400);

  }

if (p1!=1)
{
if( Math.abs(cy2-y+(i*760))<=20 && (cx2>=(x) && cx2<=(x+w)))
  {
      cancelAnimationFrame(cancelMe);
      c.fillStyle = '#ffffff';
       c.font='80px Helvetica';
       c.fillText('GAME OVER',80,400);

  }

  if( Math.abs(cx2-x)<=20  && (cy2>=(y-(i*760)) && cy2<=(y-(i*760)+30)))
  {
      cancelAnimationFrame(cancelMe);
      c.fillStyle = '#ffffff';
       c.font='80px Helvetica';
       c.fillText('GAME OVER',80,400);
  }



if(Math.abs(cy2-y+(i*760))==(Math.sqrt(2)*20) && Math.abs(-(x+w)+cx2)==(Math.sqrt(2)*20))
{
  cancelAnimationFrame(cancelMe);
  c.fillStyle = '#ffffff';
       c.font='80px Helvetica';
       c.fillText('GAME OVER',80,400);
}}
}
s+=1;

if(s%1000==0)
{
  j1+=1;
}
 
if(s%500==0 && p==0){ 
c.fillStyle="yellow";
c.fillRect(320,yh,20,20);
yh++;}
if(yh!=0){
  c.fillStyle="yellow";
c.fillRect(320,yh,20,20);
yh++;
if(yh==750)
yh=0;
}
 
if( Math.abs(cy1-yh)<=20  && (cx1>=(320) && cx1<=(340)))
  {
     
  time++;
  power();
  }

  if( Math.abs(cx1-320)<=20  && (cy1>=(yh) && cy1<=(yh+20)))
  {
     
  time++;
  power();
  }



if(Math.abs(cy1-yh)==(Math.sqrt(2)*20) && Math.abs(-(340)+cx1)==(Math.sqrt(2)*20))
{
  
  time++;
  power();
}
if( Math.abs(cy2-yh)<=20 && (cx2>=(320) && cx2<=(340)))
  {
     
  time++;
  power();
  }

  if( Math.abs(cx2-320)<=20  && (cy2>=(yh) && cy2<=(yh+20)))
  {
     
  time++;
  power();
  }



if(Math.abs(cy2-yh)==(Math.sqrt(2)*20) && Math.abs(-(340)+cx2)==(Math.sqrt(2)*20))
{
  
  time++;
  power();
  
}
if(p==1){

time++;
  if(time>=900){

    r=rt;
    p=0;
    time=0;

  }

}
if(s%500==0)
  l++;

if(l>=0){
  for(var f=0; f<l; f++)
 {

  c.fillStyle = '#ffffff';
  c.fillRect(540+(f)*20,20,10,39);
}}
 if(l==5)
{ p1=1;
  time1++;
  l=-1;
  
}
if(time1!=0)
{
  loveball();
 
  time1++;
  if(time1>=500){
 time1=0;p1=0;
}
}

}



function clockwise()
{


  cx1=cx+(r*Math.cos(t*(Math.PI)/180));
cx2=cx-(r*Math.cos(t*(Math.PI)/180));
cy1=cy-(r*Math.sin(t*(Math.PI)/180));
cy2=cy+(r*Math.sin(t*(Math.PI)/180));
      
  c.beginPath();
  c.arc(cx, cy, r, 0, Math.PI * 2, false); 
  c.strokeStyle = '#ffffff';
  c.stroke();

  c.beginPath();
  c.arc(cx1, cy1, 20, 0, Math.PI * 2, false); 
  c.fillStyle = '#0000ff';
  c.fill();
if (p1!=1){
  c.beginPath();
  c.arc(cx2, cy2, 20, 0, Math.PI * 2, false); 
  c.fillStyle = '#ff0000';
  c.fill();
  
}t+=t1;
}

function anticlockwise()
{


  cx1=cx+(r*Math.cos(t*(Math.PI)/180));
cx2=cx-(r*Math.cos(t*(Math.PI)/180));
cy1=cy-(r*Math.sin(t*(Math.PI)/180));
cy2=cy+(r*Math.sin(t*(Math.PI)/180));
      
  c.beginPath();
  c.arc(cx, cy, r, 0, Math.PI * 2, false); 
  c.strokeStyle = '#ffffff';
  c.stroke();

  c.beginPath();
  c.arc(cx1, cy1, 20, 0, Math.PI * 2, false); 
  c.fillStyle = '#0000ff';
  c.fill();
if (p1!=1){
  c.beginPath();
  c.arc(cx2, cy2, 20, 0, Math.PI * 2, false); 
  c.fillStyle = '#ff0000';
  c.fill();
   
} t-=t1;
}
function start()
{
  if(this.textContent=="start")
  {
    this.textContent='PLAY';
    animateblock();

}
else{
  this.textContent='PLAY';
  animateblock();
}
}
function pause()
{
  cancelAnimationFrame(cancelMe);
}
function restart()
{

 cx=320;
 cy=600;
 r=105;
 cancelMe="";
 cancelMe1="";



 b.beginPath();
 b.arc(cx, cy, r, 0, Math.PI * 2, false); 
  c.strokeStyle = '#ffffff';
  c.stroke();

c.beginPath();
 c.arc(cx+r, cy, 20, 0, Math.PI * 2, false); 
  c.fillStyle = '#0000ff';
  c.fill();

  c.beginPath();
 c.arc(cx-r, cy, 20, 0, Math.PI * 2, false); 
  c.fillStyle = '#ff0000';
  c.fill();
  


   x = Math.floor((Math.random() * 100) + 80);
   w = Math.floor((Math.random() * 120) + 100);

   y=0;
   t=0;
   t1=20;
   y1=0;

   x1 = 370;
 
   w1 = Math.floor((Math.random() * 100) + 30);


   i=0;
   j1=2;
   s=0; 
   cx1;
   cx2;
   cy1;
   cy2;
   k=1;
   s1=0; 
   s2=0;
   p=0;
  rt=r;
  
   l=-1;
   p1=0;

    animateblock();
}
function multi()
{
  cx=320;
 cy=600;
 r=105;
 cancelMe="";
 cancelMe1="";



 b.beginPath();
 b.arc(cx, cy, r, 0, Math.PI * 2, false); 
  c.strokeStyle = '#ffffff';
  c.stroke();

c.beginPath();
 c.arc(cx+r, cy, 20, 0, Math.PI * 2, false); 
  c.fillStyle = '#0000ff';
  c.fill();

  c.beginPath();
 c.arc(cx-r, cy, 20, 0, Math.PI * 2, false); 
  c.fillStyle = '#ff0000';
  c.fill();
  


   x = Math.floor((Math.random() * 100) + 80);
   w = Math.floor((Math.random() * 120) + 100);

   y=0;
   t=0;
   t1=20;
   y1=0;

   x1 = 370;
 
   w1 = Math.floor((Math.random() * 100) + 30);


   i=0;
   j1=2;
   p1=0;
   p=0;
   cx1;
   cx2;
   cy1;
   cy2;
   k=1; animatemulti();
}
function animatemulti()
{
   cancelAnimationFrame(cancelMe);

 cancelMe=requestAnimationFrame(animatemulti);
  
    c.clearRect(0,0, innerWidth, innerHeight);
    
   

    c.fillStyle = 'yellow';
    c.font='30px Helvetica';
    c.fillText('SCORE A:'+s1,10,40); 
    c.fillStyle = 'yellow';
    c.font='30px Helvetica';
    c.fillText('SCORE B:'+s2,400,40);

   c.fillRect(x,y-(i*760),w,30);
   
  
    if(y>400)
    {
   c.fillRect(x1,y1,w1,30);
   y1+=j1;
   if(y1>=760)
{
   x1 = Math.floor((Math.random() * 270)+260);
   y1=0;
   w1 = Math.floor((Math.random() * 120) + 100);



}

if( Math.abs(cy1-y1)<=20  && (cx1>=(x1) && cx1<=(x1+w1)))
  {
      if(s2==0)
      { cancelAnimationFrame(cancelMe);

        s2+=1;
       multi();
      }
      else{
      cancelAnimationFrame(cancelMe);
       c.fillStyle = '#ffffff';
       c.font='80px Helvetica';
       c.fillText('GAME OVER',80,400);
       if(s1>s2)
       {
          c.fillStyle = '#ffffff';
          c.font='40px Helvetica';
          c.fillText('WINNER:PLAYER A',80,100);
       }
       else{
          c.fillStyle = '#ffffff';
          c.font='40px Helvetica';
          c.fillText('WINNER:PLAYER B',80,100);
       }

}  }

  if( Math.abs(cx1-x1)<=20  && (cy1>=(y1) && cy1<=(y1+30)))
  {

     if(s2==0)
      {cancelAnimationFrame(cancelMe);

        s2+=1;
       multi();
      }
      else{
      cancelAnimationFrame(cancelMe);

       c.fillStyle = '#ffffff';
       c.font='80px Helvetica';
       c.fillText('GAME OVER',80,400);if(s1>s2)
       {
          c.fillStyle = '#ffffff';
          c.font='40px Helvetica';
          c.fillText('WINNER:PLAYER A',80,100);
       }
       else{
          c.fillStyle = '#ffffff';
          c.font='40px Helvetica';
          c.fillText('WINNER:PLAYER B',80,100);
       }}
  }



if(Math.abs(cy1-y1)==(Math.sqrt(2)*20) && Math.abs(-(x1+w1)+cx1)==(Math.sqrt(2)*20))
{

   if(s2==0)
      {cancelAnimationFrame(cancelMe);

        s2+=1;
       multi();
      }
      else{
       cancelAnimationFrame(cancelMe);
       c.fillStyle = '#ffffff';
       c.font='80px Helvetica';
       c.fillText('GAME OVER',80,400);if(s1>s2)
       {
          c.fillStyle = '#ffffff';
          c.font='40px Helvetica';
          c.fillText('WINNER:PLAYER A',80,100);
       }
       else{
          c.fillStyle = '#ffffff';
          c.font='40px Helvetica';
          c.fillText('WINNER:PLAYER B',80,100);
       }}
}
if( Math.abs(cy2-y1)<=20 && (cx2>=(x1) && cx2<=(x1+w1)))
  {
       if(s2==0)
      {cancelAnimationFrame(cancelMe);

        s2+=1;
       multi();
      }
      else
{
       cancelAnimationFrame(cancelMe);
       c.fillStyle = '#ffffff';
       c.font='80px Helvetica';
       c.fillText('GAME OVER',80,400);if(s1>s2)
       {
          c.fillStyle = '#ffffff';
          c.font='40px Helvetica';
          c.fillText('WINNER:PLAYER A',80,100);
       }
       else{
          c.fillStyle = '#ffffff';
          c.font='40px Helvetica';
          c.fillText('WINNER:PLAYER B',80,100);
       }}
  }

  if( Math.abs(cx2-x1)<=20  && (cy2>=(y1) && cy2<=(y1+30)))
  {  
       if(s2==0)
      {cancelAnimationFrame(cancelMe);

        s2+=1;
       multi();
      }
      else
     {  cancelAnimationFrame(cancelMe);
       c.fillStyle = '#ffffff';
       c.font='80px Helvetica';
       c.fillText('GAME OVER',80,400);if(s1>s2)
       {
          c.fillStyle = '#ffffff';
          c.font='40px Helvetica';
          c.fillText('WINNER:PLAYER A',80,100);
       }
       else{
          c.fillStyle = '#ffffff';
          c.font='40px Helvetica';
          c.fillText('WINNER:PLAYER B',80,100);
       }}
  }



if(Math.abs(cy2-y1)==(Math.sqrt(2)*20) && Math.abs(-(x1+w1)+cx2)==(Math.sqrt(2)*20))
{     if(s2==0)
      {cancelAnimationFrame(cancelMe);

        s2+=1;
       multi();
      }
      else{
       cancelAnimationFrame(cancelMe);
       c.fillStyle = '#ffffff';
       c.font='80px Helvetica';
       c.fillText('GAME OVER',80,400);if(s1>s2)
       {
          c.fillStyle = '#ffffff';
          c.font='40px Helvetica';
          c.fillText('WINNER:PLAYER A',80,100);
       }
       else{
          c.fillStyle = '#ffffff';
          c.font='40px Helvetica';
          c.fillText('WINNER:PLAYER B',80,100);
       }}
}









   }

if(document.getElementById("clock").addEventListener("click", clockwise));
else if( document.getElementById("anticlock").addEventListener("click", anticlockwise));
else
{
  cx1=cx+(r*Math.cos(t*(Math.PI)/180));
cx2=cx-(r*Math.cos(t*(Math.PI)/180));
cy1=cy-(r*Math.sin(t*(Math.PI)/180));
cy2=cy+(r*Math.sin(t*(Math.PI)/180));
      
  c.beginPath();
  c.arc(cx, cy, r, 0, Math.PI * 2, false); 
  c.strokeStyle = '#ffffff';
  c.stroke();

  c.beginPath();
  c.arc(cx1, cy1, 20, 0, Math.PI * 2, false); 
  c.fillStyle = '#0000ff';
  c.fill();

  c.beginPath();
  c.arc(cx2, cy2, 20, 0, Math.PI * 2, false); 
  c.fillStyle = '#ff0000';
  c.fill();

}


y+=j1;

if(y>=(700*k))
{     i++;
      k++;   
    x = Math.floor((Math.random() * 100) + 80);
      w = Math.floor((Math.random() * 120) + 100);

}



  if(( Math.abs(cy1-y+(i*760))<=20 && (cx1>=(x) && cx1<=(x+w)))||( Math.abs(cx1-x)<=20  && (cy1>=(y-(i*760)) && cy1<=(y-(i*760)+30)))||(Math.abs(cy1-y+(i*760))==(Math.sqrt(2)*20) && Math.abs(-(x+w)+cx1)==(Math.sqrt(2)*20)))
  {    if(s2==0)
      {cancelAnimationFrame(cancelMe);

        s2+=1;
       multi();
      }
      else{
      cancelAnimationFrame(cancelMe);
      c.fillStyle = '#ffffff';
       c.font='80px Helvetica';
       c.fillText('GAME OVER',80,400);if(s1>s2)
       {
          c.fillStyle = '#ffffff';
          c.font='40px Helvetica';
          c.fillText('WINNER:PLAYER A',80,100);
       }
       else{
          c.fillStyle = '#ffffff';
          c.font='40px Helvetica';
          c.fillText('WINNER:PLAYER B',80,100);
       }}

  }



if( Math.abs(cy2-y+(i*760))<=20 && (cx2>=(x) && cx2<=(x+w)))
  { if(s2==0)
      {cancelAnimationFrame(cancelMe);

        s2+=1;
       multi();
      }
      else{
      cancelAnimationFrame(cancelMe);
      c.fillStyle = '#ffffff';
       c.font='80px Helvetica';
       c.fillText('GAME OVER',80,400);if(s1>s2)
       {
          c.fillStyle = '#ffffff';
          c.font='40px Helvetica';
          c.fillText('WINNER:PLAYER A',80,100);
       }
       else{
          c.fillStyle = '#ffffff';
          c.font='40px Helvetica';
          c.fillText('WINNER:PLAYER B',80,100);
       }}

  }

  if( Math.abs(cx2-x)<=20  && (cy2>=(y-(i*760)) && cy2<=(y-(i*760)+30)))
  { if(s2==0)
      {cancelAnimationFrame(cancelMe);

        s2+=1;
       multi();
      }
      else
     { cancelAnimationFrame(cancelMe);
      c.fillStyle = '#ffffff';
       c.font='80px Helvetica';
       c.fillText('GAME OVER',80,400);if(s1>s2)
       {
          c.fillStyle = '#ffffff';
          c.font='40px Helvetica';
          c.fillText('WINNER:PLAYER A',80,100);
       }
       else{
          c.fillStyle = '#ffffff';
          c.font='40px Helvetica';
          c.fillText('WINNER:PLAYER B',80,100);
       }}


  }



if(Math.abs(cy2-y+(i*760))==(Math.sqrt(2)*20) && Math.abs(-(x+w)+cx2)==(Math.sqrt(2)*20))
{ if(s2==0)
      {cancelAnimationFrame(cancelMe);

        s2+=1;
       multi();
      }
      else
  {cancelAnimationFrame(cancelMe);
  c.fillStyle = '#ffffff';
       c.font='80px Helvetica';
       c.fillText('GAME OVER',80,400);if(s1>s2)
       {
          c.fillStyle = '#ffffff';
          c.font='40px Helvetica';
          c.fillText('WINNER:PLAYER A',80,100);
       }
       else{
          c.fillStyle = '#ffffff';
          c.font='40px Helvetica';
          c.fillText('WINNER:PLAYER B',80,100);
       }}
}



if(s2==0)
{s1+=1;
  if(s1%1000==0)
  {
j1++;
  }
}
else{
s2+=1;
if(s2%1000==0)
{
  j1++;
}}
}


function power()
{

  
  
    r+=5;
    p=1;

  

}

function loveball()
{
cx1=cx+(r*Math.cos(t*(Math.PI)/180));
cx2=cx-(r*Math.cos(t*(Math.PI)/180));
cy1=cy-(r*Math.sin(t*(Math.PI)/180));
cy2=cy+(r*Math.sin(t*(Math.PI)/180));
      
  c.beginPath();
  c.arc(cx, cy, r, 0, Math.PI * 2, false); 
  c.strokeStyle = '#ffffff';
  c.stroke();

  c.beginPath();
  c.arc(cx1, cy1, 20, 0, Math.PI * 2, false); 
  c.fillStyle = 'pink';
  c.fill();

}
