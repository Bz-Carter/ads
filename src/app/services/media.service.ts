import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class MediaService extends RestService {
  endpoint(): string {
    return 'getmedias';
  }
  public search = new BehaviorSubject<string>("");
}
