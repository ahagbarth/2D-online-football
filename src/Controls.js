window.addEventListener('keydown', event=>{
    if(event.key==='ArrowRight' && Ball.x < innerWidth){
        Ball.x += Ball.vx
    }
    if(event.key==='ArrowLeft' && Ball.x > 0){
        Ball.x -= Ball.vx
    }
    if(event.key==='ArrowDown' && Ball.x < innerHeight){
        Ball.y += Ball.vy
    }
    if(event.key==='ArrowUp' && Ball.x > 0){
        Ball.y -= Ball.vy
    }
    
})