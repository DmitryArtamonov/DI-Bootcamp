# Challenge 1
# Ask a user for a word
# Write a program that creates a dictionary. This dictionary stores the indexes of each letter in a list.
#
# Make sure the letters are the keys.
# Make sure the letters are strings.
# Make sure the indexes are stored in a list and those lists are values.

def ch1():
    word = input()
    res ={}
    for letter in set(word):
        res[letter] = [i for i in range(len(word)) if word[i] == letter]
    print(res)
    return

# ch1()

# Challenge 2
# Create a program that prints a list of the items you can afford in the store with the money you have in your wallet.
# Sort the list in alphabetical order.
# Return “Nothing” if you can’t afford anything from the store.

def ch2():

    def money_to_int(price):
        return int(price.strip('$').replace(',', ''))

    def pricecheck(item):
        return money_to_int(item[1]) <= money_to_int(wallet)

    items_purchase = {
      "Water": "$10",
      "Bread": "$3",
      "TV": "$1,000",
      "Fertilizer": "$20"
    }
    wallet = "$19"

    res = sorted(list(dict(filter(pricecheck, items_purchase.items()))))

    print(res if res else 'Nothing')

ch2()