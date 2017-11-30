declare const enum IQPreviousNextDisplayMode {
  Default = 0,
  AlwaysHide = 1,
  AlwaysShow = 2
}

declare class IQKeyboardManager extends NSObject {
  enable: boolean;
  previousNextDisplayMode: IQPreviousNextDisplayMode;
  static sharedManager(): IQKeyboardManager;
}