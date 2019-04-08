from rpi_ws281x import *
import sys
import time
import threading
from threading import*
import json
import RPi.GPIO as GPIO
import socketio
import unicodedata
import ast
import argparse

def createParser ():
    parser = argparse.ArgumentParser()
    parser.add_argument ("--leds", default=1, type=int, required=True)
    parser.add_argument ("--port", default=1, type=int, required=True)
    return parser


parser = createParser()
namespace = parser.parse_args(sys.argv[1:])
ledsNumber = namespace.leds
socketPort = namespace.port
print (ledsNumber, socketPort)
class sensors:
    def __init__(self, port, sensor0Channel,sensor1Channel,sensor2Channel,sensor3Channel,sensor4Channel, stripPin):
        self.port = port
        self.sensor0Channel = sensor0Channel
        self.sensor1Channel = sensor1Channel
        self.sensor2Channel = sensor2Channel
        self.sensor3Channel = sensor3Channel
        self.sensor4Channel = sensor4Channel
        self.stripPin = stripPin
    def searchSensors(self, sensChan):
        sensorList = [self.sensor0Channel,self.sensor1Channel,self.sensor2Channel,self.sensor3Channel,self.sensor4Channel]
        if sensChan in  sensorList:
            print (sensChan, self.port)
            sio.emit("sensor:event",{"port":self.port, "sensor":sensChan})


    def getSensorPort(self):
        pass

port0Sensors = sensors(0,14,None,None,None,None,19)
port1Sensors = sensors(1,15,None,None,None,None,21)
port2Sensors = sensors(2,None,None,None,None,None,12)
#LED_layout = []
#LED_layout = [[19, [14,]], [21,[15,]], [12,[23,]]]
#print (LED_layout[0][1][0])
#print (LED_layout.index([5, [4,]]))
#print (LED_layout.index([6,[3,]]))



port0 = Adafruit_NeoPixel(ledsNumber, 19, 800000, 5, False, 255,1)
port1 = Adafruit_NeoPixel(ledsNumber, 12, 800000, 5, False, 255)
port2 = Adafruit_NeoPixel(ledsNumber, 21, 800000, 5, False, 255)



port0.begin()
port1.begin()
port2.begin()

GPIO.setmode(GPIO.BCM)
GPIO.setup(14, GPIO.IN)
GPIO.setup(15, GPIO.IN)




def logic(array):
    print (array)
    for led in range(0, 59):                ###Switching leds off at new requests
        port0.setPixelColorRGB(led, 0,0,0)
        port1.setPixelColorRGB(led, 0,0,0)
        port2.setPixelColorRGB(led, 0,0,0)

    port1.show()
    port2.show()
    port0.show()

    for data in array:                      ###Parsing requests for different ports
        print ("Func called")
        if data["port"]==0:

            first_led = data["start"]
            last_led = data["end"]
            for led in range(first_led, last_led):

                port0.setPixelColorRGB(led, data["color"]["r"], data["color"]["g"], data["color"]["b"])
            port0.show()
        elif data["port"]==1:

            first_led = data["start"]
            last_led = data["end"]
            for led in range(first_led, last_led):

                port1.setPixelColorRGB(led, data["color"]["r"], data["color"]["g"], data["color"]["b"])
            port1.show()
        elif data["port"]==2:

            first_led = data["start"]
            last_led = data["end"]
            for led in range(first_led, last_led):

                port2.setPixelColorRGB(led, data["color"]["r"], data["color"]["g"], data["color"]["b"])


            port2.show()




sio = socketio.Client()
@sio.on('connect')
def on_connect():

    print('connection established')

@sio.on('turn:led')
def on_turn_led(data):
    if data != None:
        array = ast.literal_eval(data)
        #print (type(array), array)
        print ("here")
        logic(array)
    else:
        pass



def sensEvent(chanel):                                  ###Sensor event, must return port id and sensor channel
    port0Sensors.searchSensors(chanel)
    port1Sensors.searchSensors(chanel)
    port2Sensors.searchSensors(chanel)

GPIO.add_event_detect(14, GPIO.FALLING, callback=sensEvent, bouncetime=1) ###Setting up sensors
GPIO.add_event_detect(15, GPIO.FALLING, callback=sensEvent, bouncetime=1)

@sio.on('disconnect')
def on_disconnect():
    print('disconnected from server')

sio.connect('http://localhost:{}'.format (socketPort))
sio.wait()