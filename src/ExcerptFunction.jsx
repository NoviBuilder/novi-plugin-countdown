export function validCountdown(element){
    if (!element) return false;
    return hasValidAttribute(element);
}

function hasValidAttribute(element){
    return novi.element.getAttribute(element, 'data-type') && novi.element.getAttribute(element, 'data-time');
}
