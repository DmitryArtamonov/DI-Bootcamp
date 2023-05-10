# Exercise 1 : What’s Your Name ?
# Instructions
# Write a function called get_full_name() that takes three arguments: 1: first_name, 2: middle_name 3: last_name.
# middle_name should be optional, if it’s omitted by the user, the name returned should only contain the first and the last name.
# For example, get_full_name(first_name="john", middle_name="hooker", last_name="lee") will return John Hooker Lee.
# But get_full_name(first_name="bruce", last_name="lee") will return Bruce Lee.

def get_full_name(first_name, last_name, middle_name=""):
    count = 1
    whole_name = ''
    for name in (first_name, middle_name, last_name):
        whole_name += name.capitalize()
        if name and count !=3: whole_name += ' '
        count += 1
    return (whole_name)

print(get_full_name(first_name="bruce", last_name="lee"))
print(get_full_name(first_name="john", middle_name="hooker", last_name="lee"))

# Exercise 2 : From English To Morse
# Instructions
# Write a function that converts English text to morse code and another one that does the opposite.
# Hint: Check the internet for a translation table, every letter is separated with a space and every word is separated with a slash /.


ENGLISH = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z 1 2 3 4 5 6 7 8 9 0'
MORSE = '·−  −···  −·−·  −··  ·  ··−·  −−·  ····  ··  ·−−−  −·−  ·−··  −−  −·  −−−  ·−−·  −−·−  ·−·  ···  −  ··−  ···−  ·−−  −··−  −·−−  −−··  ·−−−−  ··−−−  ···−−  ····−  ·····  −····  −−···  −−−··  −−−−·  −−−−−'

def to_morse(text):
    dictionary = dict(zip(ENGLISH.split(), MORSE.split()))
    translation = ''
    for count, letter in enumerate(text):
        if letter == ' ':
            translation += '/ '
        elif letter.isalpha() or letter.isdigit():
            translation += dictionary[letter.upper()]
            if count != len(text) - 1: translation += ' '
    return translation

def to_eglish(text):
    dictionary = dict(zip(MORSE.split(), ENGLISH.split()))
    translation = ''
    splited = text.split()
    for letter in splited:
        if letter == '/':
            translation += ' '
        else:
            translation += dictionary[letter]
    return translation

choice = int(input('''
1 - English to Morse
2 - Morse to English
'''))
text = input('input a text: ')
if choice == 1: print(to_morse(text))
elif choice ==2: print(to_eglish(text))
else: print('Wrong number')


# Exercise 3 : Box Of Stars
# Instructions
# Write a function named box_printer that takes any amount of strings (not in a list) and prints them, one per line, in a rectangular frame.
# For example calling box_printer("Hello", "World", "in", "reallylongword", "a", "frame") will result as:
# ******************
# * Hello          *
# * World          *
# * in             *
# * reallylongword *
# * a              *
# * frame          *
# ******************

def box_printer(*args):
    stars = '******************'
    print(stars)
    for text in args:
        print(f'* {text}{" " * (15 - len(text))}*')
    print(stars)

    return

box_printer("Hello", "World", "in", "reallylongword", "a", "frame")

#
#
# Exercise 4
# Analyse this code before executing it. What is the purpose of this code?
# def insertion_sort(alist):
#    for index in range(1,len(alist)):
#
#      currentvalue = alist[index]
#      position = index
#
#      while position>0 and alist[position-1]>currentvalue:
#          alist[position]=alist[position-1]
#          position = position-1
#
#      alist[position]=currentvalue
#
# alist = [54,26,93,17,77,31,44,55,20]
# insertion_sort(alist)
# print(alist)

# It's a bubble sort ascending