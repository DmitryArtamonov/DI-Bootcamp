# 🌟 Exercise 1 – Random Sentence Generator

from random import choice


def get_words_from_file():
    """This function should read the file’s content and return the words as a collection"""

    with open('sowpods.txt', mode='r', encoding='UTF-8') as words_file:
        words = [word.replace('\n', '') for word in words_file.readlines()]

    return words


def get_random_sentence(length):
    """The length parameter will be used to determine how many words the sentence should have. The function should:
    - use the words list to get your random words.
    - the amount of words should be the value of the length parameter."""
    sentence = ''
    words = get_words_from_file()
    for i in range(length):
        sentence += choice(words).lower()

        if i == length - 1:
            sentence += '.'
        else:
            sentence += ' '

    return sentence.capitalize()


print(get_random_sentence(10))

def main():
    """The function asks the user how long they want the sentence to be.
Acceptable values are: an integer between 2 and 20.
Prints a sentence generated with random words """

    print(f'INFO:\n{main.__doc__}\n')

    while True:
        try:
            lengh = int(input('How long the sentence to be? Acceptable values are: an integer between 2 and 20 :'))
            if lengh < 2 or lengh > 20: raise ValueError
            break
        except:
            print('Wrong input, try again')

    print(get_random_sentence(lengh))


# print('Exercise 1:')
# main()


# 🌟 Exercise 2: Working With JSON

import json
sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

json_obj = json.loads(sampleJson)

# Access the nested “salary” key from the JSON-string above.
print(json_obj['company']['employee']['payable']['salary'])

# Add a key called “birth_date” to the JSON-string at the same level as the “name” key.
json_obj['company']['employee']['birth_date'] = None

# Save the dictionary as JSON to a file.
json.dump(json_obj, open('json.txt', mode='w'))

