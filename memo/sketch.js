// ここにスケッチ名を指定することができる。
let sketchName = 'My Sketch';

// ロードが完了した時に実行する関数。ここで初期化の処理を書く。
// P5.jsやProcessingのsetupと同じ役割。
window.addEventListener('load', function () {
    // キャンバスの大きさを指定する。
    view.viewSize = new Size(500, 500);


    project.currentStyle = {
        strokeColor: null, // 線の色
        fillColor: null, // 塗りの色
        strokeWidth: 2 // 線の幅
    };
    Path.Rectangle([0, 0], [500, 500])
    let background=Path.Rectangle([0, 0], [500, 500])
    background.fillColor="#2d5244"


    function pickRandom(array) {
        let i = Math.floor(Math.random() * array.length);
        return array[i];
    }

    let randomRange = 7;

    let e =170

    for (let y = 0; y < view.viewSize.height +e; y += e) {
        for (let x = 0; x < view.viewSize.width+e; x += e) {
            for (let w = 0; w <108; w += 18) {
            let rand_x = Math.random() * randomRange - randomRange * 0.5;
            let rand_y = Math.random() * randomRange - randomRange * 0.5;
             let circle = Path.Circle([x + rand_x, y + rand_y], w);
 
            let colors = [
                '#99bec7',
                '#82a1ba',
                '#babfd1',
                '#76ade8',
                '#52a19e',
                '#798a85',
                '#fffbd9',

                
            ];            
            circle.strokeColor = pickRandom(colors);    
            }
        }
    }

    
    

    // 画面を描く。
    view.draw();
});