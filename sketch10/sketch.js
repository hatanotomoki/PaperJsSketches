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

    function pickRandom(array){
        let p=Math.floor(Math.random()*array.length)
        return array[p]
    }

    let q=[100,200]

    for (x=0;x<500;x+=pickRandom(q)){
        Path.Rectangle
    }
    

   
view.draw();
});