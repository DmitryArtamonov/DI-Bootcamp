# Write a program that asks a string to the user, and display a new string with any duplicate consecutive letters removed.
# Examples
#
# user's word : "ppoeemm" ➞ "poem"
#
# user's word : "wiiiinnnnd" ➞ "wind"
#
# user's word : "ttiiitllleeee" ➞ "title"
#
# user's word : "cccccaaarrrbbonnnnn" ➞ "carbon"
# Notes
# Final strings won’t include words with double letters (e.g. “passing”, “lottery”).

word = input('word: ')
new_word = ''
prev_letter = ''
for letter in word:
    if letter != prev_letter:
        new_word += letter
        prev_letter = letter

print(new_word)