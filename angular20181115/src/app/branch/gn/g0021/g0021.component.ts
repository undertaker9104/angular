import { CheckService } from './check.service';
import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';
import { G0021InputVO } from './input/g0021-input-vo';
import { G0021OutputVO } from './output/g0021-output-vo';
@Component({
  selector: 'app-g0021',
  templateUrl: './g0021.component.html',
  styleUrls: ['./g0021.component.css']
})
export class G0021Component implements OnInit {
  g0021InputVo = new G0021InputVO();
  g0021OutputVo: G0021OutputVO;
  error = '';
  constructor(private checkService: CheckService,
              private httpService: HttpService) { }

  ngOnInit() {

  }
  onClick() {
    this.error = '';
    this.g0021OutputVo = null ;
    const errorMsg = this.checkService.check(this.g0021InputVo);
    if (!errorMsg.trim()) {
      this.httpService.request(this.g0021InputVo).subscribe(outputVO => {
        this.g0021OutputVo = outputVO;
      });
    } else {
      this.error = errorMsg;
    }
  }
}
