import { Injectable, EventEmitter } from '@angular/core';
import { PaymentrequestItem } from './paymentrequest.service.interfaces';

import { ThrowStmt } from '@angular/compiler';


@Injectable({
  providedIn: 'root',
})
export class PaymentrequestService {
  requestedPayments: PaymentrequestItem[] = [];

  public PaymentRequestRemoved: EventEmitter<PaymentrequestItem> = new EventEmitter<PaymentrequestItem>();

  constructor() {}

  reomvePaymentRequest(id: number) {
    let index = this.requestedPayments.findIndex(d => d.id === id); 
    let deletedrequest = this.requestedPayments[index];
    this.requestedPayments.splice(index, 1); 
    this.PaymentRequestRemoved.emit(deletedrequest);
  }
  
  setPaymentRequest(requestedItem: PaymentrequestItem) {
    this.requestedPayments.push(requestedItem);
  }

  get getRequestForMe() {
    return this.requestedPayments.length > 0;
  }
  
  get getRequestedPayments() {
    return this.requestedPayments;
  }
}
