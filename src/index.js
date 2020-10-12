module.exports = function toReadable(number) {
    let arr = number.toString().split('');
    let result = '';
    switch (arr.length) {
        case 1:
            arr.unshift('0', '0');
            break;
        case 2:
            arr.unshift('0');
            break;
    }
    switch (arr[0]) {
        case '0':
            break;
        case '1':
            result = 'one hundred';
            break;
        case '2':
            result = 'two hundred';
            break;
        case '3':
            result = 'three hundred';
            break;
        case '4':
            result = 'four hundred';
            break;
        case '5':
            result = 'five hundred';
            break;
        case '6':
            result = 'six hundred';
            break;
        case '7':
            result = 'seven hundred';
            break;
        case '8':
            result = 'eight hundred';
            break;
        case '9':
            result = 'nine hundred';
            break;
    }
    if (arr[0] != '0' && (arr[1] != '0' || arr[2] != '0')) {
        result = result + ' ';
    }
    switch (arr[1]) {
        case '0':
            if (arr[2] != '0') {
                result = result.slice(0, -1);
            }
            break;
        case '2':
            result = result + 'twenty';
            break;
        case '3':
            result = result + 'thirty';
            break;
        case '4':
            result = result + 'forty';
            break;
        case '5':
            result = result + 'fifty';
            break;
        case '6':
            result = result + 'sixty';
            break;
        case '7':
            result = result + 'seventy';
            break;
        case '8':
            result = result + 'eighty';
            break;
        case '9':
            result = result + 'ninety';
            break;
        case '1':
            switch (arr[2]) {
                case '0':
                    result = result + 'ten';
                    return result;
                case '1':
                    result = result + 'eleven';
                    return result;
                case '2':
                    result = result + 'twelve';
                    return result;
                case '3':
                    result = result + 'thirteen';
                    return result;
                case '4':
                    result = result + 'fourteen';
                    return result;
                case '5':
                    result = result + 'fifteen';
                    return result;
                case '6':
                    result = result + 'sixteen';
                    return result;
                case '7':
                    result = result + 'seventeen';
                    return result;
                case '8':
                    result = result + 'eighteen';
                    return result;
                case '9':
                    result = result + 'nineteen';
                    return result;
            }
    }

    if ((arr[1] != '0' || arr[0] != '0') && arr[2] != '0') {
        result = result + ' ';
    };

    switch (arr[2]) {
        case '0':
            if (arr[0] === '0' && arr[1] === '0') {
                result = 'zero'
            }
            break;
        case '1':
            result = result + 'one';
            break;
        case '2':
            result = result + 'two';
            break;
        case '3':
            result = result + 'three';
            break;
        case '4':
            result = result + 'four';
            break;
        case '5':
            result = result + 'five';
            break;
        case '6':
            result = result + 'six';
            break;
        case '7':
            result = result + 'seven';
            break;
        case '8':
            result = result + 'eight';
            break;
        case '9':
            result = result + 'nine';
            break;
    }

    return result;
}