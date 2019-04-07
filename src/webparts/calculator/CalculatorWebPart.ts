import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';

import * as strings from 'CalculatorWebPartStrings';
import Calculator from './components/Calculator';
import { ICalculatorProps } from './components/ICalculatorProps';
import { PropertyFieldNumber } from '@pnp/spfx-property-controls/lib/PropertyFieldNumber';
import { CalloutTriggers } from '@pnp/spfx-property-controls/lib/Callout';
import { PropertyFieldCheckboxWithCallout } from '@pnp/spfx-property-controls/lib/PropertyFieldCheckboxWithCallout';

export interface ICalculatorWebPartProps {
  description: string;
  checkboxWithCalloutValue: boolean;
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
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                PropertyFieldNumber("x", {
                  key: "x",
                  label: strings.XFieldLabel,
                  description: "x field",
                  disabled: false
                }),
                PropertyFieldNumber("y", {
                  key: "y",
                  label: strings.YFieldLabel,
                  description: "y field",
                  disabled: false
                }),
                PropertyFieldCheckboxWithCallout('checkboxWithCalloutValue', {
                  calloutTrigger: CalloutTriggers.Click,
                  key: 'checkboxWithCalloutFieldId',
                  calloutContent: React.createElement('p', {}, 'Check the checkbox to accept Application Terms and Conditions'),
                  calloutWidth: 200,
                  text: 'Accept terms and conditions',
                  checked: this.properties.checkboxWithCalloutValue
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
