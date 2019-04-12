#Kaitlin Wan
#SoftDev2 pd6
#K#16 - Do You Even List?

def checkPass1(lala):
    UC_UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    UC_LOWER = UC_UPPER.lower()
    NUMS = ['0','1','2','3','4','5','6','7','8','9']
    case1 = False
    case2 = False
    case3 = False
    #One of Each
    if len([1 for x in lala if x in UC_UPPER]) > 1:
        case1 = True
    if len([1 for x in lala if x in UC_LOWER]) > 1:
        case2 = True
    if len([1 for x in lala if x in NUMS]) >1:
        case3 = True
    return (case1 and case2 and case3)


print(checkPass1('HeLlO1111'))
print(checkPass1('klfjwlkfj132123JHJJ'))
print(checkPass1('He'))
print(checkPass1('eee'))


#Write a function that uses list comprehension to return a
#password's strength rating. This function should return a
#lower integer for a weak password and a higher integer for
#a stronger password. (Suggested scale: 1-10) Consider these criteria:

#mixture of upper- and lower-case
#inclusion of numerals
#inclusion of these non-alphanumeric chars: . ? ! & # , ; : - _ *

def ratePass(p):
    rating= 0
    UC_UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    UC_LOWER = UC_UPPER.lower()
    NUMS = ['0','1','2','3','4','5','6','7','8','9']
    special = [ '.', '?', '!' ,'&' ,'#', ',' ,';' ,':' ,'-', '_', '*']
    if len(p) < 6:
        return 0

    if len([1 for x in p if x in UC_UPPER]) >= 1:
        rating += 2
    if len([1 for x in p if x in UC_LOWER]) >= 1:
        rating += 2
    if len([1 for x in p if x in NUMS]) >= 1:
        rating += 2
    if len([1 for x in p if x in special]) >= 1:
        rating += 2

    if len(p) > 10:
        rating += 2
    return rating


print(ratePass('1111122223333344444ieieiuruHHHHH.'))
print(ratePass('HeLlO1111'))
print(ratePass('klfjwlkfj132123JHJJ'))
print(ratePass('He'))
print(ratePass('eee'))
