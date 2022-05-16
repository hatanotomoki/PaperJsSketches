let sketchName = 'My Sketch';
window.addEventListener('load', function () {
    view.viewSize = new Size(500, 500);

    project.currentStyle = {
        strokeColor: "#ffffff",
        fillColor: null,
        strokeWidth: 3
    };

    Path.Rectangle([0, 0], [500, 500])
    let background = Path.Rectangle([0, 0], [500, 500])
    background.fillColor = "#000000"
    background.strokeColor = null

    let randx1=Math.random()*100-50
    let randy1=Math.random()*100-50

    let rand_wide1=Math.random()*100+100
    let rand_hight1=Math.random()*100+100

    Path.Rectangle([randx1,randy1],[rand_wide1,rand_hight1])

    let count=10
    for(i=0;i<count;i++){
        let randx=Math.random()*50
        let randy=Math.random()*50

        let rand_wide=Math.random()*100+100
        let rand_hight=Math.random()*100+100    

        Path.Rectangle([rand_wide1+randx,randy1+randy],[rand_wide1+randx+rand_wide,randy1+randy+rand_hight])
    }

    view.draw();
});