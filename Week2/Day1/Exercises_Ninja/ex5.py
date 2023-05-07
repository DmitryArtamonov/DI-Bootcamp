# Exercise 5: Longest Word Without A Specific Character
# Instructions
# Keep asking the user to input the longest sentence they can without the character “A”.
# Each time a user successfully sets a new longest sentence, print a congratulations message.

text = input('input the longest sentence you can without the character “A”\n')
print('Great!' if 'A' not in text else 'ups...')