let sketchName = 'My Sketch';
window.addEventListener('load', function () {
    view.viewSize = new Size(500, 500);

    project.currentStyle = {
        strokeColor: "#000000",
        fillColor: "#ffffff",
        strokeWidth: 2
    };

    Path.Rectangle([0, 0], [500, 500])
    let background = Path.Rectangle([0, 0], [500, 500])
    background.fillColor = "#ffffff"
    background.strokeColor = null

    function pickrandom(array) {
        let i = Math.floor(Math.random() * array.length)
        return array[i];
    };
    let e1 = new Path([[300, 300], [340, 350], [300, 420]]);
    let e2 = new Path([[300, 420], [335, 400], [380, 385], [420, 380]]);
    let e3 = new Path([[420, 380], [380, 360], [390, 340], [490, 300]]);
    let e4 = new Path([[490, 300],[420,300],[410, 280], [450, 220]]);
    let e5 = new Path([[450, 220], [350, 290], [350, 250]]);
    // let e6=new Path([[300,420],[350,400],[420,380]]);
    // let e7=new Path([[300,420],[350,400],[420,380]]);
    e1.smooth();
    e2.smooth();
    e3.smooth();
    e4.smooth();
    e5.smooth();
    // e6.smooth();

    let c4 = Path.Circle([250, 150], 70);
    let c1 = Path.Circle([180, 220], 90);
    let c3 = Path.Circle([320, 230], 90);
    let c5 = Path.Circle([280, 330], 80);
    let c2 = Path.Circle([200, 300], 90);





    // let q=c1.unite(c2);
    // let w=q.unite(c3);
    // let e=w.unite(c4);
    // let C=e.unite(c5);

    view.draw();
});