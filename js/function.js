$(function() {

    setTime();

    // setinterval -----------------------------------------
    // ページが読み込まれた際に時間を設定
    setInterval(function() {
        // 一秒ごとに時間を設定
        setTime();

    }, 1000);

    
    // 時間を更新する関数
    function setTime() {
        const now = new Date();

        // 年
        const year = now.getFullYear();
        
        // 月
        const month = (now.getMonth() + 1).toString().padStart(2, "0");
    
        const monthList = [ "Janua", "February", "March", "April",  "May", "June", "July", "August", "September", "October", "November", "December"];
        const monthStr = monthList[now.getMonth()];
    
    
        // 日付　
        const date = now.getDate().toString().padStart(2, "0");
    
        //  時
        const hour = now.getHours().toString().padStart(2, "0");
    
        //  分
        const minute = now.getMinutes().toString().padStart(2, "0");
    
        //  秒　
        const second = now.getSeconds().toString().padStart(2, "0");
    
        //  週
        const weekList = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        const weekStr = weekList[now.getDay()];
    
    
        // 時間の置き換え
        $("#year").text(year);
        $("#month").text(month);
        $("#day").text(date);
        $("#day-of-week").text(weekStr);
        $("#hour").text(hour);
        $("#minute").text(minute);
        $("#second").text(second);
    }

})