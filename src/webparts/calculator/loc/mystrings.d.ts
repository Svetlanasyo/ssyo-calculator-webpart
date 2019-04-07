declare interface ICalculatorWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  XFieldLabel: string;
  YFieldLabel: string;
  XFieldKey: string;
  YFieldKey: string;
  ChoiceGroupLabel: string;
  PlusOperation: string;
  MinusOperation: string;
  DevisionOperation: string;
  ErrorDivisionMessage: string;
  RemOfDiv: string;
  MultiOperation: string;
  PiValue: string;
  ChoiceGroupWithCalloutValue: string;
  ChoiceGroupWithCalloutFieldId: string;
}

declare module 'CalculatorWebPartStrings' {
  const strings: ICalculatorWebPartStrings;
  export = strings;
}
