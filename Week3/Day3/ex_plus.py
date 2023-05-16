# 🌟 Exercise 1: Import
# Instructions
# In a file named func.py create a function that adds 2 number, and prints the result
# In a file namedexercise_one.py import and the function
# Hint: You can use the the following syntaxes:
#
# import module_name
#
# OR
#
# from module_name import function_name
#
# OR
#
# from module_name import function_name as fn
#
# OR
#
# import module_name as mn
#
#
# 🌟 Exercise 2: Random Module
# Instructions
# Create a function that accepts a number between 1 and 100, then rolls a random number between 1 and 100,
# if it’s the same number, display a success message to the user, else don’t.

from random import randint, choice
def game_1_100(number):
    winNumber = randint(1,100)
    if winNumber == number: print('you won')
    return

game_1_100(28)

# 🌟 Exercise 3: String Module
# Instructions
# Generate random String of length 5
# Note: String must be the combination of the UPPER case and lower case letters only. No numbers and a special symbol.
# Hint: use the string module

from string import ascii_letters

string = ''
for i in range(5):
    string += choice(ascii_letters)
print(string)

# 🌟 Exercise 4 : Current Date
# Instructions
# Create a function that displays the current date.
# Hint : Use the datetime module.

from datetime import date, datetime, timedelta
print(date.today())

#
#
# Exercise 5 : Amount Of Time Left Until January 1st
# Instructions
# Create a function that displays the amount of time left from now until January 1st.
# (Example: the 1st of January is in 10 days and 10:34:01hours).

delta = datetime(date.today().year + 1,1,1) - datetime.now()
print(f'the 1st of January is in {delta.days} days and',
    (datetime.min + delta).strftime('%H:%M:%S hours'))
#
#
# Exercise 6 : Birthday And Minutes
# Instructions
# Create a function that accepts a birthdate as an argument (in the format of your choice), then displays a message stating how many minutes the user lived in his life.

def count_life_minutes(birthday):
    '''birthday should be in 'DD.MM.YYYY' format'''

    bDay = datetime(*[int(n) for n in birthday.split('.')[::-1]])
    delta = (datetime.now() - bDay)
    minutes = int(delta.total_seconds() / 60)
    print(f'You lived {minutes} minutes')

count_life_minutes('21.06.1985')

# Exercise 7 : Upcoming Holiday
# Instructions
# Write a function that displays today’s date.
# The function should also display the amount of time left from now until the next upcoming holiday and print which holiday that is. (Example: the next holiday is in 30 days and 12:03:45 hours).
# Hint: Start by hardcoding the datetime and name of the upcoming holiday.

def time_to_holiday():

    holidays = {
        'Passover': (6,4),
        'Yom HaAtzmaut': (26,4),
        'Shavuot': (26,5),
        'Rosh Hashana': (16,9),
        'Yom Kippur': (25,9),
        'Sukkot': (30,9),
        'Shemini Atzeret / Simchat Torah': (7,10)
    }

    def time_to_holiday(items):
        holDate = datetime(year=2023, month=items[1][1], day=items[1][0])
        today = datetime.now()
        if holDate < today: return timedelta(days=365)
        return holDate - today

    now = datetime.now()
    print(f'Today: {now.date()}')
    nextHol = min(holidays.items(), key=time_to_holiday)[0]
    timeToHol = time_to_holiday([nextHol, holidays[nextHol]])

    print(f'Next Holiday is {nextHol} in {timeToHol} hours')

time_to_holiday()



#
# Exercise 8 : How Old Are You On Jupiter?
# Instructions
# Given an age in seconds, calculate how old someone would be on:
# Earth: orbital period 365.25 Earth days, or 31557600 seconds
# Mercury: orbital period 0.2408467 Earth years
# Venus: orbital period 0.61519726 Earth years
# Mars: orbital period 1.8808158 Earth years
# Jupiter: orbital period 11.862615 Earth years
# Saturn: orbital period 29.447498 Earth years
# Uranus: orbital period 84.016846 Earth years
# Neptune: orbital period 164.79132 Earth years
# So if you are told someone is 1,000,000,000 seconds old, the function should output that they are 31.69 Earth-years old.
#

def how_old_you_are(age_sec):
    orbitalPeriod = {
        'Earth': 1,
        'Mercury': 0.2408467,
        'Venus': 0.61519726,
        'Mars': 1.8808158,
        'Jupiter': 11.862615,
        'Saturn': 29.447498,
        'Uranus': 84.016846,
        'Neptune': 164.79132
    }
    secInYear = 31557600
    ageEarthYears = age_sec / secInYear
    for k, v in orbitalPeriod.items():
        print(f'Your age on {k} is {round(ageEarthYears / v, 2)} years.')

how_old_you_are(1000000000)

from faker import Faker
fake = Faker()


def add_user(user_list):
    new_user = {'name': fake.name(), 'adress':fake.address(), 'langage_code': fake.language_code()}
    user_list.append(new_user)
    return user_list

users = []

users=add_user(users)

print(users)


#
# Exercise 9 : Faker Module
# Instructions
# Install the faker module, and take a look at the documentation and learn how to properly implement faker in your code.
# Create an empty list called users. Tip: It should be a list of dictionaries.
# Create a function that adds new dictionaries to the users list. Each user has the following keys: name, adress, langage_code. Use faker to populate them with fake data.