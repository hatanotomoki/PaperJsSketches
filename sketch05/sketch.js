let sketchName = 'My Sketch';
window.addEventListener('load', function () {
    view.viewSize = new Size(500, 500);

    project.currentStyle = {
        strokeColor: "#ffffff", 
        fillColor: null, 
        strokeWidth: 3 
    };

    Path.Rectangle([0, 0], [500, 500])
    let background=Path.Rectangle([0, 0], [500, 500])
    background.fillColor="#000000"
    background.strokeColor=null


    let w=Math.floor(Math.random()*(400-100)+100)

    for (let x=0;x<500;x+=w){
        for(let y=0;y<500;y+=w) {

            let q=Math.random()*300

            let randx=Math.random
            Path.Rectangle([x+q-150,y+q],[w,100])
        }
    }
   
view.draw();
});