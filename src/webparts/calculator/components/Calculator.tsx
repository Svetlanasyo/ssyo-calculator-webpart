import * as React from 'react';
import styles from './Calculator.module.scss';
import { ICalculatorProps } from './ICalculatorProps';
import { Accordion } from './accordion/Accordion';


export default class Calculator extends React.Component<ICalculatorProps> {
  public render(): React.ReactElement<ICalculatorProps> {
    return (
      <div className={ styles.calculator }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
            <h1>{this.props.description}</h1>
              <Accordion results1={this.props.resultStack.pop()} results2={this.props.resultStack.pop()} results3={this.props.resultStack.pop()}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
