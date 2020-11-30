from __future__ import print_function
from operator import add
from pyspark.sql import SparkSession
import numpy
import sys
import pyspark


if len(sys.argv) != 2:
  raise Exception("Exactly 2 arguments are required: <inputUri> <outputUri>")

inputUri=sys.argv[1]

sc = pyspark.SparkContext()
lines = sc.textFile(sys.argv[1])
lines = lines.collect()

vec = []

count = 0

for line in lines:
	
	if count >= 2: ##skip first 2 line

		a = line.split()
		for val in a:
			x = val.strip('\'u')
			x = x.strip('\'')
			vec.append(float(x))
			

	
	count += 1

print("mean value is %s, Sigma is %s" % (numpy.mean(vec), numpy.var(vec)))



