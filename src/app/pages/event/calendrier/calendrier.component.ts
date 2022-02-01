import { Component, OnInit } from '@angular/core';
import { Calendar } from "src/app/interfaces/calendar";
import { Response } from "src/app/interfaces/response";
import { CalendarService } from "src/app/services/calendar.service";

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.scss']
})
export class CalendrierComponent implements OnInit {

  annonces: Calendar[] = [];
  page = 1;
  count = 0;
  tableSize = 8;
  tableSizes = [3, 6, 9, 12];

  constructor(private calendarServices: CalendarService) { }

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.calendarServices.all().subscribe((res: Response) => {
      this.annonces = res.data;
    });
  }

  onTableDataChange(event){
    this.page = event;
    this.refresh();
    window.scrollTo(0, 0);
  }  

  onTableSizeChange(event): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.refresh();
  }  

}
