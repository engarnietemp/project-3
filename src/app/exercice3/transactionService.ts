import { inject, Injectable } from "@angular/core";
import { Transaction } from "./transaction-model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TransactionService {
    private readonly http = inject(HttpClient)

    getAllTransactions(): Observable<Transaction[]> {
        return this.http.get<Transaction[]>('/data/transactions.json');
    }

    getTransactionDetail(id : string) : Observable<Transaction> {
        return this.http.get<Transaction>(`/data/${id}.json`)
    }
}