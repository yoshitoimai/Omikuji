$(document).on("pageinit", "#home", function(e) {
	console.log("home pageinit start");
	
	//おみくじ画像を表示
	$("#result").attr("src","image/omikuji.png");
	
	//おみくじを引くボタンを表示
	$("#startBtnArea").css("display","");
	
	//スタート画面に戻るボタンを非表示
	$("#endBtnArea").css("display","none");

	$(this).on("click", "#startBtn", function(e){
		console.log("startBtn click");
		/*
		 * 乱数を取得する
		 * 0〜2までの整数を取得する
		 */
		var resultNum;
		//Math.random : 0以上1未満の小数を取得する
		//Math.floor : 小数点以下を切り捨てる
		resultNum = Math.floor( Math.random() * 3);
		console.log(resultNum);
		
		//画像を表示する
		/*
		 * Google画像で検索「イラスト　無料　おみくじ」
		 * 今回使用した画像 
		 * http://www.irasutoya.com/
		 * 季節の祝日・行事のイラスト → お正月のイラスト
		 */
		var fileName;
		if (resultNum==0){
			fileName = "image/omikuji_daikichi.png";
		} else if (resultNum==1) {
			fileName = "image/omikuji_chuukichi.png";
		} else {
			fileName = "image/omikuji_syoukichi.png";
		}
		console.log(fileName);
		$("#result").attr("src",fileName);
		
		//おみくじを引くボタンを非表示
		$("#startBtnArea").css("display","none");
		
		//スタート画面に戻るボタンを表示
		$("#endBtnArea").css("display","");
	});
	
	$(this).on("click", "#endBtn", function(e){
		console.log("endBtn click");
		
		//おみくじ画像を表示
		$("#result").attr("src","image/omikuji.png");
		
		//おみくじを引くボタンを表示
		$("#startBtnArea").css("display","");
		
		//スタート画面に戻るボタンを非表示
		$("#endBtnArea").css("display","none");
	});

});

