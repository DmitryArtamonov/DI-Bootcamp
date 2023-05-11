#
def new_board():
    '''
    Info: Create and return a matrix for empty board
    '''

    field_str = '''
*************
*   |   |   *
*---|---|---*
*   |   |   *
*---|---|---*
*   |   |   *
*************'''

    board, row = [], -1
    for s in field_str: # create a list with a matrix
        if s == '\n':
            board.append([])
            row += 1
        else:
            board[row].append(s)

    return board

def create_players():
    players_data = {} # key: player number (1 or 2), value: dict with player's data
    for i in [1, 2]:
        name = input(f'Player {i} name: ')
        players_data[i] = {'name': name, 'wins':0, 'sign': ['X','O'][i-1]}
        # create dict with name, amount of wins and sign (X for pl1, O for pl2)
    return players_data

def print_board(board):
    '''
    Info: print current board
    '''
    print()
    for row in board:
        for cell in row:
            print(cell, end='')
        print()  #start new row
    print()
    return
def check_win_or_draw(game_data):
    '''
    Info: Check if there is a winner combination. Return pl number (1 or 2) if win,
    -1 if draw, 0 otherwise
    '''
    lines = [] # to collect all possible lines of 3

    for row in game_data:
        lines.append(row)
    # add rows

    for col in range(3):
        new_line = []
        for row in range (3):
            new_line.append(game_data[row][col])
        lines.append(new_line)
    # add columns

    for diag in [1, -1]:
        new_line = []
        for pos in range (3):
            new_line.append(game_data[pos][int(pos * diag + (diag - 1) * 0.5)])
        lines.append(new_line)
    # add diagonals

    for line in lines:
        if len(set(line)) == 1 and line[0] != 0: return line[0]
    # check for wins, return win player number (1 or 2)

    for line in lines:
        if 1 not in line or 2 not in line: break
    else:
        return -1
    # check for draw, return -1 if there are both 1 and 2 in all lines (no possible wins)

    return 0
    # no win, no draw

def turn(game_data, board, player_num, player_data):
    '''
    Info: Ask player for his/her turn. Put result to game_data matrix and board matrix
    :param game_data: current game data matrix
    :param board: current board matrix
    :param player_num: players number (1 or 2)
    :param player_data: dict with players data
    :return: new game matrix and board matrix
    '''

    print(f"Player {player_data['name']}, your turn")

    while True: # get turn data, check if occupied and ask again
        row = int(input('Enter row (1 to 3): ')) - 1
        col = int(input('Enter column (1 to 3): ')) - 1

        if (row not in [0,1,2]) or (col not in [0,1,2]): # check correct input
            print("Wrong turn! Only 1, 2, or 3 allowed. Try again")
            continue

        if game_data[row][col] == 0: # check if the cell is empty
            game_data[row][col] = player_num # put turn in the game_data matrix
            board[row * 2 + 1][col * 4 + 2] = player_data['sign'] # put turn on the board
            break
        else:
            print("it's already occupied! Try again.")

    return(game_data, board)

def main():
    print('WELCOME TO THE TIC-TAC-TOE GAME!!!!')
    new_game = 'yes'
    players = create_players()  # create players data
    player_num = 1  # current player

    while new_game.lower() == 'yes':
        game = [[0 for _ in range(3)] for _ in range(3)]  # clear game data matrix
        game_board = new_board() #create new board
        while True: # repeat turns until draw or win
            print_board(game_board)
            game, game_board = turn(game, game_board, player_num, players[player_num])
            # put new turn to game data matrix and on the board

            result = check_win_or_draw(game)
            if not result:  # change a turn if there are no win or draw
                if player_num == 1: player_num = 2
                else: player_num = 1
                continue
            elif result == -1:  # if draw
                print("It's a draw!")
            else:  # if win
                print(f"{players[result]['name']} won!")
                players[result]['wins'] += 1
            break  # if draw or win

        print('Total score:')
        for i in range (1,3): # print scores
            print(f"{players[i]['name']}: {players[i]['wins']}")

        new_game = input("\nInput 'yes' for another game: ")

    print('\nThank you for the game!')

    return

main()
