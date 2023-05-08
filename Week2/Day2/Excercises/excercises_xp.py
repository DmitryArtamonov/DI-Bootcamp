# 🌟 Exercise 1 : Set
# Instructions
# Create a set called my_fav_numbers with all your favorites numbers.
# Add two new numbers to the set.
# Remove the last number.
# Create a set called friend_fav_numbers with your friend’s favorites numbers.
# Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.

my_fav_numbers = {3, 4, 27}
my_fav_numbers.update({5, 71})
my_fav_numbers.remove(71)

friend_fav_numbers = {4, 8,99}

our_fav_numbers = my_fav_numbers | friend_fav_numbers

print(our_fav_numbers)

# 🌟 Exercise 2: Tuple
# Instructions
# Given a tuple which value is integers, is it possible to add more integers to the tuple?
#
# No. Tuples are unchangeable
#
# 🌟 Exercise 3: List
# Instructions
basket = ["Banana", "Apples", "Oranges", "Blueberries"]

basket.remove('Banana')
basket.remove('Blueberries')
basket.append('Kiwi')
basket.insert(0,'Apples')
count = len(basket)
basket.clear()

print(basket)
#
#
# 🌟 Exercise 4: Floats
# Instructions
# Recap – What is a float? What is the difference between an integer and a float?
# Can you think of another way to generate a sequence of floats?
# Create a list containing the following sequence 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 (don’t hard-code the sequence).

res = [1+ i / 2 for i in range(1,9)]

# 🌟 Exercise 5: For Loop
# Instructions
# Use a for loop to print all numbers from 1 to 20, inclusive.
# Using a for loop, that loops from 1 to 20(inclusive), print out every element which has an even index.

for i in range(20):
    print(i + 1)

for i in range(1, 20, 2):
    print(i)
#! Not clear what means 'index'. I assume, that it's an index of the number in range from 1 to 20.
#  So number 1 has index 0, number 2 - index 1, etc.

# 🌟 Exercise 6 : While Loop
# Instructions
# Write a while loop that will continuously ask the user for their name, unless the input is equal to your name.

my_name = 'Dmitry'
user_name = ''

while user_name != my_name:
    user_name = input('Your name?')

# 🌟 Exercise 7: Favorite Fruits
# Instructions
# Ask the user to input their favorite fruit(s) (one or several fruits).
# Hint : Use the built in input method. Ask the user to separate the fruits with a single space, eg. "apple mango cherry".
# Store the favorite fruit(s) in a list (convert the string of words into a list of words).
# Now that we have a list of fruits, ask the user to input a name of any fruit.
# If the user’s input is in the favorite fruits list, print “You chose one of your favorite fruits! Enjoy!”.
# If the user’s input is NOT in the list, print, “You chose a new fruit. I hope you enjoy”.

fav_fruits = input('Input your favorite fruit(s) (one or several fruits). Separate the fruits with a single space, eg. "apple mango cherry"\n').split()
fruit = input('Input any fruit\n')
print("You chose one of your favorite fruits! Enjoy!" if fruit in
    fav_fruits else "You chose a new fruit. I hope you enjoy")

# Exercise 8: Who Ordered A Pizza ?
# Instructions
# Write a loop that asks a user to enter a series of pizza toppings, when the user inputs ‘quit’ stop asking for toppings.
# As they enter each topping, print a message saying you’ll add that topping to their pizza.
# Upon exiting the loop print all the toppings on the pizza pie and what the total price is (10 + 2.5 for each topping).

pizza_price = 10
topping_price = 2.5
topping_list = []

while True:
    topping = input('What topping to add? (type "quit" to stop)\n')
    if topping == 'quit': break
    print(f'We just add {topping} to your pizza')
    topping_list.append(topping)

print(f'Your toppings are: {", ".join(topping_list)}. Total price: {pizza_price + len(topping_list) * topping_price}')

# Exercise 9: Cinemax
# Instructions
# A movie theater charges different ticket prices depending on a person’s age.
# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.
#
# Ask a family the age of each person who wants a ticket.
#
# Store the total cost of all the family’s tickets and print it out.

ages = [int(i) for i in input('print your ages separated with space').split()]
price = 0
for age in ages:
    if 3 < age <= 12:
        price += 10
    elif age > 12:
        price += 15
print("total price:", price)

# A group of teenagers are coming to your movie theater and want to watch a movie that is restricted for people between the ages of 16 and 21.
# Given a list of names, write a program that asks teenager for their age, if they are not permitted to watch the movie, remove them from the list.
# At the end, print the final list.

names = ['Jonh', 'Sarah', 'Alex', 'Kate', 'Elise', 'John']
i = 0
while i < len(names):
    age = int(input(f'Hi, {names[i]}! How old are you?'))
    if 16 < age < 21:
        del(names[i])
    else:
        i += 1
print(names)

# Exercise 10 : Sandwich Orders
# Instructions
# sandwich_orders = ["Tuna sandwich", "Avocado sandwich", "Egg sandwich", "Sabih sandwich", "Pastrami sandwich"]
#
# Use the above list called sandwich_orders.
# Make an empty list called finished_sandwiches.
# As each sandwich is made, move it to the list of finished sandwiches.
# After all the sandwiches have been made, print a message listing each sandwich that was made , such as I made your tuna sandwich.

sandwich_orders = ["Tuna sandwich", "Avocado sandwich", "Egg sandwich", "Sabih sandwich", "Pastrami sandwich"]
finished_sandwiches = []

for sandwich in sandwich_orders:
    finished_sandwiches.append(sandwich)

print('\n'.join([f'I made your {sandwich}!' for sandwich in finished_sandwiches]))

# Exercise 11 : Sandwich Orders#2
# Instructions
# Using the list sandwich_orders from the previous exercise, make sure the sandwich ‘pastrami’ appears in the list at least three times.
# Add code near the beginning of your program to print a message saying the deli has run out of pastrami, and then use a while loop to remove all occurrences of ‘pastrami’ from sandwich_orders.
# Make sure no pastrami sandwiches end up in finished_sandwiches.

sandwich_orders = ["Tuna sandwich", "Avocado sandwich", "Pastrami sandwich", "Pastrami sandwich", "Egg sandwich",
                   "Sabih sandwich", "Pastrami sandwich"]
finished_sandwiches = []

print('Sorry, we are run out of pastrami')
while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

for sandwich in sandwich_orders:
    finished_sandwiches.append(sandwich)

print('\n'.join([f'I made your {sandwich}!' for sandwich in finished_sandwiches]))