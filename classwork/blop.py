print("hello")
      
def inc(x):
    return x + 1

f = inc


print (f(10))


def adder(a,b):
    return a+b


def caller(c):
    print(c(2,4))
    print(c(3,5))


caller(adder)


def outer(x):
    def contains(l):
        return x in l
    return contains

#Returns a Function
contains_15 = outer(15)

contains_15([1,2,3,4,5])
contains_15([13,14,15,16,17])
print(contains_15(range(1,20)))

