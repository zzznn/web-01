<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
    <%
    String username=request.getParameter("username");

    
    %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>登陆页面</title>
</head>

<style>
div{padding:10px}
</style>

<body>

<form action="LoginServlet" method="post">
<div>
 用户名：<input type="text" name="username" value="<%=username%>"/>
 </div>
 <div>
 密　码：<input type="password" name="password"/>
  </div>
  <div>
 <input type="submit" value="登陆"/>
  </div>
</form>

</body>
</html>