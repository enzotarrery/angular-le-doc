import { Component, Input, OnInit } from '@angular/core';
import { Statistic } from '../models/statistic';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss'],
})
export class StatisticComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() statistic!: Statistic;
}
