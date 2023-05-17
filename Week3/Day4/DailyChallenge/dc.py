# Part I
# First, we will analyze a simple string, like “A good book would sometimes cost as much as a good house.”
#
# Create a class called Text that takes a string as an argument and store the text in a attribute.
# Hint: You need to manually copy-paste the text, straight into the code

class Text:
    def __init__(self, text):
        self.text = text
        # onlyLettersText = ''.join([letter.lower() for letter in text if letter.isalpha() or letter == ' '])
        self.words_list = text.split()



# Implement the following methods:
# a method to return the frequency of a word in the text (assume words are separated by whitespace)
# return None or a meaningful message.
    def get_frequency(self, word):
        if word not in self.text: return None
        return self.words_list.count(word)

# a method that returns the most common word in the text.

    def most_common_word(self):
        return max(self.words_list, key=self.get_frequency)

# a method that returns a list of all the unique words in the text.
    def get_unique_words(self):
        return sorted(list(set(self.words_list)))

# Part II
# Then, we will analyze a text coming from an external text file. Download the_stranger.txt file.
#
# Implement a classmethod that returns a Text instance but with a text file:

    def from_file(self, url):
        with open(file=url, mode='r', encoding='UTF-8') as text_file:
            self.__init__(text_file.read())

# Bonus:
# Create a class called TextModification that inherits from Text.

class TextModification(Text):

    def __init__(self, text):
        super().__init__(text)

# Implement the following methods:
# a method that returns the text without any punctuation.
    def clear_punctuation(self):
        return ''.join([letter for letter in self.text if letter.isalpha() or letter == ' '])

# a method that returns the text without any english stop-words (check out what this is !!).
    def remove_stop_words(self):
        with open('stop_words_english.txt', mode='r', encoding='UTF-8') as stop_words_file:
            stop_words = [stopword.replace('\n', '') for stopword in stop_words_file.readlines()]

        new_list = []

        for word in self.words_list:
            if not word.isalpha():
                clean_word = ''.join([letter.lower() for letter in word if word.isalpha()])
            else: clean_word = word.lower()

            if clean_word not in stop_words:
                new_list.append(word)

        return ' '.join(new_list)




# a method that returns the text without any special characters.
# Note: Feel free to implement/create any attribute, method or function needed to make this work, be creative :)

text = Text('A good book would sometimes cost as much as a good house.')

print(text.text)
print(text.words_list)

print(text.get_frequency('as'))
print(text.most_common_word())

text.from_file('the_stranger.txt')
print(text.most_common_word())



text2 = TextModification('A good book would sometimes cost as much as a good house.')
print(text2.clear_punctuation())
print(text2.remove_stop_words())