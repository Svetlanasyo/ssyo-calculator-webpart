declare interface ICalculatorWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  XFieldLabel: string;
  YFieldLabel: string;
  XFieldKey: string;
  YFieldKey: string;
  ChoiceGroupLabel: string;
  ErrorDivisionMessage: string;
  PlusOperation: string;
  MinusOperation: string;
  DivisionOperation: string;
  MultiplicationOperation: string;
  PiOperation: string;
  RemOfdivOperation: string;
  ChoiceGroupFieldID: string;
  ChoiceGroupWithCalloutValue: string;


}

declare module 'CalculatorWebPartStrings' {
  const strings: ICalculatorWebPartStrings;
  export = strings;
}
