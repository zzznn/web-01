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



function show() {
    alert("点击生效");
    // 页面跳转
    // window.open("http://www.baidu.com");
    // location.href = "http://www.baidu.com";

}
function delete01() {
    //confirm 有 确定 和 取消
    var result = confirm("你确定要删除吗？！");
    if  (result == true){
        //调用后台
        alert("删除成功！");
    }
}
