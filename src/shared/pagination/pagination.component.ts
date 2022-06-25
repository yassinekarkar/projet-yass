import {Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'el-bill-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.less']
})
export class PaginationComponent  {
  @Input() current = 0;
  @Input() total = 0;
  @Input() pageSize = 0;
  @Output() pageSizeChangeEmitter = new EventEmitter<number>();
  @Output() pageIndexChangeEmitter = new EventEmitter<number>();
  pageSizes = [5, 10, 20, 30, 40];

  onSelectChange(pageSize: number) {
    this.pageSizeChangeEmitter.emit(pageSize);
  }

  pageIndexChange(index: number) {
    this.pageIndexChangeEmitter.emit(index);
  }

}
