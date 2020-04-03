import socketio
from apscheduler.schedulers.background import BackgroundScheduler

sio = socketio.Client()
sio.connect('http://localhost:8909')


def FacialRecognitionEmit():
    sio.emit('FacialRecognition', {
        "celeb_ids": ["0002", "0003", "0005"]
    })


scheduler = BackgroundScheduler()
scheduler.add_job(FacialRecognitionEmit, 'interval', seconds=3)
scheduler.start()
