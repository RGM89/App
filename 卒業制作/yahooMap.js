/*
課題
マーカーをsFの外で宣言、sF実行の度に宣言しないようにする
removeFeatureで既存マーカーを消す

マーカー、緯度経度をグローバル変数かオブジェクトに格納？
*/

'use strict';

//グローバル変数
var ymap = new Y.Map("ymap", {
    configure: {
        doubleClickZoom: true,
        scrollWheelZoom: true,
        singleClickPan: true,
        dragging: true
    }
});

var lat;
var lng;

var latPer1m = 0.000008983148616; //1mあたり緯度
var lngPer1m = 0.000010966382364; //1mあたり経度

var aboutGPS = {
    count: 0, //処理回数
    lastTime: 0, //前回のGPS更新時間
    marker: null,
}
var errorCount = 0;
var startCount = 0;
var hazimemasite = true;
var storage = window.localStorage;

//マップ作成
window.onload = function () {
    ymap.drawMap(new Y.LatLng(35.66572, 139.73100), 18, Y.LayerSetId.NORMAL);
    var marker = 0;
    var marker3 = 0;
    var watchId = navigator.geolocation.watchPosition(sF, eF, opt);
    var genzaiti = new Y.Icon('./genzaiti.png');

    //現在地を取得、現在地にマーカーを立てて中心にする
    function sF(position) {
        console.log(position);
        console.log(marker + ":" + marker3);
        var date = position.coords;
        lat = date.latitude;
        lng = date.longitude;
        var latlng = new Y.LatLng(lat, lng);

        var nowTime = ~~(new Date() / 1000); // UNIX Timestamp

        if ((aboutGPS.lastTime + 3) > nowTime) {
            return false;
        }

        ++aboutGPS.count;
        console.log("緯度" + lat + "経度" + lng + "処理回数" + aboutGPS.count);
        console.log("緯度" + lat + "経度" + lng + "処理回数" + aboutGPS.count);
        //ポイント 緯度35.138247799999995経度136.9261442

        aboutGPS.lastTime = nowTime; //前回の時間を更新

        ymap.removeFeature(marker);
        marker = new Y.Marker(new Y.LatLng(lat, lng), {
            icon: genzaiti
        }); //現在地マーカー作成

        var info = marker.getLatLng() //動作テスト

        ymap.addFeature(marker);
        ymap.panTo(new Y.LatLng(lat, lng), true);
        marker.setClickable(true);

        if (aboutGPS.count != 1) {
            return false;
        }
        //latLngTest(lat, lng);

        var SC = localStorage.getItem("count");
        if (hazimemasite == true) {
            hit(998,SC);
            hazimemasite = false;
        }
        startCount++;
        errorCount++;
        localStorage.setItem("count",startCount);
    }

    function eF(error) {
        console.log(error.cord);
        hit(999);
    }

    var opt = {
        "timeout": 8000
    }

    //デバッグ用　方向キーで緯度経度を操作、マーカーの移動を確認したい
    /*function latLngTest(lat, lng) {
        window.addEventListener("keydown", function (event) {
            var key = event.keyCode;
            if (key == 39) {
                lng += lngPer1m * 20;
                console.log("右");
                makeMaker(lat, lng);
            } else if (key == 37) {
                lng -= lngPer1m * 20;
                console.log("左");
                makeMaker(lat, lng);
            } else if (key == 38) {
                lat += latPer1m * 20;
                console.log("上");
                makeMaker(lat, lng);
            } else if (key == 40) {
                lat -= latPer1m * 20;
                console.log("下");
                makeMaker(lat, lng);
            } else {
                console.log("無効な入力");
            }
        });
    }

    function makeMaker(lat, lng) {
        if (marker3 == null) {
            ymap.removeFeature(marker3);
            console.log("marker3には何も格納されていません");
        }
        console.log("remove");
        ymap.removeFeature(marker3);
        marker3 = new Y.Marker(new Y.LatLng(lat, lng));
        if (marker3 != null) {
            ymap.removeFeature(marker3);
            console.log("marker3にマーカーが格納されています");
        }
        console.log("marker3のインスタンス直後");
        //console.log(JSON.stringify(marker3)+"：マーカーをインスタンス化した直後");
        ymap.addFeature(marker3);
        ymap.panTo(new Y.LatLng(lat, lng), true);
        console.log("makeMarkerEnd");
    }*/
}
