import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  Password = '';
  length = 0;
  //get length
  onchangeLength(value: string) {
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    } else {
      console.log('not a number');
    }
  }
  // watch changes on checkboxs
  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }
  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }
  // create password
  onButtonClick() {
    const numbers = '123456789';
    const letters = 'abcdefghijklmnOPQRSTUVWXYZ';
    const symbols = '!@#$%^&*-+';
    let validChars = '';
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }
    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.Password = generatedPassword;
  }
  // must input length & check one of the boxes to enable button
  disAblebuttons() {
    let dis = this.includeSymbols || this.includeNumbers || this.includeLetters;
    return dis && this.length;
  }

  getPassword() {
    return this.Password;
  }
}
