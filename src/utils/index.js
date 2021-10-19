export function getClass(i) {
    if (i === 10) {
        return null;
    }
    if (i === 11) {
        return 'big';
    }
    if (i % 5 === 0) {
        return 'big';
    }
    else if (i % 6 === 0) {
        return 'wide'
    }
    else if (i % 8 === 0) {
        return 'tall'
    }
}