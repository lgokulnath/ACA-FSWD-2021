'''
import matplotlib.pyplot as plt
x = [7,8,9,10,11,12,13]
y = [5,8,6,9,7,9,8]
plt.plot(x,y,'-', label='Second')
plt.xlabel('X-Axis')
plt.ylabel('Y-Axis')
plt.title('SP')
plt.legend()
plt.show()

from matplotlib import pyplot as plt
x = list(range(1,7))
y = [3,7,4,9,5,9]
plt.scatter(x,y,marker='^', s=200, color='Green', label='Scatter')
plt.xlabel('X-Axis')
plt.ylabel('Y-Axis')
plt.title('Scatter Plot')
plt.legend(loc = 'best')
plt.show()

#------------------------
from matplotlib import pyplot as plt
pop=[2,5,3,7,5,9,7,10,13,14,17,16,13,23,24,25,26,27,23,24,25,26]
ran=[1,10,20,30]
plt.hist(pop, ran, histtype='bar', label='population vs groups', rwidth=0.8)
plt.xlabel('X-Axis')
plt.ylabel('Y-Axis')
plt.title('SP')
plt.legend()
plt.show()
'''

from matplotlib import pyplot as plt
x=[3,6,4,8,9]
plt.pie(x,autopct='%.2f', labels=['a', 'b', 'c', 'd', 'e'], shadow= True, explode = (0.3,0,0,0,0))
plt.show()
