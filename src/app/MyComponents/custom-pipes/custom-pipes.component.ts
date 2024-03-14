import { Component, OnInit } from '@angular/core';
import { PowerPipe } from 'src/app/CustomPipes/power.pipe';
@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.css']
})
export class CustomPipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
