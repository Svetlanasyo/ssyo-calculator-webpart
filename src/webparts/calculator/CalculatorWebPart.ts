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

}


export default class CalculatorWebPart extends BaseClientSideWebPart<ICalculatorWebPartProps> {

  protected get disableReactivePropertyChanges(): boolean {
    return true;
  }

  public render(): void {
    const element: React.ReactElement<ICalculatorProps > = React.createElement(
      Calculator,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
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
                PropertyFieldNumber("x", {
                  key: "x",
                  label: strings.XFieldLabel,
                  description: strings.XFieldLabel,
                  disabled: false
                }),
                PropertyFieldNumber("y", {
                  key: "y",
                  label: strings.YFieldLabel,
                  description: strings.YFieldLabel,
                  disabled: false
                }),
                PropertyFieldChoiceGroupWithCallout('choiceGroupWithCalloutValue', {
                  calloutContent: React.createElement('div', {}, 'Select preferrable mobile platform'),
                  calloutTrigger: CalloutTriggers.Hover,
                  key: 'choiceGroupWithCalloutFieldId',
                  label: strings.ChoiceGroupLabel,
                  options: [{
                    key: 'plus',
                    text: 'plus',
                    checked: this.properties.choiceGroupWithCalloutValue === 'plus'
                  }, {
                    key: 'minus',
                    text: 'minus',
                    checked: this.properties.choiceGroupWithCalloutValue === 'minus'
                  }, {
                    key: 'division',
                    text: 'division',
                    checked: this.properties.choiceGroupWithCalloutValue === 'division'
                  },  {
                    key: 'remofdivision',
                    text: 'remainder of the division',
                    checked: this.properties.choiceGroupWithCalloutValue === 'remofdivision'
                  }, {
                    key: 'multiplication',
                    text: 'multiplication',
                    checked: this.properties.choiceGroupWithCalloutValue === 'multiplication'
                  }, {
                    key: 'pi',
                    text: 'PI',
                    checked: this.properties.choiceGroupWithCalloutValue === 'pi'
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
