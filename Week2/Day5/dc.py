# Write a program that accepts a comma separated sequence of words as input and prints the words in a comma-separated sequence after sorting them alphabetically.
# Use List Comprehension
# Example:
#
# Suppose the following input is supplied to the program: without,hello,bag,world
# Then, the output should be: bag,hello,without,world

print(* [word for word in sorted(input().split(','))], sep=',')

# Actualy, list comprehensio is not needed here ) :

print(* sorted(input().split(',')), sep=',')