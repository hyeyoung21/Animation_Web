<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>

<head>
    <title>메뉴 프레임</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <script src="test.js"></script>
</head>
<link type="text/css" rel="stylesheet" href="test.css">


<body bgcolor="white" text=#2f7abd>

    <fieldset>
        <center>
            <form name="loginForm" method="get" action="index.html" target="_top">

                <script type="text/javascript">
                    <% String strID = request.getParameter("id"); %>
                    var strName = "<%= strID %>";
                    document.write(findName(strName) + " 님!!<br/>반갑습니다.<br>");

                </script>

                <p align="center"><input type="submit" value="로그아웃"></p>
            </form>
        </center>
    </fieldset>

    <br><br><br><br>
</body>

</html>
