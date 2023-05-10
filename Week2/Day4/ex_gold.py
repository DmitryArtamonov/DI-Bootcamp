# Exercise 1 : When Will I Retire ?
# Instructions
# The point of the exercise is to check if a person can retire depending on their age and their gender.
# Note : Retirement age in Israel is 67 for men, and 62 for women (born after April, 1947).
#
# Create a function get_age(year, month, day)
# Hard-code the current year and month in your code (there are better ways of doing this, but for now it will be enough.)
# After calculating the age of a person, the function should return the age (the age is an integer).
# Create a function can_retire(gender, date_of_birth).
# It should call the get_age function (with what arguments?) in order to receive an age.
# Now it has all the information it needs in order to determine if the person with the given gender and date of birth is able to retire or not.
# Calculate. You may need to do a little more hard-coding here.
# Return True if the person can retire, and False if he/she can’t.
# Some Hints
#
# Ask for the user’s gender as “m” or “f”.
# Ask for the user’s date of birth in the form of “yyyy/mm/dd”, eg. “1993/09/21”.
# Call can_retire to get a definite value for whether the person can or can’t retire.
# Display a message informing the user whether they can retire or not.
# As always, test your code to ensure it works.

def get_age(year, month, day):
    now_year = 2023
    now_month = 5
    now_day = 10

    age = now_year - year

    if month > now_month: age -= 1
    elif month == now_month and day > now_day: age -= 1

    return age


def can_retire(gender, date_of_birth):
    year, month, day = (int(x) for x in date_of_birth.split('/'))
    age = get_age(year, month, day)
    if gender == 'm': return age >= 67
    if gender == 'f': return age >= 62


gen = input('Input your gender (m/f): ')
date = input('Input your date of birth in format yyyy/mm/dd: ')

can = can_retire(gen, date)

print(f'You can{"not" * (not can)} retire.')


#
# Exercise 2 : Sum
# Instructions
# Write a function that accepts one parameter (an int: X) and returns the value of X+XX+XXX+XXXX.
# Example:
# If X=3, the output when calling our function should be 3702 (3 + 33 + 333 + 3333)
#
# Hint: treating our number as a int or a str at different points in our code may be helpful

def sum_x(x):
    res = 0
    for i in range(1,5):
        res += int(str(x)*i)
    return res

print(sum_x(3))


#
#
#
# Exercise 3 : Double Dice
# Instructions
# Create a function that will simulate the rolling of a dice. Call it throw_dice. It should return an integer between 1 and 6.
# Create a function called throw_until_doubles.
# It should keep throwing 2 dice (using your throw_dice function) until they both land on the same number, ie. until we reach doubles.
# For example: (1, 2), (3, 1), (5,5) → then stop throwing, because doubles were reached.
# This function should return the number of times it threw the dice in total. In the example above, it should return 3.
#
# Create a main function.
# It should throw doubles 100 times (ie. call your throw_until_doubles function 100 times), and store the results of those function calls (in other words, how many throws it took until doubles were thrown, each time) in a collection. (What kind of collection? Read below to understand what we will need the data for, and this should help you decide which data structure to use).
#
# After the 100 doubles are thrown, print out a message telling the user how many throws it took in total to reach 100 doubles.
# Also print out a message telling the user the average amount of throws it took to reach doubles. Round this off to 2 decimal places.
# For example:
#
# If the results of the throws were as follows (your code would do 100 doubles, not just 3):
# (1, 2), (3, 1), (5, 5)
# (3, 3)
# (2, 4), (1, 2), (3, 4), (2, 2)
#
# Then my output would show something like this:
# Total throws: 8
# Average throws to reach doubles: 2.67.a

from random import randint

throw_dice = lambda: randint(1, 6)

def throw_until_doubles():
    count, dice1, dice2 = 0, 0, 1
    while dice1 != dice2:
        dice1 = throw_dice()
        dice2 = throw_dice()
        count += 1
    return (count)

def main():
    total_count = 0
    tries = 100
    for _ in range (tries):
        total_count += throw_until_doubles()

    print(f'Total throws: {total_count}. Average throws to reach doubles: {total_count / tries}.')

main()
