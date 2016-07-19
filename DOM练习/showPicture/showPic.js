/**
 * Created by taorongaa on 16/5/25.
 */

function addLoadEvent(func){
    var oldOnload = window.onload;
    if(typeof oldOnload != 'function'){
        window.onload = func;
    }else {
        window.onload=function(){
            oldOnload();
            func();
        }
    }
}
function insertAfter(newElement,targetElement){
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}
function preparePlaceholder(){
    if(!document.getElementById) return false;
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    if(!document.getElementById('imagegallery')) return false;
    var placeholder = document.createElement('img');
    placeholder.setAttribute('id','placeholder');
    placeholder.setAttribute('src','../images/placeholder.git');
    placeholder.setAttribute('alt','my image gallery');
    var description = document.createElement('p');
    description.setAttribute('id','description');
    var destxt = document.createTextNode('Choose an image.');
    description.appendChild(destxt);
    var gallery = document.getElementById('imagegallery');
    insertAfter(placeholder,gallery);
    insertAfter(description,placeholder);
}

function prepareGallery(){
    if(!document.getElementsByTagName){
        return false;
    }
    if(!document.getElementById){
        return false;
    }
    if(!document.getElementById('imagegallery')){
        return false;
    }
    var gallery = document.getElementById('imagegallery');
    var link = gallery.getElementsByTagName('a');
    for(var i = 0;link.length>i;i++){
        link[i].onclick = function(){
            return showPic(this) ? false : true;
        };
    }
}

/**
 * 将ID为placeholder的元素里的SRC设置为pic中href的内容
 * @param pic 被点击的a标签
 */
function showPic(pic){
    if(!document.getElementById('placeholder')){
        return false;
    }
    var source = pic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
    if(document.getElementById('description')){
        var text = pic.getAttribute("title") ? pic.getAttribute('title') : '';
        var description = document.getElementById("description");
        if (description.firstChild.nodeType == 3){
            description.firstChild.nodeValue = text;
        }
    }
    return true;
}
addLoadEvent(prepareGallery);
addLoadEvent(preparePlaceholder);
