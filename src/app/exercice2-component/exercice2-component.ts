import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type OperatorType = '+' | '-' | '*' | '/';

interface Operation {
  id: number;
  date: Date;
  result: number;
  expression: string;
}

@Component({
  selector: 'app-exercice2',
  imports: [CommonModule, FormsModule],
  templateUrl: './exercice2-component.html',
  styleUrl: './exercice2-component.css'
})

export class Exercice2Component {
  firstNumber: number = 0;
  secondNumber: number = 0;
  result: number | null = null;

  selectedOperator: OperatorType = '+';

  operatorList: Array<{value: OperatorType, label: string}> = [
    { value: '+', label: '+' },
    { value: '-', label: '-' },
    { value: '*', label: '×' },
    { value: '/', label: '÷' }
  ];

  operationHistory: Operation[] = []; 
  
  // Used for Operation History
  private nextId: number = 1;

  onCompute(): void {
    let calculResult: number;
    
    switch (this.selectedOperator) {
      case '+':
        calculResult = this.firstNumber + this.secondNumber;
        break;
      case '-':
        calculResult = this.firstNumber - this.secondNumber;
        break;
      case '*':
        calculResult = this.firstNumber * this.secondNumber;
        break;
      case '/':
        if (this.secondNumber === 0) {
          alert('Division par zéro impossible');
          return;
        }
        calculResult = this.firstNumber / this.secondNumber;
        break;
      default:
        return;
    }

    this.result = calculResult;
    
    const operation: Operation = {
      id: this.nextId++,
      date: new Date(),
      result: calculResult,
      expression: `${this.firstNumber} ${this.selectedOperator} ${this.secondNumber}`
    };
    
    this.operationHistory.unshift(operation);
  }

  onDelete(index: number): void {
    this.operationHistory.splice(index, 1);
  }
}