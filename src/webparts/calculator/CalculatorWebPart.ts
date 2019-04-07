import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
} from '@microsoft/sp-property-pane';

import * as strings from 'CalculatorWebPartStrings';
import Calculator from './components/Calculator';
import { ICalculatorProps } from './components/ICalculatorProps';
import { PropertyFieldNumber } from '@pnp/spfx-property-controls/lib/PropertyFieldNumber';
import { CalloutTriggers } from '@pnp/spfx-property-controls/lib/Callout';
import { PropertyFieldChoiceGroupWithCallout } from '@pnp/spfx-property-controls/lib/PropertyFieldChoiceGroupWithCallout';

export interface ICalculatorWebPartProps {
  description: string;
  choiceGroupWithCalloutValue: string;
  x: number;
  y: number;
  resultStack: string[];

}


export default class CalculatorWebPart extends BaseClientSideWebPart<ICalculatorWebPartProps> {

  protected get disableReactivePropertyChanges(): boolean {
    return true;
  }

  public render(): void {
    const element: React.ReactElement<ICalculatorProps > = React.createElement(
      Calculator,
      {
        description: this.properties.description,
        resultStack: this.addToResults()
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
    this.properties.resultStack = [];
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected addToResults(): string[] {
    let sum: string;
    switch(this.properties.choiceGroupWithCalloutValue) { 
      case strings.PlusOperation: { 
         sum = (this.properties.x + this.properties.y)+'';
         break; 
      } 
      case strings.MinusOperation: { 
        sum = (this.properties.x - this.properties.y)+'';
        break; 
      
      case strings.DevisionOperation: { 
        if (this.properties.y !== 0) {
          sum = (this.properties.x/this.properties.y)+'';  
        } else {
          sum = strings.ErrorDivisionMessage;
        }
        break; 
      }

      case strings.RemOfDiv: { 
        if (this.properties.y !== 0) {
          sum = (this.properties.x%this.properties.y)+'';  
        } else {
          sum = strings.ErrorDivisionMessage;
        }
        break;
      }

      case strings.MultiOperation: {
        sum = (this.properties.x * this.properties.y)+'';
        break; 
      }
      case strings.MultiplicationOperation: {
        sum = (this.properties.x * this.properties.y)+'';
        break; 
      }
      case strings.PiValue: {
        sum = '3,14';
        break; 
      }
      default: { 
         sum = '0';
         break; 
      } 
   } 
    this.properties.resultStack.push(sum);
    return this.properties.resultStack.slice(-3);
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyFieldNumber(strings.XFieldKey, {
                  key: strings.XFieldKey,
                  label: strings.XFieldLabel,
                  description: strings.XFieldLabel,
                  disabled: false
                }),
                PropertyFieldNumber(strings.YFieldKey, {
                  key: strings.YFieldKey,
                  label: strings.YFieldLabel,
                  description: strings.YFieldLabel,
                  disabled: false
                }),
                PropertyFieldChoiceGroupWithCallout(strings.ChoiceGroupWithCalloutValue, {
                  calloutContent: React.createElement('div', {}, 'Select operation'),
                  calloutTrigger: CalloutTriggers.Hover,
                  key: strings.ChoiceGroupWithCalloutFieldId,
                  label: strings.ChoiceGroupLabel,
                  options: [{
                    key: strings.PlusOperation,
                    text: strings.PlusOperation,
                    checked: this.properties.choiceGroupWithCalloutValue === strings.PlusOperation
                  }, {
                    key: strings.MinusOperation,
                    text: strings.MinusOperation,
                    checked: this.properties.choiceGroupWithCalloutValue === strings.MinusOperation
                  }, {
                    key: strings.DevisionOperation,
                    text: strings.DevisionOperation,
                    checked: this.properties.choiceGroupWithCalloutValue === strings.DevisionOperation
                  },  {
                    key: strings.RemOfDiv,
                    text: strings.RemOfDiv,
                    checked: this.properties.choiceGroupWithCalloutValue === strings.RemOfDiv
                  }, {
                    key: strings.MultiOperation,
                    text: strings.MultiOperation,
                    checked: this.properties.choiceGroupWithCalloutValue === strings.MultiOperation
                  }, {
                    key: strings.PiValue,
                    text: strings.PiValue,
                    checked: this.properties.choiceGroupWithCalloutValue === strings.PiValue
                  }]
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
