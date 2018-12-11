function increaseValue(name) {
    var value = parseInt(document.getElementById(name).value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById(name).value = value;
  }
  
  function decreaseValue(name) {
    var value = parseInt(document.getElementById(name).value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById(name).value = value;
  }