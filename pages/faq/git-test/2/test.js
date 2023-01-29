window.addEventListener('load', function () {
    fetch('data.json')
        .then(function (response) { return response.json(); })
        .then(function (json) {
        console.log(Object['values'](json[0]));
        Array.prototype
            .forEach
            .call(document.getElementsByTagName('input'), function (e, i) { return e.value = Object['values'](json[0])[i + 1]; });
    });
});