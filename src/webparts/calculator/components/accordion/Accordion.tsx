import * as React from 'react';
import { IAccordionProps } from './IAccordionProps';
import { escape } from '@microsoft/sp-lodash-subset';

export class Accordion extends React.Component<IAccordionProps> {

  public render(): React.ReactElement<IAccordionProps> {
    return (
              <div className="accordion">
                <h3>Wynik 1</h3>
                <div>
                    <p>
                        {this.props.results1}
                    </p>
                </div>
                <h3>Wynik 2</h3>
                <div>
                    <p>
                        {this.props.results2}
                    </p>
                </div>
                <h3>Wynik 3</h3>
                <div>
                    <p>
                        {this.props.results3}
                    </p>
                </div>
            </div>
    );
  }
}
