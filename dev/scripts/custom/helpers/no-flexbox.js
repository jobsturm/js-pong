// this is necessary because flexbox wasn't working as it was supposed to be on iOS.

// that camelcase hurts
const checkFlexBox = () => {
    try {
        var supportFlex = CSS.supports("display", "flex");
        if (supportFlex) return true;

        noFlexFound();
        return false;
    } catch (e) {
        noFlexFound();
        return false;
    }
}

const noFlexFound = () => {
    document.body.classList.add("no-flex");
}  