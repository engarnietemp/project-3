import { Component, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Alignment {
  value: 'left' | 'center' | 'right';
  label: string;
}


@Component({
  selector: 'app-exercice1',
  imports: [CommonModule, FormsModule],
  templateUrl: './exercice1.html',
  styleUrl: './exercice1.css'
})
  
export class Exercice1Component {

  fontList: string[] = ['Arial', 'Times New Roman', 'Courier New', 'Georgia', 'Verdana'];
  
  selectedFont: string = 'Arial';
  fontSize: number = 12;
  name: string = 'NOM';

  selectedAlignment: string = 'left';

  alignments: Alignment[] = [
    { value: 'left', label: 'Gauche' },
    { value: 'center', label: 'Centré' },
    { value: 'right', label: 'Droite' }
  ];
  
  get textStyle() : {} {
    return {
      'font-family': this.selectedFont,
      'font-size': this.fontSize + 'px',
      'text-align': this.selectedAlignment
    };
  }
}
