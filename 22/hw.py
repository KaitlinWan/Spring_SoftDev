#Kaitlin Wan
#SoftDev2 pd6
#K22 -- Closure
#2019-05-01

# To CREATE a closure
# define nested fcn nested fxn must reger to var defined in enclosing fxn
# return nested fxn

# TASK:
# write a closure with function named "repeat" such that the funtion calls shown below will
# yield the outputs shown:

def repeat(word):
    def times(n):
        return word*n
    return times


r1 = repeat('hello')
r2 = repeat('goodbye')
print(r1(2))
print(r2(2))
print(repeat('cool')(3))

def make_counter():
    count = 0
    def inner():
        nonlocal count
        count += 1
        return count
    def access():
        nonlocal count
        return count
    return inner, access

ctr1, acc1 = make_counter()
print(ctr1())
print(acc1())

print(ctr1())
print(acc1())

ctr2, acc2 = make_counter()

print(ctr2())
print(acc2())

print(ctr1())
print(acc1())

print(ctr2())
print(acc2())
