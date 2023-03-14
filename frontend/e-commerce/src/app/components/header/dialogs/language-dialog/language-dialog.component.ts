import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { LanguagesContainerModule } from '../../language/languages-container/languages-container.module';

@Component({
  standalone: true,
  selector: 'app-language-dialog',
  templateUrl: './language-dialog.component.html',
  styleUrls: ['./language-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, LanguagesContainerModule],
})
export class LanguageDialogComponent {
  constructor(private dialogRef: MatDialogRef<LanguageDialogComponent>) {}
}
