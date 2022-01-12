import { Component, OnInit } from '@angular/core';
import { Statistic } from 'src/app/models/statistic';
import { StatisticsService } from 'src/app/services/statistics.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
  statistics: Statistic[] = [];

  constructor(private statisticsService: StatisticsService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.statisticsService.getStatistics().subscribe((response) => {
      this.statistics = response;
    });
  }
}
