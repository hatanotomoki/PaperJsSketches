// ここにスケッチ名を指定することができる。
let sketchName = 'My Sketch';

// ロードが完了した時に実行する関数。ここで初期化の処理を書く。
// P5.jsやProcessingのsetupと同じ役割。
window.addEventListener('load', function() {
    // キャンバスの大きさを指定する。
    view.viewSize = new Size(500, 500);

    project.currentStyle = {
        strokeColor: '#ccbb49', // 線の色
        fillColor: '#c1c2a1', // 塗りの色
        strokeWidth: 1 // 線の幅
    };
   Path.Rectangle([0,0],[500,500])

   for(let a=0;a<500;a+=70)
   for(let b=0;b<500;b+=25)
   {let lineA=Path.Line([a,0],[a,500])
    let lineB=Path.Line([a+10,0],[a+10,500])
    let lineC=Path.Line([0,a],[500,a])
    let lineD=Path.Line([0,a+10],[500,a+10])

    let lineE=Path.Line([a+30,0],[a+30,500])
    let lineF=Path.Line([0,a+25],[500,a+25])
    let lineG=Path.Line([0,a+35],[500,a+35])
    let line1=Path.Line([0,a+20],[500,a+20])

    lineA.strokeColor=lineB.strokeColor='#ff0000';
    lineC.strokeColor=lineD.strokeColor='#8da37e';
    lineE.strokeColor='#000000'
    lineF.strokeColor=lineG.strokeColor=


    lineE.strokeWidth=lineF.strokeWidth=3;
    }
   
    // 画面を描く。
    view.draw();
});