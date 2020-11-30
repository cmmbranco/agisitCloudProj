import numpy
import sys
import random
import time
import pyspark
from pyspark.sql import SparkSession
from operator import add



def mapper(seed):
	for val in vec:
		return(seed)




if len(sys.argv) != 2:
  raise Exception("Exactly 2 arguments are required: <inputUri> <outputUri>")

inputUri=sys.argv[1]



## Create spark context

sc = pyspark.SparkContext()

## Read file from hdfs into vector


lines = sc.textFile(sys.argv[1])
lines = lines.collect()

vec = []

count = 0


## Could be improved with flatten
for line in lines:
	
	if count >= 2: ## skip first 2 line

		a = line.split()
		for val in a:
			x = val.strip('\'u')
			x = x.strip('\'')
			vec.append(float(x))
			

	
	count += 1



seeds = sc.parallelize(val for val in vec)

results = seeds.map(mapper)

sum1 = results.reduce(add)
count = seeds.count()

avg = sum1/count

print("SUM: {}".format(sum1))

print("Count: {}".format(count))

print("Avg: {}".format(avg))






