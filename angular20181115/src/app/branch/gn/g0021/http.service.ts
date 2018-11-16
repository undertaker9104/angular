import { Observable } from 'rxjs';
import { G0021InputVO } from './input/g0021-input-vo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { G0021OutputVO } from './output/g0021-output-vo';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}


  /**Ruquest to Server
   * @author Hsing Ying
   * @param g0021InputVO
   * @return Response Object in Observable<G0021OutputVO> type
   * @memberOf G0021HttpService
   */
  public request(inputVO: G0021InputVO): Observable<G0021OutputVO> {
    const url = 'http://192.168.43.247:8080/Test/g0021';
    return this.http.post<G0021OutputVO>(url, inputVO);
  }
}
function getDate(dateStr: string) {
  if (!dateStr) {
    return null;
  }
  try {
    const year = (parseInt(dateStr.substr(0, 3), 10) + 1911).toString();
    const month = dateStr.substr(3, 2);
    const day = dateStr.substr(5, 2);
    return new Date(`${year}-${month}-${day}`);
  } catch (error) {
    return null;
  }
}
