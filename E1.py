# S = 1 + 2 + 3 + ... + n
def sum(n):
    s = 0
    i = 0
    while i <= n:
        s += i
        i += 1
    return s

print(sum(10))
