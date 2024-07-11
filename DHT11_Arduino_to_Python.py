import serial
import time
import schedule

def main_func():
    try:
        # Replace 'COM16' with the correct port for your Arduino
        arduino = serial.Serial('COM16', 9600, timeout=1)
        print('Established serial connection to Arduino')
        
        while True:
            arduino_data = arduino.readline().decode("utf-8").strip()
            print(arduino_data)

            try:
                # Assuming the format is "humidity temperature"
                parts = arduino_data.split()
                
                if len(parts) == 2:
                    humidity, temperature = parts
                    humidity = float(humidity)
                    temperature = float(temperature)
                    print(f'Humidity: {humidity} %, Temperature: {temperature} *C')
                else:
                    print(f'Ignored non-sensor data: {arduino_data}')

            except ValueError as e:
                print(f'Error parsing sensor data: {arduino_data} - {e}')

    except serial.SerialException as e:
        print(f'Error: {e}')
    except Exception as e:
        print(f'Unexpected error: {e}')
    finally:
        if 'arduino' in locals() and arduino.is_open:
            arduino.close()
            print('Connection closed')
        print('<----------------------------->')

# ----------------------------------------Main Code------------------------------------
print('Program started')

# Setting up the Arduino
schedule.every(10).seconds.do(main_func)

while True:
    schedule.run_pending()
    time.sleep(1)
