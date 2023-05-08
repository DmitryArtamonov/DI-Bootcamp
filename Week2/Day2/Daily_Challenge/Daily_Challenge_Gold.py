# Ask the user for their birthdate (specify the format, for example: DD/MM/YYYY).
# Display a little cake as seen below:
#        ___iiiii___
#       |:H:a:p:p:y:|
#     __|___________|__
#    |^^^^^^^^^^^^^^^^^|
#    |:B:i:r:t:h:d:a:y:|
#    |                 |
#    ~~~~~~~~~~~~~~~~~~~
#
# The number of candles on the cake should be the last number of the users age, if they are 53, then add 3 candles.
#
# Bonus : If they were born on a leap year, display two cakes !

from datetime import datetime

bd = datetime.strptime(input('input date of birth DD/MM/YYYY: '), '%d/%m/%Y')

age = int ((datetime.now()-bd).days / 365.2425)

candles = age % 10
if candles == 0:
    cakes = 2
else:
    cakes = 1
before = int((11-candles) / 2)
after = 11 - candles - before

for _ in range(cakes):
    print('    ' + '_' * before + 'i' * candles + '_' * after)
    print('''   |:H:a:p:p:y:|
 __|___________|__
|^^^^^^^^^^^^^^^^^|
|:B:i:r:t:h:d:a:y:|
|                 |
~~~~~~~~~~~~~~~~~~~
    ''')