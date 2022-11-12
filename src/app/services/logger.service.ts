import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
/**
 * @description
 * logger service applies printing project logs, errors or warning in local environment and hides in production
 * @author Sen75 - Saleh alsaggaf
 */
@Injectable({
  providedIn: 'root'
})
export class LoggerService {


  log(message: string, value?: any) {
    if (!environment.production) {
      if (value) console.log(message, value);
      else console.log(message);
    }
  }

  error(message: string, value?: any) {
    if (!environment.production) {
      if (value) console.error(message, value);
      else console.error(message);
    }
  }

  warn(message: string, value?: any) {
    if (!environment.production) {
      if (value) console.warn(message, value);
      else console.warn(message);
    }
  }}
