import socketio
from apscheduler.schedulers.background import BackgroundScheduler
import random

sio = socketio.Client()
sio.connect('http://localhost:8909')

# Replace your FacialRecognition with your module call as specified


def FacialRecognitionEmit():
    sio.emit('FacialRecognitionData', {
             'celeb_id': random.randint(0, 107), 'timestamp': 1.0434782608695652})


@sio.event
def FacialRecognitionCall(data):
    print('VideoTrigger Call with data', data)
    scheduler = BackgroundScheduler()
    scheduler.add_job(FacialRecognitionEmit, 'interval', seconds=5)
    scheduler.start()


@sio.event
def FacialRecognitionTerminate(data):
    print('Terminate all of the ongoing processes!')
