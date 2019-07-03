// ==UserScript==
// @name Clean Zhihu
// @namespace Violentmonkey Scripts
// @match https://www.zhihu.com/follow
// @grant none
// ==/UserScript==


var sameNames = [];

// 这里是屏蔽列表, 不想看的关键字写在这里就行了.
var gotohell = ["试驾","比亚迪","4S","踩刹车","追尾","高考","东经","柴油","刷题","发动机","球员","室友","王俊凯","情侣","组合子","藏南","TypeScript","阀值","四万亿","东风","标致","四等汉","汉化","《幻》"];

window.onload=function()
{
    var main = document.getElementsByClassName("Topstory-follow")[0];
    main.addEventListener("DOMNodeInserted", function() {
        hideItems();
    });
    function hideItems() {
        var items = document.getElementsByClassName("TopstoryItem");
        for (var i = 0; i < items.length; ++i) 
        {
            if (items[i].classList.contains("alreadyfucked")) continue;
            //console.log("doing" +　i);
            var title = items[i].getElementsByClassName("ContentItem-title");
            var a;
            if (title.length) a = title[0].getElementsByTagName("a");
            else continue;
            var text = a[0].innerHTML;
            for (var j = 0; j < gotohell.length; ++j) {
                if (text.match(gotohell[j])) {
                    console.log(gotohell[j]);
                    items[i].style.display = "none";
                }
            }
            //for (var jj = 0; jj < sameNames.length; ++jj) {
            //    if (text==sameNames[jj]) {
            //        console.log(sameNames[jj]);
            //        items[i].style.display = "none";
            //    }
            //}
            //sameNames.push(text);
            items[i].classList.add("alreadyfucked");
        }
    }

    
}