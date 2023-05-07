# Instructions
# Using the input function, ask the user for a string. The string must be 10 characters long.
# If it’s less than 10 characters, print a message which states “string not long enough”.
# If it’s more than 10 characters, print a message which states “string too long”.
#
# Then, print the first and last characters of the given text.
#
# Using a for loop, construct the string character by character: Print the first character, then the second, then the third, until the full string is printed. For example:
# The user enters "Hello World"
# Then, you have to construct the string character by character
# H
# He
# Hel
# ... etc
# Hello World
#
#
# 4. Bonus: Swap some characters around then print the newly jumbled string (hint: look into the shuffle method). For example:
#
# Hlrolelwod

from random import shuffle

text = input('Print a text\n')
length = len(text)
if length < 10:
    print('string not long enough')
elif length > 10:
    print('string too long')

print(text[0], text[-1])

for i in range(1, length + 1):
    print(text[:i])

new_txt = list(text)
shuffle(new_txt)
print(''.join(new_txt))