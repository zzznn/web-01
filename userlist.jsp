<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>用户列表</title>
</head>

<style>

</style>

<body>

<table border="1">
  <tr style="font-weight:bold">
    <td>用户名</td>
    <td>密码</td>
    <td>年龄</td>
    <td>住址</td>
  </tr>
  
  <c:forEach items="${userlist}" var="row">
	   <tr>
	    <td>${row.username }</td>
	    <td>${row.password }</td>
	    <td>${row.age }</td>
	    <td>${row.address }</td>
	    </tr>
  </c:forEach>





</table>

</body>
</html>