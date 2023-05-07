# 🌟 Exercise 9 : Tall Enough To Ride A Roller Coaster
# Instructions
# Write code that will ask the user for their height in inches.
# If they are over 145cm print a message that states they are tall enough to ride.
# If they are not tall enough print a message that says they need to grow some more to ride.

min_height = 145
height = int(input("What's your height in inches?\n"))
if height * 2.54 > 145:
    print('You can ride')
else:
    print('Sorry, you are too short')