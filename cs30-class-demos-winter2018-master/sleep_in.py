## The parameter weekday is true if it is a weekday, and the parameter
## vacation is true if we are on vacation. We sleep in if it is not a
## weekday or we're on vacation. Return true if we sleep in.
##
##
##sleepIn(false, false) → true
##sleepIn(true, false) → false
##sleepIn(false, true) → true

def sleep_in(weekday, vacation):
##    if weekday - vacation > 0:
##        return False
##    else:
##        return True
    if vacation:
        return True
    return not weekday

print(sleep_in(False, False))
print(sleep_in(True, False))
print(sleep_in(False, True))
print(sleep_in(True, True))