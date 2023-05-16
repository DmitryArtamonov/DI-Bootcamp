# Instructions :
# The goal is to create a class that represents a simple circle.
# A Circle can be defined by either specifying the radius or the diameter.
# The user can query the circle for either its radius or diameter.
import math

class Circle:
    def __init__(self, radius_or_diametr, n):
        if radius_or_diametr == 'r':
            self.radius = n
            self.diameter = n * 2
        elif radius_or_diametr == 'd':
            self.radius = n/2
            self.diameter = n
        else:
            raise TypeError('radius_or_diametr should be "r" or "d"')

# Other abilities of a Circle instance:

    def __repr__(self):
        return f'rad: {self.radius}, diam: {self.diameter}'

# Compute the circle’s area
    def compute_area(self):
        return (3.14 * self.radius ** 2)

# Print the circle and get something nice

    def __str__(self):

        r = int(self.radius)
        for y in range(-r, r + 1):
            for x in range(-r, r + 1):
                dis = math.sqrt(x ** 2 + y ** 2)
                if dis <= r:
                    print("*", end=" ")
                else:
                    print(" ", end=" ")
            print()
        return f'circle, radius: {self.radius}, diameter: {self.diameter}\n'



# Be able to add two circles together
    def __add__(self, other):
        radius = self.radius + other.radius
        return Circle('r', radius)

# Be able to compare two circles to see which is bigger
    def __gt__(self, other):
        return self.radius > other.radius


# Be able to compare two circles and see if there are equal
    def __eq__(self, other):
        return self.radius == other.radius

# Be able to put them in a list and sort them
def sort_circles(list_of_circles):
    return sorted(list_of_circles, key=lambda x: x.radius)



cir1 = Circle('r',5)
print(cir1.compute_area())
print(cir1)
cir2 = Circle('d', 2)
cir3 = cir1 + cir2
print(cir3)

cir4 = Circle('r', 12)
cir5 = Circle('r', 10)
print(cir4 > cir5)
print(cir4 == cir5)

print(sort_circles([cir1, cir2, cir3, cir4, cir5]))


