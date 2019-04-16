def pythagfor(n):
    result=[]
    for x in range(n):
        for y in range(n):
            for z in range(n):
                part = []
                if x > 0 and y>0 and z>0:
                    if x*x + y*y == z*z:
                        part.append(x)
                        part.append(y)
                        part.append(z)
                        result.append(part)
    return result

def pythagcomp(n):
    return [[x,y,z] for x in range (n)[1:] for y in range (n)[1:] for z in range (n)[1:] if x*x + y*y == z*z]

print (pythagcomp(6))
