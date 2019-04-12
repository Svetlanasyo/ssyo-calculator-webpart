import * as React from 'react';
import { IAccordionProps } from './IAccordionProps';
import { escape } from '@microsoft/sp-lodash-subset';
import * as jQuery from 'jquery';
import 'jqueryui';
import { SPComponentLoader } from '@microsoft/sp-loader';
import styles from '../Calculator.module.scss';




export class Accordion extends React.Component<IAccordionProps> {

    public componentDidMount() {
        SPComponentLoader.loadCss('/styles/jquery-ui-1.11.4.custom/jquery-ui.theme.css');

        const accordionOptions: JQueryUI.AccordionOptions = {
            animate: true,
            collapsible: false,
            icons: {
              header: 'ui-icon-circle-arrow-e',
              activeHeader: 'ui-icon-circle-arrow-s'
            }
          };
        
          jQuery('.accordion').accordion(accordionOptions);
    }

  public render(): React.ReactElement<IAccordionProps> {

    return (
              <div className={styles.accordion + " accordion"}>
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
