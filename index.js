function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
  return 'Welcome,' + ' ' + newName + '.' + ' ' + 'You are number' + ' ' + katzDeliLine.length + ' ' + 'in line.';
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    var serve = katzDeliLine[0];
      katzDeliLine.shift();
    }
  return 'Currently serving' + ' ' + serve + '.';
}

function currentline(katzDeliLine) {
  var str = 'The line is currently:';
  for (var i = 0; i < katzDeliLine.length; i++) {
    var person = katzDeliLine[i];
    str += ' ' + (i + 1) + '.' + ' ' +
  }
}
