import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../calendar.component';

@Component({
  selector: 'app-on-event-click-modal',
  templateUrl: './on-event-click-modal.component.html',
  styleUrls: ['./on-event-click-modal.component.scss']
})
export class OnEventClickModalComponent implements OnInit {
  myOption = 1;
  constructor(
    private dialogRef: MatDialogRef<OnEventClickModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data: DialogData
  ) { }

  ngOnInit() {
    console.log(this.data);
  }
  onClose(): void {
    this.dialogRef.close();
  }

  onOk(): void {
    this.dialogRef.close();
  }
  changeOption(value: number) {
    this.myOption = value;
  }
}
