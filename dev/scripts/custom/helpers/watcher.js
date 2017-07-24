// Written by Job Sturm.
const watch = {};

watch.init = () => {
};

watch.theFollowing = (objectDotKey, exec) => {
    if (objectDotKey.indexOf(".")) {
        const objectDotKeySplitted = objectDotKey.split(".");
        var object = objectDotKeySplitted[0];
        var key = objectDotKeySplitted[1];
        
        if (objectDotKeySplitted[2]) {
            key = objectDotKeySplitted[2];
            object =  window[objectDotKeySplitted[0]][objectDotKeySplitted[1]];
        } else {
            object = window[objectDotKeySplitted[0]];
        }
        
        object.watch(key, (id, oldval, newval) => {
            setTimeout(() => {
                exec();
            }, 1);
            return newval;
        });
    } else {
        console.warn(objectDotKey, " is not executing ", exec, " because there is no dot in the string you have tried to watch.")
    }
}