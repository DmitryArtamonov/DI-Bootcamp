# Exercise 1 : Cars
# Instructions
# Copy the following string into your code: "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet".

comp_str = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"

# Convert it into a list using Python (don’t do it by hand!).

comp = comp_str.split(', ')

# Print out a message saying how many manufacturers/companies are in the list.

print(f"There are {len(comp)} companies in the list")

# Print the list of manufacturers in reverse/descending order (Z-A).

print(*sorted(comp, reverse=True), sep=', ')

# Using loops or list comprehension:
# Find out how many manufacturers’ names have the letter ‘o’ in them.

o_comp_numb = len(list(filter(lambda x: 'o' in x, comp)))

# Find out how many manufacturers’ names do not have the letter ‘i’ in them.

not_t_comp_numb = len(list(filter(lambda x: 't' not in x, comp)))

#
# Bonus: There are a few duplicates in this list:["Honda","Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
# Remove these programmatically. (Hint: you can use set to help you).
# Print out the companies without duplicates, in a comma-separated string with no line-breaks (eg. “Acura, Alfa Romeo, Aston Martin, …”), also print out a message saying how many companies are now in the list.

list = ["Honda","Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
new_list = set(list)
print(*sorted(new_list), sep=', ')
print(len(new_list))

# Bonus: Print out the list of manufacturers in ascending order (A-Z), but reverse the letters of each manufacturer’s name.
r_list = []
for c in sorted(comp):
    r_list.append(c[::-1])

print(r_list)