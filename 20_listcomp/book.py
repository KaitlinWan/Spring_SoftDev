from functools import reduce


#print(words)

# Find the frequency of a single word
def wordfreq(word):
    words = open('book.txt', 'r').read().lower().strip(',.?!;:').split()
    count = [1 for x in words if x == word]
    return reduce((lambda x,y: x+y), count)

print(wordfreq('peter'))


# Find the total frequency of a group of words
def phrasefreq(phrase):
    words = open('book.txt', 'r').read().lower().strip(',.?!;:').split(phrase)
    return len(words)-1

print(phrasefreq('peter pan'))


# Find the most frequently occurring word
def most_freq():
    words = open('book.txt', 'r').read().lower().strip(',.?!;:').split()
    s = set(words)
    freq = [{words.count(x): x} for x in s]
    vals = [list(x.keys())[0] for x in freq]
    m = max(vals)
    for i in freq:
        if m in i:
            return i[m]

print(most_freq())
