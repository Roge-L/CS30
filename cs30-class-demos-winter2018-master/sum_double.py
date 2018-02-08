## Given two int values, return their sum. Unless the two values are
## the same, then return double their sum.
##
##
##sumDouble(1, 2) → 3
##sumDouble(3, 2) → 5
##sumDouble(2, 2) → 8

def sum_double(a, b):
    if a == b:
        return (a+b)*2  # or a*4 
    else:
        return a+b
    
print(sum_double(3, 3))