var board = document.createElement("div");
board.setAttribute("class", "board");
document.body.appendChild(board);



for (var y = 0; y < 10; y++) {
    for (var x = 0; x < 10; x++) {
        var p = document.createElement("div");
        var t = document.createTextNode(x + "," + y);
        p.setAttribute("class", x + " " + y);
        p.setAttribute("id", x + "" + y);
        p.appendChild(t);
        board.appendChild(p);
    }
}

var tab = [
    [
        [
            [x - 1],
            [y - 1]
        ],
        [
            [x],
            [y - 1]
        ],
        [
            [x + 1],
            [y - 1]
        ]
    ],
    [
        [
            [x - 1],
            [y]
        ],
        [
            [x],
            [y]
        ],
        [
            [x + 1],
            [y]
        ]
    ],
    [
        [
            [x - 1],
            [y + 1]
        ],
        [
            [x],
            [y + 1]
        ],
        [
            [x + 1],
            [y + 1]
        ]
    ],
    [
        [
            [x - 1],
            [y - 1]
        ],
        [
            [x],
            [y]
        ],
        [
            [x + 1],
            [y + 1]
        ]
    ],
    [
        [
            [x + 1],
            [y - 1]
        ],
        [
            [x],
            [y]
        ],
        [
            [x - 1],
            [y + 1]
        ]
    ],
    [
        [
            [x - 1],
            [y - 1]
        ],
        [
            [x - 1],
            [y]
        ],
        [
            [x - 1],
            [y - 1]
        ]
    ],
    [
        [
            [x],
            [y - 1]
        ],
        [
            [x],
            [y]
        ],
        [
            [x],
            [y + 1]
        ]
    ],
    [
        [
            [x + 1],
            [y - 1]
        ],
        [
            [x + 1],
            [y]
        ],
        [
            [x + 1],
            [y + 1]
        ]
    ]
]