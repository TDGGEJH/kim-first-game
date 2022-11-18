var canv=document.getElementById('canvas')
var ctx=canv.getContext('2d')
var x = Math.floor(Math.random()*600)+1
var y = Math.floor(Math.random()*600)+1
var ex = Math.floor(Math.random()*600)+1
var ey = Math.floor(Math.random()*600)+1
var up
var down
var left
var right
var m_seconds=0
var seconds = 0
ctx.font = "100px calibri"
var cicl=setInterval(function () {
  ctx.fillStyle='black'
  ctx.fillRect(0,0,600,600)
  if(up && y>0)
    y-=5
  if(down && y<550)
    y+=5
  if(left && x>0)
    x-=5
  if(right && x<550)
    x+=5
  ctx.fillStyle='lime'
  ctx.fillRect(x,y,50,50)
  if(ex-25<x-25)
    ex+=3
  if(ex-25>x-25)
    ex-=3
  if(ey-25<y-25)
    ey+=3
  if(ey-25>y-25)
    ey-=3
  ctx.fillStyle='red'
  ctx.fillRect(ex,ey,50,50)
  if(x<ex+50 && x+50>ex && y<ey+50 && y+50>ey){
    ctx.fillStyle='yellow'
    ctx.fillText("Вы проиграли!",0,300)
    clearInterval(cicl)
    setTimeout(function(){
      window.location.reload()
    },2000)
  }
  m_seconds+=10
  if(m_seconds>=1000){
    m_seconds-=1000
    seconds++
  }
  ctx.fillStyle='blue'
  ctx.fillText(seconds,250,100)
}, 10)
document.addEventListener("keydown", function(event){
  if(event.keyCode == 87)
     up=true
  if(event.keyCode == 83)
     down=true
  if(event.keyCode == 65)
     left=true
  if(event.keyCode == 68)
     right=true
})
document.addEventListener("keyup", function(event){
  if(event.keyCode == 87)
     up=false
  if(event.keyCode == 83)
     down=false
  if(event.keyCode == 65)
     left=false
  if(event.keyCode == 68)
     right=false
})
