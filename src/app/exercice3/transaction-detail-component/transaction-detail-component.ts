import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService } from '../transactionService';
import { Transaction } from '../transaction-model';
import { DateTimeHeaderComponent } from "../date-time-header-component/date-time-header-component";

@Component({
  selector: 'app-transaction-detail-component',
  imports: [DateTimeHeaderComponent],
  templateUrl: './transaction-detail-component.html',
  styleUrl: './transaction-detail-component.css'
})
  
  
export class TransactionDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  private transactionService = inject(TransactionService);
  
  transaction: Transaction | null = null;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      this.transactionService.getTransactionDetail(id).subscribe({
        next: (transaction) => {
          this.transaction = transaction;
        },
        error: (error) => {
          console.error('Erreur lors du chargement de la transaction:', error);
        }
      });
    }
  }

  goBack() {
    this.router.navigate(['/exercice3']);
  }
}