/*
解決したい問題
グローバル変数を消す
hit()はボタンを押す度に実行されるためその都度変数が初期化される
*/

var textNum = 0;
var kaiwaNext = 0;
var markerFlg = false; //会話分岐用フラグ
var kaiwaPattern;

function hit(hitNo,sCount) {
    var text = document.getElementById("ctex");
    var win = document.getElementById("textwin");
    var mozi = document.getElementById("ptex");
    var btnNext = document.getElementById("next");
    var kao = document.getElementById("kao");
    var karada = document.getElementById("karada");
    var migite = document.getElementById("migite");
    var hidarite = document.getElementById("hidarite");
    var kosi = document.getElementById("kosi");
    win.style.visibility = "visible";
    mozi.style.visibility = "visible";
    btnNext.style.visibility = "visible";
    kao.style.visibility = "hidden";
    karada.style.visibility = "hidden";
    migite.style.visibility = "hidden";
    hidarite.style.visibility = "hidden";
    kosi.style.visibility = "hidden";
    //起点----------------------->
    if (hitNo == 0) {
        kaiwaPattern = Math.floor(Math.random() * 3);
        if (kaiwaPattern == 0) {
            text.innerHTML = "顔A";
        } else if (kaiwaPattern == 1) {
            text.innerHTML = "顔B";
        } else if (kaiwaPattern == 2) {
            text.innerHTML = "顔C";
        }
        kaiwaNext = 1;
    } else if (hitNo == 1) {
        kaiwaPattern = Math.floor(Math.random() * 3);
        if (kaiwaPattern == 0) {
            text.innerHTML = "体A";
        } else if (kaiwaPattern == 1) {
            text.innerHTML = "体B";
        } else if (kaiwaPattern == 2) {
            text.innerHTML = "体C";
        }
        kaiwaNext = 2;
    } else if (hitNo == 2) {
        kaiwaPattern = Math.floor(Math.random() * 3);
        if (kaiwaPattern == 0) {
            text.innerHTML = "左手A";
        } else if (kaiwaPattern == 1) {
            text.innerHTML = "左手B";
        } else if (kaiwaPattern == 2) {
            text.innerHTML = "左手C";
        }
        kaiwaNext = 4;
    } else if (hitNo == 3) {
        kaiwaPattern = Math.floor(Math.random() * 3);
        if (kaiwaPattern == 0) {
            text.innerHTML = "右手A";
        } else if (kaiwaPattern == 1) {
            text.innerHTML = "右手B";
        } else if (kaiwaPattern == 2) {
            text.innerHTML = "右手C";
        }
        kaiwaNext = 3;
    } else if (hitNo == 4) {
        kaiwaPattern = Math.floor(Math.random() * 3);
        if (kaiwaPattern == 0) {
            text.innerHTML = "腰A";
        } else if (kaiwaPattern == 1) {
            text.innerHTML = "腰B";
        } else if (kaiwaPattern == 2) {
            text.innerHTML = "腰C";
        }
        kaiwaNext = 5;
    } else if (hitNo == 5) {
        markerFlg = false;
        text.innerHTML = "食事";
        kaiwaNext = 6;
    } else if (hitNo == 6) {
        markerFlg = false;
        text.innerHTML = "遊び";
        kaiwaNext = 7;
    } else if (hitNo == 7) {
        markerFlg = false;
        text.innerHTML = "お店";
        kaiwaNext = 8;
    } else if (hitNo == 8) {
        markerFlg = false;
        text.innerHTML = "交通機関";
        kaiwaNext = 9;
    } else if (hitNo == 998) {
        if (sCount == 0) {
            text.innerHTML = "はじめまして。案内は私に任せてください。";
        } else if (sCount >= 1) {
            text.innerHTML = "お久しぶりです。今日も楽しみましょう。";
        }
        kaiwaNext = 998;
    } else if (hitNo == 999) {
        if (errorCount == 0) {
                text.innerHTML = "あのー何も聞こえないですよ。どうなってるんですか？";
            } else if (errorCount >= 1) {
                text.innerHTML = "現在地ロスト！トンネルですか？それとも迷子ですか？";
            }
            kaiwaNext = 999;
        }
        else if (hitNo == 1001) {
            text.innerHTML = "自宅テスト";
            kaiwaNext = 1001;
        } else if (hitNo == 1002) {
            text.innerHTML = "名市大食堂";
            kaiwaNext = 1002;
        } else if (hitNo == 2001) {
            text.innerHTML = "アーバン大須";
            kaiwaNext = 2001;
        } else if (hitNo == 3001) {
            text.innerHTML = "ポケセン";
            kaiwaNext = 3001;
        } else if (hitNo == 3002) {
            text.innerHTML = "お宝創庫堀田";
            kaiwaNext = 3002;
        } else if (hitNo == 4001) {
            text.innerHTML = "桜山";
            kaiwaNext = 4001;
        } else if (hitNo == 4002) {
            text.innerHTML = "上前津";
            kaiwaNext = 4002;
        } else if (hitNo == 4003) {
            text.innerHTML = "矢場町";
            kaiwaNext = 4003;
        } else if (hitNo == 4004) {
            text.innerHTML = "栄";
            kaiwaNext = 4004;
        }
        //起点ここまで-----------------------<

        if (hitNo == 100) {

            textNext(textNum);
            //顔タッチ----------------------->
            if (kaiwaNext == 1) {
                if (textNum == 1) {
                    if (kaiwaPattern == 0) {
                        text.innerHTML = "顔A2";
                    } else if (kaiwaPattern == 1) {
                        text.innerHTML = "顔B2";
                    } else if (kaiwaPattern == 2) {
                        text.innerHTML = "顔C2";
                    }
                } else if (textNum == 2) {
                    if (kaiwaPattern == 0) {
                        text.innerHTML = "顔A3";
                    } else if (kaiwaPattern == 1) {
                        text.innerHTML = "顔B3";
                    } else if (kaiwaPattern == 2) {
                        text.innerHTML = "顔C3";
                    }
                } else if (textNum == 3) {
                    textNum = 0;
                    text.innerHTML = "";
                    vorh();
                }
                //顔タッチここまで-----------------------<
                //体タッチ----------------------->
            } else if (kaiwaNext == 2) {
                if (textNum == 1) {
                    if (kaiwaPattern == 0) {
                        text.innerHTML = "体A2";
                    } else if (kaiwaPattern == 1) {
                        text.innerHTML = "体B2";
                    } else if (kaiwaPattern == 2) {
                        text.innerHTML = "体C2";
                    }
                } else if (textNum == 2) {
                    if (kaiwaPattern == 0) {
                        text.innerHTML = "体A3";
                    } else if (kaiwaPattern == 1) {
                        text.innerHTML = "体B3";
                    } else if (kaiwaPattern == 2) {
                        text.innerHTML = "体C3";
                    }
                } else if (textNum == 3) {
                    textNum = 0;
                    text.innerHTML = "";
                    vorh();
                }
                //体タッチここまで-----------------------<
                //右手タッチ----------------------->
            } else if (kaiwaNext == 3) {
                if (textNum == 1) {
                    if (kaiwaPattern == 0) {
                        text.innerHTML = "右手A2";
                    } else if (kaiwaPattern == 1) {
                        text.innerHTML = "右手B2";
                    } else if (kaiwaPattern == 2) {
                        text.innerHTML = "右手C2";
                    }
                } else if (textNum == 2) {
                    if (kaiwaPattern == 0) {
                        text.innerHTML = "右手A3";
                    } else if (kaiwaPattern == 1) {
                        text.innerHTML = "右手B3";
                    } else if (kaiwaPattern == 2) {
                        text.innerHTML = "右手C3";
                    }
                } else if (textNum == 3) {
                    textNum = 0;
                    text.innerHTML = "";
                    vorh();
                }
                //右手タッチここまで-----------------------<
                //左手タッチ----------------------->
            } else if (kaiwaNext == 4) {
                if (textNum == 1) {
                    if (kaiwaPattern == 0) {
                        text.innerHTML = "左手A2";
                    } else if (kaiwaPattern == 1) {
                        text.innerHTML = "左手B2";
                    } else if (kaiwaPattern == 2) {
                        text.innerHTML = "左手C2";
                    }
                } else if (textNum == 2) {
                    if (kaiwaPattern == 0) {
                        text.innerHTML = "左手A3";
                    } else if (kaiwaPattern == 1) {
                        text.innerHTML = "左手B3";
                    } else if (kaiwaPattern == 2) {
                        text.innerHTML = "左手C3";
                    }
                } else if (textNum == 3) {
                    textNum = 0;
                    text.innerHTML = "";
                    vorh();
                }
                //左手タッチここまで-----------------------<
                //腰タッチ----------------------->
            } else if (kaiwaNext == 5) {
                if (textNum == 1) {
                    if (kaiwaPattern == 0) {
                        text.innerHTML = "腰A2";
                    } else if (kaiwaPattern == 1) {
                        text.innerHTML = "腰B2";
                    } else if (kaiwaPattern == 2) {
                        text.innerHTML = "腰C2";
                    }
                } else if (textNum == 2) {
                    if (kaiwaPattern == 0) {
                        text.innerHTML = "腰A3";
                    } else if (kaiwaPattern == 1) {
                        text.innerHTML = "腰B3";
                    } else if (kaiwaPattern == 2) {
                        text.innerHTML = "腰C3";
                    }
                } else if (textNum == 3) {
                    textNum = 0;
                    text.innerHTML = "";
                    vorh();
                }
                //腰タッチここまで-----------------------<
                //食事タッチ----------------------->
            } else if (kaiwaNext == 6) {
                if (textNum == 1) {
                    text.innerHTML = "どこかいいところあったかなぁ";
                    makeMarker();
                } else if (textNum == 2) {
                    if (markerFlg == true) {
                        text.innerHTML = "うん！ここなんてどうかな？";
                    } else if (markerFlg == false) {
                        text.innerHTML = "ごめんなさい、今度会う時までに調べておくね";
                    }

                } else if (textNum == 3) {
                    textNum = 0;
                    text.innerHTML = "";
                    vorh();
                }
                //食事タッチここまで-----------------------<
                //遊びタッチ----------------------->
            } else if (kaiwaNext == 7) {
                if (textNum == 1) {
                    text.innerHTML = "そうですねぇ・・・";
                    makeMarker();
                } else if (textNum == 2) {
                    if (markerFlg == true) {
                        text.innerHTML = "結構あるんですよ！行きましょう！";
                    } else if (markerFlg == false) {
                        text.innerHTML = "何もなくて・・・休日はあまり出ないんです";
                    }
                } else if (textNum == 3) {
                    textNum = 0;
                    text.innerHTML = "";
                    vorh();
                }
                //遊びタッチここまで-----------------------<
                //買い物タッチ----------------------->
            } else if (kaiwaNext == 8) {
                if (textNum == 1) {
                    text.innerHTML = "ここら辺でしたら・・・";
                    makeMarker();
                } else if (textNum == 2) {
                    if (markerFlg == true) {
                        text.innerHTML = "こんなところでしょうか";
                    } else if (markerFlg == false) {
                        text.innerHTML = "ごめんなさい、この辺あまり知らなくて・・・";
                    }

                } else if (textNum == 3) {
                    textNum = 0;
                    text.innerHTML = "";
                    vorh();
                }
                //買い物タッチここまで-----------------------<
                //交通機関タッチ----------------------->
            } else if (kaiwaNext == 9) {
                if (textNum == 1) {
                    text.innerHTML = "そうですね・・・地下鉄とかは・・・";
                    makeMarker();
                } else if (textNum == 2) {
                    if (markerFlg == true) {
                        text.innerHTML = "近くにありますね。";
                    } else if (markerFlg == false) {
                        text.innerHTML = "田舎はきついです・・・。。";
                    }
                } else if (textNum == 3) {
                    textNum = 0;
                    text.innerHTML = "";
                    vorh();
                }
                //交通機関タッチここまで-----------------------<
            } else if (kaiwaNext == 998) {
                if (textNum == 1) {
                    textNum = 0;
                    text.innerHTML = "";
                    vorh();
                }
            } else if (kaiwaNext == 999) {
                if (textNum == 1) {
                    text.innerHTML = "とにかく移動しましょう。";
                } else if (textNum == 2) {
                    textNum = 0;
                    text.innerHTML = "";
                    vorh();
                }
            } else if (kaiwaNext == 1001) {
                if (textNum == 1) {
                    text.innerHTML = "<font color='red'>自宅テストダミー2</font>";
                } else if (textNum == 2) {
                    text.innerHTML = "新規タブを開きます";
                } else if (textNum == 3) {
                    textNum == 0;
                    text.innerHTML = "";
                    vorh();
                    window.open("https://www.google.co.jp/");
                }
            } else if (kaiwaNext == 1002) {
                if (textNum == 1) {
                    text.innerHTML = "";
                } else if (textNum == 2) {
                    text.innerHTML = "";
                } else if (textNum == 3) {
                    text.innerHTML = "";
                    vorh();
                    window.open("https://www.nagoya-cu.ac.jp/");
                }
            } else if (kaiwaNext == 2001) {
                if (textNum == 1) {
                    text.innerHTML = "";
                } else if (textNum == 2) {
                    text.innerHTML = "";
                } else if (textNum == 3) {
                    text.innerHTML = "";
                    vorh();
                    window.open("https://www.taito.co.jp/gc/store/00002180");
                }
            } else if (kaiwaNext == 3001) {
                if (textNum == 1) {
                    text.innerHTML = "";
                } else if (textNum == 2) {
                    text.innerHTML = "";
                } else if (textNum == 3) {
                    text.innerHTML = "";
                    vorh();
                    window.open("https://www.pokemon.co.jp/gp/pokecen/nagoya/");
                }
            } else if (kaiwaNext == 3002) {
                if (textNum == 1) {
                    text.innerHTML = "";
                } else if (textNum == 2) {
                    text.innerHTML = "";
                } else if (textNum == 3) {
                    text.innerHTML = "";
                    vorh();
                    window.open("https://www.otakarasouko.com/category/otakarasouko_horita/");
                }
            } else if (kaiwaNext == 4001) {
                if (textNum == 1) {
                    text.innerHTML = "";
                } else if (textNum == 2) {
                    text.innerHTML = "それでは時刻表を開きますね。";
                } else if (textNum == 3) {
                    text.innerHTML = "";
                    vorh();
                    window.open("http://ekikara.jp/newdata/station/23108041.htm");
                }
            } else if (kaiwaNext == 4002) {
                if (textNum == 1) {
                    text.innerHTML = "";
                } else if (textNum == 2) {
                    text.innerHTML = "それでは時刻表を開きますね。";
                } else if (textNum == 3) {
                    text.innerHTML = "";
                    vorh();
                    window.open("http://www.ekikara.jp/newdata/station/23106091.htm");
                }
            } else if (kaiwaNext == 4003) {
                if (textNum == 1) {
                    text.innerHTML = "";
                } else if (textNum == 2) {
                    text.innerHTML = "それでは時刻表を開きますね。";
                } else if (textNum == 3) {
                    text.innerHTML = "";
                    vorh();
                    window.open("http://www.ekikara.jp/newdata/station/23106081.htm");
                }
            } else if (kaiwaNext == 4004) {
                if (textNum == 1) {
                    text.innerHTML = "";
                } else if (textNum == 2) {
                    text.innerHTML = "それでは時刻表を開きますね。";
                } else if (textNum == 3) {
                    text.innerHTML = "";
                    vorh();
                    window.open("http://www.ekikara.jp/newdata/station/23106051.htm");
                }
            }
        }
        //マーカークリック時


    }

    function textNext() {
        if (textNum == 0) {
            console.log("textNum=0");
            textNum++;
        } else if (textNum == 1) {
            console.log("textNum=1");
            textNum++;
        } else if (textNum == 2) {
            console.log("textNum=2");
            textNum++;
        } else if (textNum == 3) {
            console.log("textNum=3");
            textNum++;
        } else if (textNum == 4) {
            console.log("textNum=4");
            textNum++;
        } else if (textNum == 5) {
            console.log("textNum=5");
            textNum++;
        } else if (textNum == 6) {
            console.log("textNum=6");
            textNum++;
        } else if (textNum == 7) {
            console.log("textNum=7");
            textNum++;
        } else if (textNum == 8) {
            console.log("textNum=8");
            textNum++;
        } else if (textNum == 9) {
            console.log("textNum=9");
            textNum++;
        }

        return textNum;
    }

    function vorh() {
        var win = document.getElementById("textwin");
        var mozi = document.getElementById("ptex");
        var btnNext = document.getElementById("next");
        mozi.style.visibility = "hidden";
        win.style.visibility = "hidden";
        btnNext.style.visibility = "hidden";
        kao.style.visibility = "visible";
        karada.style.visibility = "visible";
        migite.style.visibility = "visible";
        hidarite.style.visibility = "visible";
        kosi.style.visibility = "visible";
    }

    //マーカーを格納するための変数
    var testZitaku;
    var syokudo_Meishidai;
    var taitoStation_kamimaezu;
    var pokemonCenterNagoya;
    var otakarasoukoHotta;

    var sakurayama;
    var sakae;
    var kamimaezu;
    var yabatyou;

    function makeMarker() {
        markerFlg = false;
        ymap.removeFeature(testZitaku);
        ymap.removeFeature(syokudo_Meishidai);
        ymap.removeFeature(taitoStation_kamimaezu);
        ymap.removeFeature(pokemonCenterNagoya);
        ymap.removeFeature(otakarasoukoHotta);
        ymap.removeFeature(sakurayama);
        ymap.removeFeature(kamimaezu);
        ymap.removeFeature(yabatyou);
        ymap.removeFeature(sakae);
        if (kaiwaNext == 6) {
            console.log("ええ");
            //緯度, 経度
            //35.138481, 136.925689名市大
            //35.4611057, 137.4196413家
            //35.125807, 136.919695お宝創庫堀田
            //35.138019, 136.933405桜山駅
            //35.157565, 136.905765上前津駅
            //35.165310, 136.908453矢場町駅
            //35.170049, 136.908533栄駅
            //デスクトップからのテスト変数
            var testZitakuLatMax = 35.4611057 + 1000 * latPer1m;
            var testZitakuLatMin = 35.4611057 - 1000 * latPer1m;
            var testZitakuLngMax = 137.4196413 + 1000 * latPer1m;
            var testZitakuLngMin = 137.4196413 - 1000 * latPer1m;
            //デスクトップからのテスト変数ここまで

            if (testZitakuLatMin < lat &&
                lat < testZitakuLatMax &&
                testZitakuLngMin < lng &&
                lng < testZitakuLngMax) {
                testZitaku = new Y.Marker(new Y.LatLng(35.4611057 + 10 * latPer1m, 137.4196413));
                ymap.addFeature(testZitaku);
                testZitaku.setClickable(true);
                testZitaku.bind('click', function () {
                    hit(1001);
                });
                markerFlg = true;
            }
            //名市大滝子キャンパスの食堂
            if (35.138481 - 1000 * latPer1m < lat &&
                lat < 35.138481 + 1000 * latPer1m &&
                136.925689 - 1000 * lngPer1m < lng &&
                lng < 136.925689 + 1000 * lngPer1m) {
                syokudo_Meishidai = new Y.Marker(new Y.LatLng(35.138183, 136.927062));
                ymap.addFeature(syokudo_Meishidai);
                syokudo_Meishidai.setClickable(true);
                syokudo_Meishidai.bind('click', function () {
                    hit(1002);
                });
                markerFlg = true;
            }
        } else if (kaiwaNext == 7) {
            if (35.4611057 - 1000 * latPer1m < lat &&
                lat < 35.4611057 + 1000 * latPer1m && 137.4196413 - 1000 * lngPer1m < lng &&
                lat < 137.4196413 + 1000 * lngPer1m) {
                markerFlg = true;
            }

            //35.159590, 136.905181タイトーフェドラ
            if (35.159590 - 1000 * latPer1m < lat &&
                lat < 35.159590 + 1000 * latPer1m &&
                136.905181 - 1000 * lngPer1m < lng &&
                lng < 136.905181 + 1000 * lngPer1m) {
                taitoStation_kamimaezu = new Y.Marker(new Y.LatLng(35.159590, 136.905181));
                ymap.addFeature(taitoStation_kamimaezu);
                taitoStation_kamimaezu.setClickable(true);
                taitoStation_kamimaezu.bind('click', function () {
                    hit(2001);
                });
                markerFlg = true;
            }
        } else if (kaiwaNext == 8) {

            //35.165108, 136.907629ポケモンセンターナゴヤ
            if (35.165108 - 1000 * latPer1m < lat &&
                lat < 35.165108 + 1000 * latPer1m &&
                136.907629 - 1000 * lngPer1m < lng &&
                lng < 136.907629 + 1000 * lngPer1m) {
                pokemonCenterNagoya = new Y.Marker(new Y.LatLng(35.165108, 136.907629));
                ymap.addFeature(pokemonCenterNagoya);
                pokemonCenterNagoya.setClickable(true);
                pokemonCenterNagoya.bind('click', function () {
                    hit(3001);
                });
                markerFlg = true;
            }
            //35.125807, 136.919695お宝創庫堀田
            if (35.125807 - 2000 * latPer1m < lat &&
                lat < 35.125807 + 2000 * latPer1m &&
                136.919695 - 2000 * lngPer1m < lng &&
                lng < 136.919695 + 2000 * lngPer1m) {
                otakarasoukoHotta = new Y.Marker(new Y.LatLng(35.125807, 136.919695));
                ymap.addFeature(otakarasoukoHotta);
                otakarasoukoHotta.setClickable(true);
                otakarasoukoHotta.bind('click', function () {
                    hit(3002);
                });
                markerFlg = true;
            }

            if (markerFlg == false) {
                console.log("周囲にスポットが設定されていない場合の処理を行います");
            }
        } else if (kaiwaNext == 9) {
            //桜山
            if (35.138019 - 2500 * latPer1m < lat &&
                lat < 35.138019 + 2500 * latPer1m &&
                136.933405 - 2500 * lngPer1m < lng &&
                lng < 136.933405 + 2500 * lngPer1m) {
                sakurayama = new Y.Marker(new Y.LatLng(35.138019, 136.933405));
                ymap.addFeature(sakurayama);
                sakurayama.setClickable(true);
                sakurayama.bind('click', function () {
                    hit(4001);
                });
                markerFlg = true;
            }
            //上前津
            if (35.157565 - 2500 * latPer1m < lat &&
                lat < 35.157565 + 2500 * latPer1m &&
                136.905765 - 2500 * lngPer1m < lng &&
                lng < 136.905765 + 2500 * lngPer1m) {
                kamimaezu = new Y.Marker(new Y.LatLng(35.157565, 136.905765));
                ymap.addFeature(kamimaezu);
                kamimaezu.setClickable(true);
                kamimaezu.bind('click', function () {
                    hit(4002);
                });
                markerFlg = true;
            }
            //矢場町
            if (35.165310 - 2500 * latPer1m < lat &&
                lat < 35.165310 + 2500 * latPer1m &&
                136.908453 - 2500 * lngPer1m < lng &&
                lng < 136.908453 + 2500 * lngPer1m) {
                yabatyou = new Y.Marker(new Y.LatLng(35.165310, 136.908453));
                ymap.addFeature(yabatyou);
                yabatyou.setClickable(true);
                yabatyou.bind('click', function () {
                    hit(4003);
                });
                markerFlg = true;
            }
            //栄
            if (35.170049 - 2500 * latPer1m < lat &&
                lat < 35.170049 + 2500 * latPer1m &&
                136.908533 - 2500 * lngPer1m < lng &&
                lng < 136.908533 + 2500 * lngPer1m) {
                sakae = new Y.Marker(new Y.LatLng(35.170049, 136.908533));
                ymap.addFeature(sakae);
                sakae.setClickable(true);
                sakae.bind('click', function () {
                    hit(4004);
                });
                markerFlg = true;
            }
        }
    }
