text = input('text: ').split()
for w in set(text):
    print(f'{w}:{text.count(w)}')