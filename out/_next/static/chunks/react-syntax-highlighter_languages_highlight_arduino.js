(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_arduino"],{

/***/ "./node_modules/highlight.js/lib/languages/arduino.js":
/*!************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/arduino.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Arduino
Author: Stefania Mellai <s.mellai@arduino.cc>
Description: The Arduino® Language is a superset of C++. This rules are designed to highlight the Arduino® source code. For info about language see http://www.arduino.cc.
Requires: cpp.js
Website: https://www.arduino.cc
*/

/** @type LanguageFn */
function arduino(hljs) {

	var ARDUINO_KW = {
      keyword:
        'boolean byte word String',
      built_in:
        'setup loop ' +
        'KeyboardController MouseController SoftwareSerial ' +
        'EthernetServer EthernetClient LiquidCrystal ' +
        'RobotControl GSMVoiceCall EthernetUDP EsploraTFT ' +
        'HttpClient RobotMotor WiFiClient GSMScanner ' +
        'FileSystem Scheduler GSMServer YunClient YunServer ' +
        'IPAddress GSMClient GSMModem Keyboard Ethernet ' +
        'Console GSMBand Esplora Stepper Process ' +
        'WiFiUDP GSM_SMS Mailbox USBHost Firmata PImage ' +
        'Client Server GSMPIN FileIO Bridge Serial ' +
        'EEPROM Stream Mouse Audio Servo File Task ' +
        'GPRS WiFi Wire TFT GSM SPI SD ' +
        'runShellCommandAsynchronously analogWriteResolution ' +
        'retrieveCallingNumber printFirmwareVersion ' +
        'analogReadResolution sendDigitalPortPair ' +
        'noListenOnLocalhost readJoystickButton setFirmwareVersion ' +
        'readJoystickSwitch scrollDisplayRight getVoiceCallStatus ' +
        'scrollDisplayLeft writeMicroseconds delayMicroseconds ' +
        'beginTransmission getSignalStrength runAsynchronously ' +
        'getAsynchronously listenOnLocalhost getCurrentCarrier ' +
        'readAccelerometer messageAvailable sendDigitalPorts ' +
        'lineFollowConfig countryNameWrite runShellCommand ' +
        'readStringUntil rewindDirectory readTemperature ' +
        'setClockDivider readLightSensor endTransmission ' +
        'analogReference detachInterrupt countryNameRead ' +
        'attachInterrupt encryptionType readBytesUntil ' +
        'robotNameWrite readMicrophone robotNameRead cityNameWrite ' +
        'userNameWrite readJoystickY readJoystickX mouseReleased ' +
        'openNextFile scanNetworks noInterrupts digitalWrite ' +
        'beginSpeaker mousePressed isActionDone mouseDragged ' +
        'displayLogos noAutoscroll addParameter remoteNumber ' +
        'getModifiers keyboardRead userNameRead waitContinue ' +
        'processInput parseCommand printVersion readNetworks ' +
        'writeMessage blinkVersion cityNameRead readMessage ' +
        'setDataMode parsePacket isListening setBitOrder ' +
        'beginPacket isDirectory motorsWrite drawCompass ' +
        'digitalRead clearScreen serialEvent rightToLeft ' +
        'setTextSize leftToRight requestFrom keyReleased ' +
        'compassRead analogWrite interrupts WiFiServer ' +
        'disconnect playMelody parseFloat autoscroll ' +
        'getPINUsed setPINUsed setTimeout sendAnalog ' +
        'readSlider analogRead beginWrite createChar ' +
        'motorsStop keyPressed tempoWrite readButton ' +
        'subnetMask debugPrint macAddress writeGreen ' +
        'randomSeed attachGPRS readString sendString ' +
        'remotePort releaseAll mouseMoved background ' +
        'getXChange getYChange answerCall getResult ' +
        'voiceCall endPacket constrain getSocket writeJSON ' +
        'getButton available connected findUntil readBytes ' +
        'exitValue readGreen writeBlue startLoop IPAddress ' +
        'isPressed sendSysex pauseMode gatewayIP setCursor ' +
        'getOemKey tuneWrite noDisplay loadImage switchPIN ' +
        'onRequest onReceive changePIN playFile noBuffer ' +
        'parseInt overflow checkPIN knobRead beginTFT ' +
        'bitClear updateIR bitWrite position writeRGB ' +
        'highByte writeRed setSpeed readBlue noStroke ' +
        'remoteIP transfer shutdown hangCall beginSMS ' +
        'endWrite attached maintain noCursor checkReg ' +
        'checkPUK shiftOut isValid shiftIn pulseIn ' +
        'connect println localIP pinMode getIMEI ' +
        'display noBlink process getBand running beginSD ' +
        'drawBMP lowByte setBand release bitRead prepare ' +
        'pointTo readRed setMode noFill remove listen ' +
        'stroke detach attach noTone exists buffer ' +
        'height bitSet circle config cursor random ' +
        'IRread setDNS endSMS getKey micros ' +
        'millis begin print write ready flush width ' +
        'isPIN blink clear press mkdir rmdir close ' +
        'point yield image BSSID click delay ' +
        'read text move peek beep rect line open ' +
        'seek fill size turn stop home find ' +
        'step tone sqrt RSSI SSID ' +
        'end bit tan cos sin pow map abs max ' +
        'min get run put',
      literal:
        'DIGITAL_MESSAGE FIRMATA_STRING ANALOG_MESSAGE ' +
        'REPORT_DIGITAL REPORT_ANALOG INPUT_PULLUP ' +
        'SET_PIN_MODE INTERNAL2V56 SYSTEM_RESET LED_BUILTIN ' +
        'INTERNAL1V1 SYSEX_START INTERNAL EXTERNAL ' +
        'DEFAULT OUTPUT INPUT HIGH LOW'
  };

  var ARDUINO = hljs.requireLanguage('cpp').rawDefinition();

  var kws = ARDUINO.keywords;

  kws.keyword += ' ' + ARDUINO_KW.keyword;
  kws.literal += ' ' + ARDUINO_KW.literal;
  kws.built_in += ' ' + ARDUINO_KW.built_in;

  ARDUINO.name = 'Arduino';
  ARDUINO.aliases = ['ino'];

  return ARDUINO;
}

module.exports = arduino;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2FyZHVpbm8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19oaWdobGlnaHRfYXJkdWluby5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogQXJkdWlub1xuQXV0aG9yOiBTdGVmYW5pYSBNZWxsYWkgPHMubWVsbGFpQGFyZHVpbm8uY2M+XG5EZXNjcmlwdGlvbjogVGhlIEFyZHVpbm/CriBMYW5ndWFnZSBpcyBhIHN1cGVyc2V0IG9mIEMrKy4gVGhpcyBydWxlcyBhcmUgZGVzaWduZWQgdG8gaGlnaGxpZ2h0IHRoZSBBcmR1aW5vwq4gc291cmNlIGNvZGUuIEZvciBpbmZvIGFib3V0IGxhbmd1YWdlIHNlZSBodHRwOi8vd3d3LmFyZHVpbm8uY2MuXG5SZXF1aXJlczogY3BwLmpzXG5XZWJzaXRlOiBodHRwczovL3d3dy5hcmR1aW5vLmNjXG4qL1xuXG4vKiogQHR5cGUgTGFuZ3VhZ2VGbiAqL1xuZnVuY3Rpb24gYXJkdWlubyhobGpzKSB7XG5cblx0dmFyIEFSRFVJTk9fS1cgPSB7XG4gICAgICBrZXl3b3JkOlxuICAgICAgICAnYm9vbGVhbiBieXRlIHdvcmQgU3RyaW5nJyxcbiAgICAgIGJ1aWx0X2luOlxuICAgICAgICAnc2V0dXAgbG9vcCAnICtcbiAgICAgICAgJ0tleWJvYXJkQ29udHJvbGxlciBNb3VzZUNvbnRyb2xsZXIgU29mdHdhcmVTZXJpYWwgJyArXG4gICAgICAgICdFdGhlcm5ldFNlcnZlciBFdGhlcm5ldENsaWVudCBMaXF1aWRDcnlzdGFsICcgK1xuICAgICAgICAnUm9ib3RDb250cm9sIEdTTVZvaWNlQ2FsbCBFdGhlcm5ldFVEUCBFc3Bsb3JhVEZUICcgK1xuICAgICAgICAnSHR0cENsaWVudCBSb2JvdE1vdG9yIFdpRmlDbGllbnQgR1NNU2Nhbm5lciAnICtcbiAgICAgICAgJ0ZpbGVTeXN0ZW0gU2NoZWR1bGVyIEdTTVNlcnZlciBZdW5DbGllbnQgWXVuU2VydmVyICcgK1xuICAgICAgICAnSVBBZGRyZXNzIEdTTUNsaWVudCBHU01Nb2RlbSBLZXlib2FyZCBFdGhlcm5ldCAnICtcbiAgICAgICAgJ0NvbnNvbGUgR1NNQmFuZCBFc3Bsb3JhIFN0ZXBwZXIgUHJvY2VzcyAnICtcbiAgICAgICAgJ1dpRmlVRFAgR1NNX1NNUyBNYWlsYm94IFVTQkhvc3QgRmlybWF0YSBQSW1hZ2UgJyArXG4gICAgICAgICdDbGllbnQgU2VydmVyIEdTTVBJTiBGaWxlSU8gQnJpZGdlIFNlcmlhbCAnICtcbiAgICAgICAgJ0VFUFJPTSBTdHJlYW0gTW91c2UgQXVkaW8gU2Vydm8gRmlsZSBUYXNrICcgK1xuICAgICAgICAnR1BSUyBXaUZpIFdpcmUgVEZUIEdTTSBTUEkgU0QgJyArXG4gICAgICAgICdydW5TaGVsbENvbW1hbmRBc3luY2hyb25vdXNseSBhbmFsb2dXcml0ZVJlc29sdXRpb24gJyArXG4gICAgICAgICdyZXRyaWV2ZUNhbGxpbmdOdW1iZXIgcHJpbnRGaXJtd2FyZVZlcnNpb24gJyArXG4gICAgICAgICdhbmFsb2dSZWFkUmVzb2x1dGlvbiBzZW5kRGlnaXRhbFBvcnRQYWlyICcgK1xuICAgICAgICAnbm9MaXN0ZW5PbkxvY2FsaG9zdCByZWFkSm95c3RpY2tCdXR0b24gc2V0RmlybXdhcmVWZXJzaW9uICcgK1xuICAgICAgICAncmVhZEpveXN0aWNrU3dpdGNoIHNjcm9sbERpc3BsYXlSaWdodCBnZXRWb2ljZUNhbGxTdGF0dXMgJyArXG4gICAgICAgICdzY3JvbGxEaXNwbGF5TGVmdCB3cml0ZU1pY3Jvc2Vjb25kcyBkZWxheU1pY3Jvc2Vjb25kcyAnICtcbiAgICAgICAgJ2JlZ2luVHJhbnNtaXNzaW9uIGdldFNpZ25hbFN0cmVuZ3RoIHJ1bkFzeW5jaHJvbm91c2x5ICcgK1xuICAgICAgICAnZ2V0QXN5bmNocm9ub3VzbHkgbGlzdGVuT25Mb2NhbGhvc3QgZ2V0Q3VycmVudENhcnJpZXIgJyArXG4gICAgICAgICdyZWFkQWNjZWxlcm9tZXRlciBtZXNzYWdlQXZhaWxhYmxlIHNlbmREaWdpdGFsUG9ydHMgJyArXG4gICAgICAgICdsaW5lRm9sbG93Q29uZmlnIGNvdW50cnlOYW1lV3JpdGUgcnVuU2hlbGxDb21tYW5kICcgK1xuICAgICAgICAncmVhZFN0cmluZ1VudGlsIHJld2luZERpcmVjdG9yeSByZWFkVGVtcGVyYXR1cmUgJyArXG4gICAgICAgICdzZXRDbG9ja0RpdmlkZXIgcmVhZExpZ2h0U2Vuc29yIGVuZFRyYW5zbWlzc2lvbiAnICtcbiAgICAgICAgJ2FuYWxvZ1JlZmVyZW5jZSBkZXRhY2hJbnRlcnJ1cHQgY291bnRyeU5hbWVSZWFkICcgK1xuICAgICAgICAnYXR0YWNoSW50ZXJydXB0IGVuY3J5cHRpb25UeXBlIHJlYWRCeXRlc1VudGlsICcgK1xuICAgICAgICAncm9ib3ROYW1lV3JpdGUgcmVhZE1pY3JvcGhvbmUgcm9ib3ROYW1lUmVhZCBjaXR5TmFtZVdyaXRlICcgK1xuICAgICAgICAndXNlck5hbWVXcml0ZSByZWFkSm95c3RpY2tZIHJlYWRKb3lzdGlja1ggbW91c2VSZWxlYXNlZCAnICtcbiAgICAgICAgJ29wZW5OZXh0RmlsZSBzY2FuTmV0d29ya3Mgbm9JbnRlcnJ1cHRzIGRpZ2l0YWxXcml0ZSAnICtcbiAgICAgICAgJ2JlZ2luU3BlYWtlciBtb3VzZVByZXNzZWQgaXNBY3Rpb25Eb25lIG1vdXNlRHJhZ2dlZCAnICtcbiAgICAgICAgJ2Rpc3BsYXlMb2dvcyBub0F1dG9zY3JvbGwgYWRkUGFyYW1ldGVyIHJlbW90ZU51bWJlciAnICtcbiAgICAgICAgJ2dldE1vZGlmaWVycyBrZXlib2FyZFJlYWQgdXNlck5hbWVSZWFkIHdhaXRDb250aW51ZSAnICtcbiAgICAgICAgJ3Byb2Nlc3NJbnB1dCBwYXJzZUNvbW1hbmQgcHJpbnRWZXJzaW9uIHJlYWROZXR3b3JrcyAnICtcbiAgICAgICAgJ3dyaXRlTWVzc2FnZSBibGlua1ZlcnNpb24gY2l0eU5hbWVSZWFkIHJlYWRNZXNzYWdlICcgK1xuICAgICAgICAnc2V0RGF0YU1vZGUgcGFyc2VQYWNrZXQgaXNMaXN0ZW5pbmcgc2V0Qml0T3JkZXIgJyArXG4gICAgICAgICdiZWdpblBhY2tldCBpc0RpcmVjdG9yeSBtb3RvcnNXcml0ZSBkcmF3Q29tcGFzcyAnICtcbiAgICAgICAgJ2RpZ2l0YWxSZWFkIGNsZWFyU2NyZWVuIHNlcmlhbEV2ZW50IHJpZ2h0VG9MZWZ0ICcgK1xuICAgICAgICAnc2V0VGV4dFNpemUgbGVmdFRvUmlnaHQgcmVxdWVzdEZyb20ga2V5UmVsZWFzZWQgJyArXG4gICAgICAgICdjb21wYXNzUmVhZCBhbmFsb2dXcml0ZSBpbnRlcnJ1cHRzIFdpRmlTZXJ2ZXIgJyArXG4gICAgICAgICdkaXNjb25uZWN0IHBsYXlNZWxvZHkgcGFyc2VGbG9hdCBhdXRvc2Nyb2xsICcgK1xuICAgICAgICAnZ2V0UElOVXNlZCBzZXRQSU5Vc2VkIHNldFRpbWVvdXQgc2VuZEFuYWxvZyAnICtcbiAgICAgICAgJ3JlYWRTbGlkZXIgYW5hbG9nUmVhZCBiZWdpbldyaXRlIGNyZWF0ZUNoYXIgJyArXG4gICAgICAgICdtb3RvcnNTdG9wIGtleVByZXNzZWQgdGVtcG9Xcml0ZSByZWFkQnV0dG9uICcgK1xuICAgICAgICAnc3VibmV0TWFzayBkZWJ1Z1ByaW50IG1hY0FkZHJlc3Mgd3JpdGVHcmVlbiAnICtcbiAgICAgICAgJ3JhbmRvbVNlZWQgYXR0YWNoR1BSUyByZWFkU3RyaW5nIHNlbmRTdHJpbmcgJyArXG4gICAgICAgICdyZW1vdGVQb3J0IHJlbGVhc2VBbGwgbW91c2VNb3ZlZCBiYWNrZ3JvdW5kICcgK1xuICAgICAgICAnZ2V0WENoYW5nZSBnZXRZQ2hhbmdlIGFuc3dlckNhbGwgZ2V0UmVzdWx0ICcgK1xuICAgICAgICAndm9pY2VDYWxsIGVuZFBhY2tldCBjb25zdHJhaW4gZ2V0U29ja2V0IHdyaXRlSlNPTiAnICtcbiAgICAgICAgJ2dldEJ1dHRvbiBhdmFpbGFibGUgY29ubmVjdGVkIGZpbmRVbnRpbCByZWFkQnl0ZXMgJyArXG4gICAgICAgICdleGl0VmFsdWUgcmVhZEdyZWVuIHdyaXRlQmx1ZSBzdGFydExvb3AgSVBBZGRyZXNzICcgK1xuICAgICAgICAnaXNQcmVzc2VkIHNlbmRTeXNleCBwYXVzZU1vZGUgZ2F0ZXdheUlQIHNldEN1cnNvciAnICtcbiAgICAgICAgJ2dldE9lbUtleSB0dW5lV3JpdGUgbm9EaXNwbGF5IGxvYWRJbWFnZSBzd2l0Y2hQSU4gJyArXG4gICAgICAgICdvblJlcXVlc3Qgb25SZWNlaXZlIGNoYW5nZVBJTiBwbGF5RmlsZSBub0J1ZmZlciAnICtcbiAgICAgICAgJ3BhcnNlSW50IG92ZXJmbG93IGNoZWNrUElOIGtub2JSZWFkIGJlZ2luVEZUICcgK1xuICAgICAgICAnYml0Q2xlYXIgdXBkYXRlSVIgYml0V3JpdGUgcG9zaXRpb24gd3JpdGVSR0IgJyArXG4gICAgICAgICdoaWdoQnl0ZSB3cml0ZVJlZCBzZXRTcGVlZCByZWFkQmx1ZSBub1N0cm9rZSAnICtcbiAgICAgICAgJ3JlbW90ZUlQIHRyYW5zZmVyIHNodXRkb3duIGhhbmdDYWxsIGJlZ2luU01TICcgK1xuICAgICAgICAnZW5kV3JpdGUgYXR0YWNoZWQgbWFpbnRhaW4gbm9DdXJzb3IgY2hlY2tSZWcgJyArXG4gICAgICAgICdjaGVja1BVSyBzaGlmdE91dCBpc1ZhbGlkIHNoaWZ0SW4gcHVsc2VJbiAnICtcbiAgICAgICAgJ2Nvbm5lY3QgcHJpbnRsbiBsb2NhbElQIHBpbk1vZGUgZ2V0SU1FSSAnICtcbiAgICAgICAgJ2Rpc3BsYXkgbm9CbGluayBwcm9jZXNzIGdldEJhbmQgcnVubmluZyBiZWdpblNEICcgK1xuICAgICAgICAnZHJhd0JNUCBsb3dCeXRlIHNldEJhbmQgcmVsZWFzZSBiaXRSZWFkIHByZXBhcmUgJyArXG4gICAgICAgICdwb2ludFRvIHJlYWRSZWQgc2V0TW9kZSBub0ZpbGwgcmVtb3ZlIGxpc3RlbiAnICtcbiAgICAgICAgJ3N0cm9rZSBkZXRhY2ggYXR0YWNoIG5vVG9uZSBleGlzdHMgYnVmZmVyICcgK1xuICAgICAgICAnaGVpZ2h0IGJpdFNldCBjaXJjbGUgY29uZmlnIGN1cnNvciByYW5kb20gJyArXG4gICAgICAgICdJUnJlYWQgc2V0RE5TIGVuZFNNUyBnZXRLZXkgbWljcm9zICcgK1xuICAgICAgICAnbWlsbGlzIGJlZ2luIHByaW50IHdyaXRlIHJlYWR5IGZsdXNoIHdpZHRoICcgK1xuICAgICAgICAnaXNQSU4gYmxpbmsgY2xlYXIgcHJlc3MgbWtkaXIgcm1kaXIgY2xvc2UgJyArXG4gICAgICAgICdwb2ludCB5aWVsZCBpbWFnZSBCU1NJRCBjbGljayBkZWxheSAnICtcbiAgICAgICAgJ3JlYWQgdGV4dCBtb3ZlIHBlZWsgYmVlcCByZWN0IGxpbmUgb3BlbiAnICtcbiAgICAgICAgJ3NlZWsgZmlsbCBzaXplIHR1cm4gc3RvcCBob21lIGZpbmQgJyArXG4gICAgICAgICdzdGVwIHRvbmUgc3FydCBSU1NJIFNTSUQgJyArXG4gICAgICAgICdlbmQgYml0IHRhbiBjb3Mgc2luIHBvdyBtYXAgYWJzIG1heCAnICtcbiAgICAgICAgJ21pbiBnZXQgcnVuIHB1dCcsXG4gICAgICBsaXRlcmFsOlxuICAgICAgICAnRElHSVRBTF9NRVNTQUdFIEZJUk1BVEFfU1RSSU5HIEFOQUxPR19NRVNTQUdFICcgK1xuICAgICAgICAnUkVQT1JUX0RJR0lUQUwgUkVQT1JUX0FOQUxPRyBJTlBVVF9QVUxMVVAgJyArXG4gICAgICAgICdTRVRfUElOX01PREUgSU5URVJOQUwyVjU2IFNZU1RFTV9SRVNFVCBMRURfQlVJTFRJTiAnICtcbiAgICAgICAgJ0lOVEVSTkFMMVYxIFNZU0VYX1NUQVJUIElOVEVSTkFMIEVYVEVSTkFMICcgK1xuICAgICAgICAnREVGQVVMVCBPVVRQVVQgSU5QVVQgSElHSCBMT1cnXG4gIH07XG5cbiAgdmFyIEFSRFVJTk8gPSBobGpzLnJlcXVpcmVMYW5ndWFnZSgnY3BwJykucmF3RGVmaW5pdGlvbigpO1xuXG4gIHZhciBrd3MgPSBBUkRVSU5PLmtleXdvcmRzO1xuXG4gIGt3cy5rZXl3b3JkICs9ICcgJyArIEFSRFVJTk9fS1cua2V5d29yZDtcbiAga3dzLmxpdGVyYWwgKz0gJyAnICsgQVJEVUlOT19LVy5saXRlcmFsO1xuICBrd3MuYnVpbHRfaW4gKz0gJyAnICsgQVJEVUlOT19LVy5idWlsdF9pbjtcblxuICBBUkRVSU5PLm5hbWUgPSAnQXJkdWlubyc7XG4gIEFSRFVJTk8uYWxpYXNlcyA9IFsnaW5vJ107XG5cbiAgcmV0dXJuIEFSRFVJTk87XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJkdWlubztcbiJdLCJzb3VyY2VSb290IjoiIn0=