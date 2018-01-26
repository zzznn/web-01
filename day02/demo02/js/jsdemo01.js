$(document).ready(function() {

    $("#btn1").click(function () {
        var name = $("#name").val();
        var fenshu = $("#fenshu").val();
        if (name == "" || fenshu == ""){
            alert("姓名与分数不能为空！！！");
        }
        else if ( fenshu > 100 || fenshu <0){
            alert("分数区间为：0 - 100"+"\n请重新输入！")
        }
        else if (fenshu < 60){
            alert("姓名："+name + "\n分数："+fenshu + "\n等级："+ "不及格");
        }
        else if ( 80 < fenshu){
            alert("姓名："+name + "\n分数："+fenshu  + "\n等级："+ "优秀");
        }
        else {
            alert("姓名："+name + "\n分数："+fenshu  + "\n等级："+ "良好");
        }

    });
});


$(document).keyup(function(event){
    if(event.keyCode ==13){
        $("#btn1").trigger("click");
    }
});


function showTime() {
//将时间输入到文本框 动态变化
    var  cTime = new Date();
    //alert(cTime);
    var hhh = cTime.getHours();
    var mmm = cTime.getMinutes();
    var sss = cTime.getSeconds();
    document.getElementById("timeID").value=hhh+":"+mmm+":"+sss;
    setTimeout("showTime()",1000);//递归调用本身
}
