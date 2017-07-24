var request = (info) => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', encodeURI(info.url));
    xhr.onload = function() {
        if (xhr.status === 200) {
            info.succes(xhr.responseText, info);
        } else {
            info.error();
        }
    };
    xhr.send();
};