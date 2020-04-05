import socketio
from apscheduler.schedulers.background import BackgroundScheduler
import random


# Socket connection for communication with the server
sio = socketio.Client()
sio.connect('https://cryptic-shore-88753.herokuapp.com:80')

# Scheduler for sending data to server after every regular intervals
scheduler = BackgroundScheduler()


def main():
    scheduler.start()


# Replace TickerRecognition with your module call as specified
def TickerRecognitionEmit():
    sio.emit('TickerRecognitionData', {
             'start': 5.3, 'end': 7.8, 'label': 'رد ہشت گر د و ں کی فا ئر نگ سے کر نل مبجیب ا لر حما ن شہید ، آ ئی ا یس پی'})


@sio.event
def TickerRecognitionCall(data):
    scheduler.add_job(TickerRecognitionEmit, 'interval', seconds=5)
    print('VideoTrigger Call with data', data)


@sio.event
def TickerRecognitionTerminate():
    scheduler.remove_all_jobs()
    print('Terminate all of the ongoing processes!')


if __name__ == '__main__':
    main()
