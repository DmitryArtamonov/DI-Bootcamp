from random import randint, uniform

# Exercise 1 : What Are You Learning ?
# Instructions
# Write a function called display_message() that prints one sentence telling everyone what you are learning in this course.
# Call the function, and make sure the message displays correctly.

def display_message():
    print('We are learning Python')
    return


display_message()

#
#
# 🌟 Exercise 2: What’s Your Favorite Book ?
# Instructions
# Write a function called favorite_book() that accepts one parameter called title.
# The function should print a message, such as "One of my favorite books is <title>".
# For example: “One of my favorite books is Alice in Wonderland”
# Call the function, make sure to include a book title as an argument when calling the function.

def favorite_book(title):
    print(f'One of my favorite books is {title}')
    return


favorite_book('Alice in Wonderland')

#
#
# 🌟 Exercise 3 : Some Geography
# Instructions
# Write a function called describe_city() that accepts the name of a city and its country as parameters.
# The function should print a simple sentence, such as "<city> is in <country>".
# For example “Reykjavik is in Iceland”
# Give the country parameter a default value.
# Call your function.
#
def describe_city(city, country):
    print(f'{city} is in {country}')
    return

describe_city('Reykjavik', 'Iceland')

#
# Exercise 4 : Random
# Instructions
# Create a function that accepts a number between 1 and 100 and generates another number randomly between 1 and 100.
# Compare the two numbers, if it’s the same number, display a success message, otherwise show a fail message and display both numbers.

def lottery(n):
    win = randint(1,100)
    print('You won!' if n == win else f'You lost! Your number: {n}, win number:{win}')
    return

lottery(27)

# 🌟 Exercise 5 : Let’s Create Some Personalized Shirts !
# Instructions
# Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
# The function should print a sentence summarizing the size of the shirt and the message printed on it, such as "The size of the shirt is <size> and the text is <text>"
# Call the function make_shirt().
#
# Modify the make_shirt() function so that shirts are large by default with a message that reads “I love Python” by default.
# Make a large shirt with the default message
# Make medium shirt with the default message
# Make a shirt of any size with a different message.

def make_shirt(size='L', text='I love Python'):
    print(f'The size of the shirt is {size} and the text is {text}')
    return


make_shirt()
make_shirt('M')
make_shirt('S', 'I love coffee')

#
# Bonus: Call the function make_shirt() using keyword arguments.
make_shirt(size='XS', text='Hi!')



#
#
# 🌟 Exercise 6 : Magicians …
# Instructions
# Using this list of magician’s names. magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']
# Pass the list to a function called show_magicians(), which prints the name of each magician in the list.
# Write a function called make_great() that modifies the list of magicians by adding the phrase "the Great" to each magician’s name.
# Call the function make_great().
# Call the function show_magicians() to see that the list has actually been modified.
#
def show_magicians(m_list):
    print(*m_list, sep='\n')
    return

def make_great(m_list):
    great_list =[]
    for m in m_list:
        great_list.append(m + ' the Great')
    return great_list

magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']
great_magicians = make_great(magician_names)
show_magicians(great_magicians)

#
# 🌟 Exercise 7 : Temperature Advice
# Instructions
# Create a function called get_random_temp().
# This function should return an integer between -10 and 40 degrees (Celsius), selected at random.
# Test your function to make sure it generates expected results.
#
# Create a function called main().
# Inside this function, call get_random_temp() to get a temperature, and store its value in a variable.
# Inform the user of the temperature in a friendly message, eg. “The temperature right now is 32 degrees Celsius.”
#
# Let’s add more functionality to the main() function. Write some friendly advice relating to the temperature:
# below zero (eg. “Brrr, that’s freezing! Wear some extra layers today”)
# between zero and 16 (eg. “Quite chilly! Don’t forget your coat”)
# between 16 and 23
# between 24 and 32
# between 32 and 40
#
# Change the get_random_temp() function:
# Add a parameter to the function, named ‘season’.
# Inside the function, instead of simply generating a random number between -10 and 40, set lower and upper limits based on the season, eg. if season is ‘winter’, temperatures should only fall between -10 and 16.
# Now that we’ve changed get_random_temp(), let’s change the main() function:
# Before calling get_random_temp(), we will need to decide on a season, so that we can call the function correctly. Ask the user to type in a season - ‘summer’, ‘autumn’ (you can use ‘fall’ if you prefer), ‘winter’, or ‘spring’.
# Use the season as an argument when calling get_random_temp().

def get_random_temp(season):
    season_temp = {
        'winter': [-10, 16],
        'spring': [10, 25],
        'summer': [18, 40],
        'autumn': [-2, 22]
    }
    return randint(*season_temp[season])

def main():
    while True:
        season = input('What is the season? ')
        if season in ('winter', 'spring', 'summer', 'autumn'): break
        print('Wrong season, try again')

    temp = get_random_temp(season)
    print(f'The temperature right now is {temp} degrees Celsius.', end=' ')
    if temp < 0: print('Brrr, that’s freezing! Wear some extra layers today')
    elif temp < 16: print('Quite chilly! Don’t forget your coat')
    elif temp <= 23: print('Good spring weather')
    elif temp < 32: print("Let's go to a beach!" )
    else: print('Be careful! Too hot!')

main()

#
# Bonus: Give the temperature as a floating-point number instead of an integer.


# Bonus: Instead of asking for the season, ask the user for the number of the month (1 = January, 12 = December). Determine the season according to the month.

def get_random_temp_float (season):
    season_temp = {
        'winter': [-10, 16],
        'spring': [10, 25],
        'summer': [18, 40],
        'autumn': [-2, 22]
    }
    return uniform(*season_temp[season])

def month_to_season(month):
    calendar = {
        'winter': [12, 1, 2],
        'spring': [3, 4, 5],
        'summer': [6, 7, 8],
        'autumn': [9, 10, 11]
    }
    for s, m in calendar.items():
        if month in m: return s


def main_bonus():
    while True:
        month = int(input('What is the month number? '))
        if 1 <= month <= 12 : break
        print('Wrong number, try again')

    temp = get_random_temp_float(month_to_season(month))
    print(f'The temperature right now is {temp} degrees Celsius.', end=' ')
    if temp < 0: print('Brrr, that’s freezing! Wear some extra layers today')
    elif temp < 16: print('Quite chilly! Don’t forget your coat')
    elif temp <= 23: print('Good spring weather')
    elif temp < 32: print("Let's go to a beach!" )
    else: print('Be careful! Too hot!')

main_bonus()
