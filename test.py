from rpi_ws281x import *
import sys
import time
import threading
from threading import *
import json
import RPi.GPIO as GPIO
import sys
from time import sleep


class sensors:  ###Sending sensor callback
    def __init__(self, port, sensor0Channel, sensor1Channel, sensor2Channel, sensor3Channel, sensor4Channel, stripPin):
        self.port = port
        self.sensor0Channel = sensor0Channel
        self.sensor1Channel = sensor1Channel
        self.sensor2Channel = sensor2Channel
        self.sensor3Channel = sensor3Channel
        self.sensor4Channel = sensor4Channel
        self.stripPin = stripPin

    def searchSensors(self, sensChan):
        sensorList = [self.sensor0Channel, self.sensor1Channel, self.sensor2Channel, self.sensor3Channel,
                      self.sensor4Channel]
        if sensChan in sensorList:
            print (sensChan, self.port)

    def getSensorPort(self):
        pass


port0Sensors = sensors(0, 14, None, None, None, None, 19)
port1Sensors = sensors(1, 15, None, None, None, None, 21)
port2Sensors = sensors(2, None, None, None, None, None, 12)
# LED_layout = []
# LED_layout = [[19, [14,]], [21,[15,]], [12,[23,]]]
# print (LED_layout[0][1][0])
# print (LED_layout.index([5, [4,]]))
# print (LED_layout.index([6,[3,]]))


port0 = Adafruit_NeoPixel(60, 19, 800000, 5, False, 255, 1)
port1 = Adafruit_NeoPixel(60, 12, 800000, 5, False, 255)
port2 = Adafruit_NeoPixel(60, 21, 800000, 5, False, 255)

port0.begin()
port1.begin()
port2.begin()

GPIO.setmode(GPIO.BCM)
GPIO.setup(14, GPIO.IN)
GPIO.setup(15, GPIO.IN)


def sensEvent(chanel):  ###Sensor event, must return port id and sensor channel
    port0Sensors.searchSensors(chanel)
    port1Sensors.searchSensors(chanel)
    port2Sensors.searchSensors(chanel)


GPIO.add_event_detect(14, GPIO.FALLING, callback=sensEvent, bouncetime=1)  ###Setting up sensors
GPIO.add_event_detect(15, GPIO.FALLING, callback=sensEvent, bouncetime=1)

while (True):

    array = list(input())
    sleep(1)
    sys.stdout.write("test" + '\n')
    for led in range(0, 59):  ###Switching leds off at new requests
        port0.setPixelColorRGB(led, 0, 0, 0)
        port1.setPixelColorRGB(led, 0, 0, 0)
        port2.setPixelColorRGB(led, 0, 0, 0)

    port1.show()
    port2.show()
    port0.show()

    for data in array:  ###Parsing requests for different ports
        if data["port"] == 0:
            # print (data)
            first_led = data["start"]
            last_led = data["end"]
            for led in range(first_led, last_led):
                # print ("here1",data["color"]["r"], data["color"]["g"], data["color"]["b"])
                port0.setPixelColorRGB(led, data["color"]["r"], data["color"]["g"], data["color"]["b"])
            port0.show()
        elif data["port"] == 1:
            # print (data)
            first_led = data["start"]
            last_led = data["end"]
            for led in range(first_led, last_led):
                # print ("here1",data["color"]["r"], data["color"]["g"], data["color"]["b"])
                port1.setPixelColorRGB(led, data["color"]["r"], data["color"]["g"], data["color"]["b"])
            port1.show()
        elif data["port"] == 2:
            # print (data)
            first_led = data["start"]
            last_led = data["end"]
            for led in range(first_led, last_led):
                # print ("here1",data["color"]["r"], data["color"]["g"], data["color"]["b"])
                port2.setPixelColorRGB(led, data["color"]["r"], data["color"]["g"], data["color"]["b"])

            port2.show()