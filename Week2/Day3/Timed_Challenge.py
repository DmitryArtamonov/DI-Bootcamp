# Reverse The Sentence
# Write a program to reverse the sentence wordwise.
#
# Input:
# You have entered a wrong domain
# Output:
# domain wrong a entered have You

def tc1():
    text = input().split()
    rev_text = ' '.join(text[::-1])
    print(rev_text)
    return

# A perfect number is a positive integer that is equal to the sum of its divisors.
# However, the number itself is not included in the sum.
#
# Ask the user for a number and print whether or not it is a perfect number. If yes, print True else False.
# Hint: Google perfect numbers

def tc2():
    n = int(input())
    count = 0
    for i in range(1,int(n / 2) + 1):
        if n % i == 0: count += i
    return n == count

print(tc2())