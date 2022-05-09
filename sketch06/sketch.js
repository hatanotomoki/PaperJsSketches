let sketchName = 'My Sketch';
window.addEventListener('load', function () {
    view.viewSize = new Size(500, 500);

    project.currentStyle = {
        strokeColor: "#ffffff", 
        fillColor: null, 
        strokeWidth: 2 
    };

   

    function pickRandom(array){
        let i = Math.floor(Math.random() * array.length);
        return array[i];
        }    

    let q=[
        "#ffffff",
        "#b0b0b0",
        "#595959",
        "#1a1a1a"
    ]

    for(x=0;x<500;x+=20){
        for(y=0;y<500;y+=10){
            Path.Rectangle([x,y],[20,10]);
        let A=Path.Rectangle([x,y],[20,10]);
        A.strokeColor=Color("#000000");
        A.fillColor=pickRandom(q);
        }
    }

    let S=Path.Rectangle([0, 0], [500, 500])
    S.fillColor="#000000"
    S.strokeColor=null
    let D=Path.Circle([250,250],250)

    let newPath=S.subtract(D)

    S.remove()
    D.remove()
   
view.draw();
});