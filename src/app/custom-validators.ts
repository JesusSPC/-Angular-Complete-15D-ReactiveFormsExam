import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export class CustomValidators {
  static invalidProjectName(control: FormControl): {[s: string]: boolean} {
    if (control.value === 'Test') {
      return {'projectNameInvalid': true};
    }
    return null;
  }

  static asyncInvalidProjectName(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((res, rej) => {
      setTimeout(() => {
        if (control.value === 'Testproject') {
          res({'projectNameInvalid': true});
        } else {
          res(null);
        }
      }, 1500);
    });
    return promise;
  }
}
