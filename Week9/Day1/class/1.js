const f = (length) => (weight) => (height) => length*weight*height

h10 = f(10)

h10_2 = h10(2)

res1 = h10(2)(5)
    console.log(res1)

res2 =h10(2)(3)
    console.log(res2)

res3 = h10_2(20)
    console.log(res3)