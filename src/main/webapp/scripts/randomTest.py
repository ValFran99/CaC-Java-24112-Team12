
def RK2ndOrderFor2ndOrderODE(f, x0, v0, t0, T, N):
    h = (T - t0) / N
    x = x0
    v = v0
    t = t0
    for i in range(N):
        k1x = v
        k1v = f(x, v, t)
        k2x = v + h * k1v
        k2v = f(x + h * k1x, v + h * k1v, t + h)
        x = x + h * (k1x + k2x) / 2
        v = v + h * (k1v + k2v) / 2
        t = t + h
    return x, v