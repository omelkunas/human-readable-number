module.exports = function toReadable (number) {
  if (number === 0) {
    return 'zero';
  };

  let str = number.toString();
  let readable = [];

  if (str.length === 3) {
    
    switch (str[0]) {
      case '0':
        break;
      case '1':
        readable.push('one hundred');
        break;
      case '2':
        readable.push('two hundred');
        break;
      case '3':
        readable.push('three hundred');
        break;
      case '4':
        readable.push('four hundred');
        break;
      case '5':
        readable.push('five hundred');
        break;
      case '6':
        readable.push('six hundred');
        break;
      case '7':
        readable.push('seven hundred');
        break;
      case '8':
        readable.push('eight hundred');
        break;
      case '9':
        readable.push('nine hundred');
        break;
    };
    str = str.slice(1);
  }

  if (str.length === 2) {
    
    switch (str[0]) {
      case '0':
        break;
      case '1':

        switch (str[1]) {
          case '0':
            readable.push('ten');
            str = '';
            break;
          case '1':
            readable.push('eleven');
            str = '';
            break;
          case '2':
            readable.push('twelve');
            str = '';
            break;
          case '3':
            readable.push('thirteen');
            str = '';
            break;
          case '4':
            readable.push('fourteen');
            str = '';
            break;
          case '5':
            readable.push('fifteen');
            str = '';
            break;
          case '6':
            readable.push('sixteen');
            str = '';
            break;
          case '7':
            readable.push('seventeen');
            str = '';
            break;
          case '8':
            readable.push('eighteen');
            str = '';
            break;
          case '9':
            readable.push('nineteen');
            str = '';
            break;
        }
        break;

      case '2':
        readable.push('twenty');
        break;
      case '3':
        readable.push('thirty');
        break;
      case '4':
        readable.push('forty');
        break;
      case '5':
        readable.push('fifty');
        break;
      case '6':
        readable.push('sixty');
        break;
      case '7':
        readable.push('seventy');
        break;
      case '8':
        readable.push('eighty');
        break;
      case '9':
        readable.push('ninety');
        break;
    }
    str = str.slice(1);
  }

  if (str.length === 1) {
    
    switch (str[0]) {
      case '0':
        break;
      case '1':
        readable.push('one');
        break;
      case '2':
        readable.push('two');
        break;
      case '3':
        readable.push('three');
        break;
      case '4':
        readable.push('four');
        break;
      case '5':
        readable.push('five');
        break;
      case '6':
        readable.push('six');
        break;
      case '7':
        readable.push('seven');
        break;
      case '8':
        readable.push('eight');
        break;
      case '9':
        readable.push('nine');
        break;
    }
  }

  return readable.join(' ');
};