let board = '';

for (let i = 1; i <= 8; i++) {
    board = board + '\n';

    for (let j = 1; j <= 8; j++) {
        if (j % 2 === i % 2) {
            board = board + '  ';
        } else {
            board = board + ' ██';
        }
    }
}

console.log(board);
