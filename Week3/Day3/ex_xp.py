# Exercise 1 : Built-In Functions
# Instructions
# Python has many built-in functions.
# If you feel that you don’t know how to properly implement them take a look at the python documentation online.
#
# Write a program which prints the results of the following python built-in functions: abs(), int(), input().
# Using the __doc__ dunder method create your own documentation which explains the execution of your code. Take a look at the doc method on google for help.

def my_func():
    '''
    Get a string. Print a string. If string is a number, print int and absolute of the number
    :return: None
    '''

    text = input()
    print (text)
    if text.replace('.','').replace('-','').isalnum():
        x = float(text)
        print(int(x))
        print(abs(int(x)))

# print(my_func.__doc__)
# my_func()

# 🌟 Exercise 2: Currencies
# Instructions
class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        return f'{self.amount} {self.currency}s'

    def __repr__(self):
        return f'{self.amount} {self.currency}s'

    def __int__(self):
        return int(self.amount)

    def __add__(self, other):
        if isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(f'Cannot add between Currency type {self.currency} and {other.currency}')
            return self.amount + other.amount
        return self.amount + other

    def __iadd__(self, other):
        if isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(f'Cannot add between Currency type {self.currency} and {other.currency}')
            self.amount += other.amount
            return self
        self.amount += other
        return self


#     #Your code starts HERE
#
#
# Using the code above, implement the relevant methods and dunder methods which will output the results below.
# Hint : When adding 2 currencies which don’t share the same label you should raise an error.
c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

print(str(c1))
# '5 dollars'
#
print(int(c1))
# 5
#
print(repr(c1))
# '5 dollars'
#
print(c1 + 5)
# 10
#
print(c1 + c2)
# 15
#
print(c1)
# 5 dollars
#
c1 += 5
print(c1)
# 10 dollars
#
c1 += c2
print(c1)
# 20 dollars
#
print(c1 + c3)
# TypeError: Cannot add between Currency type <dollar> and <shekel>

