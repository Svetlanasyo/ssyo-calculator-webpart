declare interface ICalculatorWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  XFieldLabel: string;
  YFieldLabel: string;
  ChoiceGroupLabel: string;
}

declare module 'CalculatorWebPartStrings' {
  const strings: ICalculatorWebPartStrings;
  export = strings;
}
