# Given a “Matrix” string:
#
#     7i3
#     Tsi
#     h%x
#     i #
#     sM
#     $a
#     #t%
#     ^r!
#
#
# The matrix is a grid of strings (alphanumeric characters and spaces) with a hidden message in it.
# A grid means that you could potentially break it into rows and columns, like here:
#
# 7	i	3
# T	s	i
# h	%	x
# i		#
# s	M
# $	a
# #	t	%
# ^	r	!
#
#
# To decrypt the matrix, Neo reads each column from top to bottom, starting from the leftmost column, selecting only the alpha characters and connecting them. Then he replaces every group of symbols between two alpha characters by a space.
#
# Using his technique, try to decode this matrix.


def text_to_matrix(text):
    matrix = []
    count = 0
    for row in range(int(len(text) / 3)):
        matrix.append([])
        for col in range(3):
            if count > len(text): break
            matrix[row].append(text[count])
            count += 1
    return matrix

def decrypt(matrix):
    decrypted = ''
    no_alpha_group = 0
    for col in range(3):
        for row in matrix:
            char = row[col]
            if char.isalpha():
                if no_alpha_group > 1 and decrypted.strip() > '': decrypted += ' '
                decrypted += row[col]
                no_alpha_group = 0
            else:
                no_alpha_group += 1
    return decrypted

text = '7i3Tsih%xi #sM $a #t%^r!'
print(decrypt(text_to_matrix(text)))


