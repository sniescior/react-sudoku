const sudoku = [
    [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
    [ 5, 2, 3, 4, 5, 6, 7, 8, 9 ],
    [ 3, 6, 3, 4, 5, 6, 7, 8, 9 ],
    
    [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
    [ 1, 2, 7, 4, 5, 6, 7, 8, 9 ],
    [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
    
    [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
    [ 1, 2, 3, 4, 5, 3, 7, 1, 9 ],
    [ 1, 2, 3, 2, 5, 4, 6, 8, 9 ]
]

const sudokuGroups = {
    0: { min_x: 0, max_x: 2, min_y: 0, max_y: 2 },
    1: { min_x: 3, max_x: 5, min_y: 0, max_y: 2 },
    2: { min_x: 6, max_x: 8, min_y: 0, max_y: 2 },
    
    3: { min_x: 0, max_x: 2, min_y: 3, max_y: 5 },
    4: { min_x: 3, max_x: 5, min_y: 3, max_y: 5 },
    5: { min_x: 6, max_x: 8, min_y: 3, max_y: 5 },
    
    6: { min_x: 0, max_x: 2, min_y: 6, max_y: 8 },
    7: { min_x: 3, max_x: 5, min_y: 6, max_y: 8 },
    8: { min_x: 6, max_x: 8, min_y: 6, max_y: 8 }
}

export { 
    sudoku, 
    sudokuGroups
}
