import { Component } from '@angular/core';
import { until } from 'selenium-webdriver';

type Unit = 'bit' | 'byte' | 'kilobit' | 'kilobyte' | 'megabit'

@Component({

  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],

})

export class HomePage {

  public fromUnit: Unit = 'bit';
  public toUnit: Unit = 'byte';

  public fromValue = 0;
  public toValue = 0;

  public temp: Unit = 'bit';
  public tempValue = 0;

  public calculate() {

    const valueInBits = this.fromValuetoBits();
    this.toValue = this.convertToValue(valueInBits);

  }

  public convertToValue(bits: number) {

    return bits / this.getUnitMultiplier(this.toUnit);

  }

  public fromValuetoBits() {

    return this.fromValue * this.getUnitMultiplier(this.fromValuetoBits);

  }

  public getUnitMultiplier(unit: Unit) {

    let power = 0;

    if (unit.startsWith('kilo')) {

      power = 1;

    } else if (unit.startsWith('mega')) {

      power = 2;

    } else if (unit.startsWith('giga')) {

      power = 3;

    } else if (unit.startsWith('tera')) {

      power = 4;

    }

    const byteMultiplier = unit.endsWith('byte') ? 8 : 1;

    return byteMultiplier * 1024 * power;

  }

  public change() {

    this.temp = this.toUnit;
    this.toUnit = this.fromUnit;
    
  }


}
