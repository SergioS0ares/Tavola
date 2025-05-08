import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StickySearchService {
  private stickySubject = new BehaviorSubject<boolean>(false);
  sticky$ = this.stickySubject.asObservable();

  setSticky(isSticky: boolean) {
    this.stickySubject.next(isSticky);
  }
} 