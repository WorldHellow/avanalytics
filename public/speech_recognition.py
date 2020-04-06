import socketio
from apscheduler.schedulers.background import BackgroundScheduler
import random


# Socket connection for communication with the server
sio = socketio.Client()
sio.connect('http://localhost:8080')

# Scheduler for sending data to server after every regular intervals
scheduler = BackgroundScheduler()


def main():
    scheduler.start()


# Replace SpeechRecognition with your module call as specified
def SpeechRecognitionEmit():
    sio.emit('SpeechRecognitionData',
             {"status": 0,
              "hypotheses": [{"utterance": "ایف آئی اے انکوائری رپورٹ: جہانگیر ترین سمیت اہم حکومتی اور سیاسی شخصیات چینی اور آٹے بحران کی ذمہ دار قرار"}],
              "id": "4e4594ee-bdb2-401f-8114-41a541d89eb8"}
             )


@sio.event
def SpeechRecognitionCall(data):
    scheduler.add_job(SpeechRecognitionEmit, 'interval', seconds=7.5)
    print('VideoTrigger Call with data', data)


@sio.event
def SpeechRecognitionTerminate():
    scheduler.remove_all_jobs()
    print('Terminate all of the ongoing processes!')


if __name__ == '__main__':
    main()
