import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Transaction } from '../transaction-model';
import { TransactionService } from '../transactionService';
import { DateTimeHeaderComponent } from '../date-time-header-component/date-time-header-component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-exercice3-component',
  imports: [CommonModule, DateTimeHeaderComponent],
  templateUrl: './transaction-list-component.html',
  styleUrl: './transaction-list-component.css'
})
  
  
export class TransactionListComponent implements OnInit {
  private transactionService = inject(TransactionService);
  private router = inject(Router);
  
  transactions: Transaction[] = [];
  
  sortField: keyof Transaction = 'id';
  sortDirection: 'asc' | 'desc' = 'asc';

  ngOnInit() {
    this.transactionService.getAllTransactions().subscribe({
      next: (transactions) => {
        this.transactions = transactions;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des transactions:', error);
      }
    });
  }

  goToDetail(transactionId: string) {
    this.router.navigate(['/exercice3/transaction', transactionId]);
  }

  sortBy(field: keyof Transaction) {
    if (this.sortField === field) {
      // Revert column if same direction
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = field;
      this.sortDirection = 'asc';
    }
    this.applySorting();
  }

private applySorting() {
  this.transactions.sort((a, b) => {
    const aValue = a[this.sortField];
    const bValue = b[this.sortField];
    
    if (aValue == null && bValue == null) return 0;
    if (aValue == null) return 1;
    if (bValue == null) return -1;
    
    let comparison = 0;
    if (aValue > bValue) comparison = 1;
    if (aValue < bValue) comparison = -1;
    
    return this.sortDirection === 'desc' ? -comparison : comparison;
  });
}
}
