n = int(input())

def primes_up_to(limit):
    sieve = [True] * (limit + 1)
    sieve[0] = sieve[1] = False
    p = 2
    while p * p <= limit:
        if sieve[p]:
            for j in range(p * p, limit + 1, p):
                sieve[j] = False
        p += 1
    return [i for i, ok in enumerate(sieve) if ok]

ans = 0

limit1 = int(n ** (1/8)) + 1
for p in primes_up_to(limit1):
    if p ** 8 <= n:
        ans += 1

limit2 = int(n ** 0.5) + 1
pr = primes_up_to(limit2)
m = len(pr)

for i in range(m):
    for j in range(i + 1, m):
        if pr[i] * pr[i] * pr[j] * pr[j] <= n:
            ans += 1
        else:
            break

print(ans)
