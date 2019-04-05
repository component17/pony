from rpi_ws281x import *
import sys
import time
import threading
from threading import*
import json
import RPi.GPIO as GPIO


LED_layout = []
LED_layout = [[18, [14,]], [12,[15,]], [10,[23,]]]
#print (LED_layout[0][1][0])
#print (LED_layout.index([5, [4,]]))
#print (LED_layout.index([6,[3,]]))



port0 = Adafruit_NeoPixel(60, 19, 800000, 5, False, 255,1)
port1 = Adafruit_NeoPixel(60, 12, 800000, 5, False, 255)
port2 = Adafruit_NeoPixel(60, 21, 800000, 5, False, 255)



port0.begin()
port1.begin()
port2.begin()

GPIO.setmode(GPIO.BCM)
GPIO.setup(LED_layout[0][1][0], GPIO.IN)
GPIO.setup(LED_layout[1][1][0], GPIO.IN)

def sensEvent(chanel):
    print(chanel)
    #LED_layout.index()



GPIO.add_event_detect(LED_layout[0][1][0], GPIO.FALLING, callback=sensEvent, bouncetime=1)
GPIO.add_event_detect(LED_layout[1][1][0], GPIO.FALLING, callback=sensEvent, bouncetime=1)





while(True):

    array = list(input())

    for led in range(0, 59):
        port0.setPixelColorRGB(led, 0,0,0)
        port1.setPixelColorRGB(led, 0,0,0)
        port2.setPixelColorRGB(led, 0,0,0)
    for data in array:
        if data["port"]==0:
            #print(data)
            #port = data["port"]
            #sensor = LED_layout[port][0]
            print (data)


            first_led = data["start"]
            last_led = data["end"]

            for led in range(first_led, last_led):
                print ("here1",data["color"]["r"], data["color"]["g"], data["color"]["b"])
                port0.setPixelColorRGB(led, data["color"]["r"], data["color"]["g"], data["color"]["b"])


            port0.show()
        elif data["port"]==1:
            #print(data)
            #port = data["port"]
            #sensor = LED_layout[port][0]
            print (data)
            #print("here2",data["color"]["r"], data["color"]["g"], data["color"]["b"])
            first_led = data["start"]
            last_led = data["end"]

            for led in range(first_led, last_led):
                print ("here1",data["color"]["r"], data["color"]["g"], data["color"]["b"])
                port1.setPixelColorRGB(led, data["color"]["r"], data["color"]["g"], data["color"]["b"])


            port1.show()
        if data["port"]==2:
            #print(data)
            #port = data["port"]
            #sensor = LED_layout[port][0]
            print (data)
            #print("here3",data["color"]["r"], data["color"]["g"], data["color"]["b"])
            first_led = data["start"]
            last_led = data["end"]

            for led in range(first_led, last_led):
                print ("here1",data["color"]["r"], data["color"]["g"], data["color"]["b"])
                port2.setPixelColorRGB(led, data["color"]["r"], data["color"]["g"], data["color"]["b"])


            port2.show()