// ===============================================
// ランディングページパラメータ連携JS
// ===============================================

function transfer(cp) {
    var paramName = ["route", "staff"];

    var tofu = document.getElementById("__tofu");
    if (tofu == null) {
        return;
    }
    var url = tofu.getAttribute("data-url");
    if (url == null || url == "") {
        return;
    }
    var params = location.search.substring(1).split('&');
    var p = "";
    params.forEach(function (value) {
        if (paramName.indexOf(value.split('=')[0]) >= 0) {
            p += '&' + value;
        }
    });
    if (p != "") {
        url += url.indexOf('?') > 0 ? '&' : '?';
        url += p.substring(1);
    }
    if (cp != null && cp != "") {
        url += url.indexOf('?') > 0 ? '&' : '?';
        url += "cp=" + cp;
    }
    console.log("URL:" + url);
    open(url, "_blank");
}