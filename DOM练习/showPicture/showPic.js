/**
 * Created by taorongaa on 16/5/25.
 */
function showPic(pic){
    var source = pic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
}