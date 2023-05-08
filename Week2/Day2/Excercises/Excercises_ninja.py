# Exercise 1: Formula
# Instructions
# Write a program that calculates and prints a value according to this given formula:
# Q = Square root of [(2 * C * D)/H]
# Following are the fixed values of C and H:
# C is 50.
# H is 30.
# Ask the user for a comma-separated string of numbers, use each number from the user as D in the formula and return all the results
# For example, if the user inputs: 100,150,180
# The output should be:
#
# 18,22,24

res = []
c = 50
h = 30
d_list = [int(i) for i in input('Comma-separated string of nimbers: ').split(',')]
for d in d_list:
    res.append(int(((2 * c * d) / h) ** 0.5))

print(*res, sep=',')

# Exercise 2 : List Of Integers
# Instructions
# Given a list of 10 integers to analyze. For example:
#
#     [3, 47, 99, -80, 22, 97, 54, -23, 5, 7]
#     [44, 91, 8, 24, -6, 0, 56, 8, 100, 2]
#     [3, 21, 76, 53, 9, -82, -3, 49, 1, 76]
#     [18, 19, 2, 56, 33, 17, 41, -63, -82, 1]
# Store the list of numbers in a variable.
# Print the following information:
# a. The list of numbers – printed in a single line
# b. The list of numbers – sorted in descending order (largest to smallest)
# c. The sum of all the numbers
# A list containing the first and the last numbers.
# A list of all the numbers greater than 50.
# A list of all the numbers smaller than 10.
# A list of all the numbers squared – eg. for [1, 2, 3] you would print “1 4 9”.
# The numbers without any duplicates – also print how many numbers are in the new list.
# The average of all the numbers.
# The largest number.
# 10.The smallest number.
# 11.Bonus: Find the sum, average, largest and smallest number without using built in functions.
# 12.Bonus: Instead of using pre-defined lists of numbers, ask the user for 10 numbers between -100 and 100. Ask the user for an integer between -100 and 100 – repeat this question 10 times. Each number should be added into a variable that you created earlier.
# 13.Bonus: Instead of asking the user for 10 integers, generate 10 random integers yourself. Make sure that these random integers are between -100 and 100.
# 14.Bonus: Instead of always generating 10 integers, let the amount of integers also be random! Generate a random positive integer no smaller than 50.
# 15.Bonus: Will the code work when the number of random numbers is not equal to 10?

my_list = [3, 47, 99, -80, 22, 97, 54, -23, 5, 7]
print('2a.', my_list)
print('2b.', sorted(my_list, reverse=True))
print('2c.', sum(my_list))
print('3.', [my_list[0], my_list[-1]])
print('4.', [n for n in my_list if n > 50])
print('5.', [n for n in my_list if n < 10])
print('6.', [n ** 2 for n in my_list])

new_list = []
for n in my_list:
    if n not in new_list:
        new_list.append(n)
print('7.', new_list, len(new_list))

print('8.', sum(my_list) / len(my_list))
print('9.', max(my_list))
print('10.', min(my_list))

# Exercise 3: Working On A Paragraph
# Find an interesting paragraph of text online. (Please keep it appropriate to the social context of our class.)
# Paste it to your code, and store it in a variable.
# Let’s analyze the paragraph. Print out a nicely formatted message saying:
# How many characters it contains (this one is easy…).
# How many sentences it contains.
# How many words it contains.
# How many unique words it contains.
# Bonus: How many non-whitespace characters it contains.
# Bonus: The average amount of words per sentence in the paragraph.
# Bonus: the amount of non-unique words in the paragraph.

text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada pulvinar rhoncus. Integer tincidunt non lorem in pulvinar. Cras vitae nibh quis nulla aliquet porttitor. Nam rutrum nec magna id efficitur. Aliquam aliquet feugiat felis, eu venenatis nunc suscipit sit amet. Vivamus cursus pulvinar turpis eu interdum. Cras dictum ex sit amet facilisis auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam dapibus nisl id tortor feugiat ullamcorper. Pellentesque faucibus tellus velit, eu volutpat justo ultrices et. Mauris lacinia massa eu diam pulvinar, vitae varius felis porta. Proin quis velit venenatis erat dapibus vestibulum quis non diam.'

words = text.split()
for i, word in enumerate(words):
    words[i] = word.strip('.,').lower()

sentences = text.split('.')

print(f"""
There are {len(text)} characters, {len(words)} words and {len(sentences)} in the text.
Uniq words: {len(set(words))}
Non-whitespace characters: {len(text) - text.count(' ')}
The average amount of words per sentence: {len(words) / len(sentences)}
The amount of non-unique words: {len(words) - len(set(words))}
""")

# Exercise 4
# Instructions
# Write a program that prints the frequency of the words from the input.
#
# Suppose the following input is supplied to the program:
# New to Python or choosing between Python 2 and Python 3? Read Python 2 or Python 3.
#
# Then, the output should be:
#
#     2:2
#     3.:1
#     3?:1
#     New:1
#     Python:5
#     Read:1
#     and:1
#     between:1
#     choosing:1
#     or:2
#     to:1

text = input('text: ').split()
for w in set(text):
    print(f'{w}:{text.count(w)}')