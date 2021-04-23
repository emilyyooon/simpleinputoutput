var select = document.getElementById('moods');
var input = document.getElementById('replies');
select.onchange = function() {
    input.value = select.value;
}