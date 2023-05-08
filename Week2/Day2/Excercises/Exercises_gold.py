# Exercise 1: Concatenate Lists
# Instructions
# Write code that concatenates two lists together without using the + sign.

list1.extend(list2)

# Exercise 2: Range Of Numbers
# Instructions
# Create a loop that goes from 1500 to 2500 and prints all multiples of 5 and 7.

for i in range(1500,2501):
    if i % 5 == 0 or i % 7 == 0:
        print(i)

# Not clear, should it be multiple of 5 and 7 at the same time or mupltiple of any 5 or 7.
# I assume mupltiple of any 5 or 7. Otherwise we should replace "or" with "and" in the loop.
#
#
# Exercise 3: Check The Index
# Instructions
# Using this variable
#
# names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
#
# Ask a user for their name, if their name is in the names list print out the index of the first occurence of the name.
# Example: if input is 'Cortana' we should be printing the index 1

names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
user = input('your name?')
if user in names:
    print (names.index(user))

# Exercise 4: Greatest Number
# Instructions
# Ask the user for 3 numbers and print the greatest number.
#     Test Data
#     Input the 1st number: 25
#     Input the 2nd number: 78
#     Input the 3rd number: 87
#
#     The greatest number is: 87

numbers = []
for i in range (3):
    numbers.append(int(input(f"Input the {i+1}{['st', 'nd', 'rd'][i]} number: ")))
print (max(numbers))

# Exercise 5: The Alphabet
# Instructions
# Create a string of all the letters in the alphabet
# Loop over each letter and print a message that contains the letter and whether its a vowel or a consonant.

letters = "abcdefghijklmnopqrstuvwxyz"
for letter in letters:
    print(f"It's letter '{letter}'!")

# Exercise 6: Words And Letters
# Instructions
# Ask a user for 7 words, store them in a list named words.
# Ask the user for a single character, store it in a variable called letter.
# Loop through the words list and print the index of the first appearence of the letter variable in each word of the list.
# If the letter doesn’t exist in one of the words, print a friendly message with the word and the letter.

words = []
for i in range(7):
    words.append(input(f'give me a word number {i+1}: '))
letter = input('give me a single character: ')
for word in words:
    if letter in word:
        print(word.index(letter))
    else:
        print(f"letter {letter} doesn't exist in word {word}")# Exercise 7:

# Instructions
# Create a list of numbers from one to one million and then use min() and max() to make sure your list actually starts at one and ends at one million. Use the sum() function to see how quickly Python can add a million numbers.

my_list = []
for i in range(1, 1000001):
    my_list.append(i)
print('min: ', min(my_list), '\nmax: ', max(my_list))
print('sum: ', sum(my_list))

# Exercise 8 : List And Tuple
# Instructions
# Write a program which accepts a sequence of comma-separated numbers. Generate a list and a tuple which contain every number.
# Suppose the following input is supplied to the program: 34,67,55,33,12,98
#
# Then, the output should be:
#
# ['34', '67', '55', '33', '12', '98']
# ('34', '67', '55', '33', '12', '98')

my_list = input().split(',')
my_tuple = tuple(my_list)

print(my_list)
print(my_tuple)


# Exercise 9 : Random Number
# Instructions
# Ask the user to input a number from 1 to 9 (including).
# Get a random number between 1 and 9. Hint: random module.
# If the user guesses the correct number print a message that says Winner.
# If the user guesses the wrong number print a message that says better luck next time.
# Bonus: use a loop that allows the user to keep guessing until they want to quit.
# Bonus 2: on exiting the loop tally up and display total games won and lost.

from random import randint

won = 0
lost = 0

while True:

    user_num = int(input('Your number from 1 to 9? (0 to quit): '))
    if user_num == 0: break
    ran_num = randint(1,9)

    if user_num == ran_num:
        print('Winner!')
        won += 1
    else:
        print('Looser! The right number is ', ran_num)
        lost += 1