import * as React from 'react';
import styles from './Calculator.module.scss';
import { ICalculatorProps } from './ICalculatorProps';
import { Accordion } from './accordion/Accordion';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Calculator extends React.Component<ICalculatorProps> {
  public render(): React.ReactElement<ICalculatorProps> {
    return (
      <div className={ styles.calculator }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
            <h1>{this.props.description}</h1>
              <Accordion results1='123' results2='234' results3='345'/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
