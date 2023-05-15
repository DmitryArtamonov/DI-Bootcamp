# 🌟 Exercise 3 : Dogs Domesticated
# Instructions
# Create a new python file and import your Dog class from the previous exercise.
# In the new python file, create a class named PetDog that inherits from Dog.
# Add an attribute called trained to the __init__ method, this attribute is a boolean and the value should be False by default.
# Add the following methods:
# train: prints the output of bark and switches the trained boolean to True
#
# play: takes a parameter which value is a few names of other Dog instances (use *args). The method should print the following string: “dog_names all play together”.
#
# do_a_trick: If the dog is trained the method should print one of the following sentences at random:
# “dog_name does a barrel roll”.
# “dog_name stands on his back legs”.
# “dog_name shakes your hand”.
# “dog_name plays dead”.

from ex_xp import Dog
from random import choice

class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False

    def train(self):
        self.bark()
        self.trained = True

    def play(self, *args):
        dogs = [dog.name for dog in args]
        dogs.append(self.name)
        print(*dogs, 'all play together')

    def do_a_trick(self):
        if self.trained:
            tricks = ['does a barrel roll', 'stands on his back legs', 'shakes your hand', 'plays dead']
            print(self.name, choice(tricks))


dog1 = PetDog('Bubba', 10, 46)
dog2 = PetDog('Milky', 5, 20)
dog3 = PetDog('Simba', 13, 18)

dog1.play(dog2, dog3)
dog1.train()
dog1.do_a_trick()


'does a barrel roll', 'stands on his back legs', 'shakes your hand', 'plays dead'