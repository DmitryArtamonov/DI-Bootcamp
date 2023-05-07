# 🌟 Exercise 8 : What’s Your Name ?
# Instructions
# Write code that asks the user for their name and determines whether or not you have the same name, print out a funny message based on the outcome.

my_name = 'Dmitry'
your_name = input("what's your name?\n")
print(f'What a beautiful name, {your_name}!' if your_name == my_name else
      f"Hi, {your_name}, I'm {my_name}, nice to meet you")
