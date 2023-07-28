import {Breakpoints} from "@angular/cdk/layout";

export const LAYOUT_SHORT_TYPES: { [key: string]: string } = {
  [Breakpoints.Handset]: Breakpoints.Handset,
  [Breakpoints.HandsetPortrait]: Breakpoints.Handset,
  [Breakpoints.HandsetLandscape]: Breakpoints.Handset,
  [Breakpoints.Tablet]: Breakpoints.Tablet,
  [Breakpoints.TabletPortrait]: Breakpoints.Tablet,
  [Breakpoints.TabletLandscape]: Breakpoints.Tablet,
  [Breakpoints.Web]: Breakpoints.Web,
  [Breakpoints.WebPortrait]: Breakpoints.Web,
  [Breakpoints.WebLandscape]: Breakpoints.Web,
};

export const LAYOUT_OBSERVE_TYPES: string[] = [Breakpoints.Handset, Breakpoints.Tablet, Breakpoints.Web];
