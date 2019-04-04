from rpi_ws281x import *
import sys
import time
import threading
from threading import*
import json
import RPi.GPIO as GPIO

strip = Adafruit_NeoPixel(60, 18, 800000, 5, False, 255)
strip.begin()




while(True):
    
    array = list(input())
    for led in range(0, 59):
        strip.setPixelColorRGB(led, 0,0,0)
    for data in array:
        
        print(data)
        

        first_led = data["start"]
        last_led = data["end"]

        for led in range(first_led, last_led):
            strip.setPixelColorRGB(led, data["color"]["r"], data["color"]["g"], data["color"]["b"])

        
        strip.show()