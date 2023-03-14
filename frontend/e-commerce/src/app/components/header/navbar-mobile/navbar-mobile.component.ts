import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LanguageDialogComponent } from '../dialogs/language-dialog/language-dialog.component';

@Component({
  selector: 'app-navbar-mobile',
  templateUrl: './navbar-mobile.component.html',
  styleUrls: ['./navbar-mobile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarMobileComponent {
  constructor(private matDialog: MatDialog) {}

  public openDialog(): void {
    this.matDialog.open(LanguageDialogComponent, {
      width: '100%',
      height: '100%',
      maxWidth: '100%',
    });
  }
}
