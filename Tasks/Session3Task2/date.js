
var getDate = function() {
    return new Date().toLocaleDateString();
}

var getTime = function() {
    return new Date().toLocaleTimeString();
}

var getDateTime = function() {
    return getDate() + " " + getTime();
}

module.exports = {
    getDate,
    getTime,
    getDateTime
}