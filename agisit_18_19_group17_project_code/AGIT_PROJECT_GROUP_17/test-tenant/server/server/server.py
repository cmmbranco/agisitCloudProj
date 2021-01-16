import threading

from flask import Flask, Response, jsonify
from flask import request
from flask_restful import Resource, Api
from flask_cors import CORS
import json
from collections import namedtuple
import subprocess

######################################################################
#
# Definition of flask server app
#
######################################################################

def server() :
    print("start server")
    app = Flask(__name__)
    cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
    api = Api(app)

    class GCResponseData(object):
        mean = 0
        sdeviation = 0

        def toJSON(self):
            return json.dumps(self, default=lambda o: o.__dict__,
                              sort_keys=True, indent=4)

    class RequestStruct:
        def __init__(self, **entries):
            self.__dict__.update(entries)

    def makeGCResponseData(name, age):
        student = GCResponseData()
        student.name = name
        student.age = age
        return student

    def makeDatFile(reqObj):
        print("...")
        firstLine = reqObj.sizesOfTrucks = " " + reqObj.sizesOfTrucks + "\n"
        secondLine = "EOD\n"
        thirdLine = " " + str(reqObj.mean) + " " + str(reqObj.sdeviation) + " :zmu, sigma\n"
        fourthine = " " + "1e" + str(reqObj.powerOfSamples) + " 0" + " :trials_lg, iseed"

        f = open("d_emitter.dat", "w+")
        f.write(firstLine)
        f.write(secondLine)
        f.write(thirdLine)
        f.write(fourthine)
        f.close()

    @app.route('/api/')
    def hello_world():
        jsonObj = makeGCResponseData(1, 2)
        return Response(jsonObj.toJSON(), content_type='application/json; charset=utf-8')

    @app.route('/api/GoogleCloudResponse',  methods=['POST'])
    def googleCloudResponse():
        req = request.get_json(force=True, silent=False, cache=True)
        print(req)
        reqObj = RequestStruct(**req)
        makeDatFile(reqObj)
        subprocess.call(['./webxscript.sh'])
        # get the webscript response
        jsonObj = makeGCResponseData(1, 2)
        return Response(jsonObj.toJSON(), content_type='application/json; charset=utf-8')


    app.run(host="localhost",debug=False, use_reloader=False)



######################################################################
#
# Starting thread flask server app
#
######################################################################


if __name__ == "__main__":
    server_app = threading.Thread(target=server)
    server_app.daemon = True

    server_app.start()
    server_app.join()
