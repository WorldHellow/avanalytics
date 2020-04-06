import socketio
from apscheduler.schedulers.background import BackgroundScheduler
import random


# Socket connection for communication with the server
sio = socketio.Client()
sio.connect('http://cryptic-shore-88753.herokuapp.com')

# Scheduler for sending data to server after every regular intervals
scheduler = BackgroundScheduler()


def main():
    scheduler.start()


# Replace FacialRecognition with your module call as specified
def FacialRecognitionEmit():
    sio.emit('FacialRecognitionData', [
        {"celeb_id": 83, "timestamp": 25.32},
        {"celeb_id": 28, "timestamp": 25.32}
    ])


@sio.event
def FacialRecognitionCall(data):
    scheduler.add_job(FacialRecognitionEmit, 'interval', seconds=5)
    print('VideoTrigger Call with data', data)


@sio.event
def FacialRecognitionTerminate():
    scheduler.remove_all_jobs()
    print('Terminate all of the ongoing processes!')


if __name__ == '__main__':
    main()
