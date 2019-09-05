import { Injectable } from '@angular/core';
import PNotify from 'pnotify/dist/es/PNotify';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons';

@Injectable()
export class PNotifyService {
  getPNotify() {
    PNotifyButtons; // Initiate the module. Important!
    return PNotify;
  }

  success() {
    PNotify.error({
      title: 'Desktop Success',
      text: 'All done! Come back to my tab!',
      modules: {
        Desktop: {
          desktop: true
        }
      }
    });
  }
}