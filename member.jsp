<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>


<head>
    <title>GET 방식 요청</title>
    <meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
</head>

<body bgcolor="#5A78AF">
    <link type="text/css" rel="stylesheet" href="test.css">

    <center>
        <h1 class="boxshadow1">회원가입이 완료되었습니다.</h1>
        <% String strName=request.getParameter("member_name");
         String strID=request.getParameter("member_id"); %>
        <table>
            <tr>
                <td>이름</td>
                <td><%=strName%></td>
            </tr>
            <tr>
                <td>아이디</td>
                <td><%=strID%></td>
            </tr>
        </table>
        
        <input type="button" onclick="javascript:window.close()" value="확인">
    </center>
</body>
