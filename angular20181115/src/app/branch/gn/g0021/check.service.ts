import { Injectable } from '@angular/core';
import { G0021InputVO } from '../g0021/input/g0021-input-vo';
@Injectable({
  providedIn: 'root'
})
export class CheckService {

  constructor() { }
  /**檢查所有的驗證 */
  public check(g0021InputVo: G0021InputVO): string {
    let errorMsg = '';
    errorMsg += this.checkCDKIND(g0021InputVo.CDKIND);
    errorMsg += this.checkACTNO1(g0021InputVo.ACTNO);
    errorMsg += this.checkPIDNO(g0021InputVo.PIDNO);
    return errorMsg;
  }
  /**CHECK CDKING(項目代號) */
  private checkCDKIND(cdKind: string): string {
    let errorMsg = '';
    errorMsg += this.checkEmpty('項目代號', cdKind);
    if (errorMsg) {
      return errorMsg;
    }
    // if (constants.CARD_TYPE.indexOf(cdKind) === -1) {} 還未創
      if (cdKind !== '0') {
        errorMsg += '項目代號錯誤';
        return errorMsg;
      }
    return '';
  }
  /**CHECK ACTON1(帳號) */
  private checkACTNO1(actNo: string): string {
    let errorMsg = '';
    errorMsg += this.checkEmpty('帳號', actNo);
    if (errorMsg) {
      return errorMsg;
    }
    return '';
  }
  /**CHECK PIDNO(身分證字號) */
  private checkPIDNO(pidNo: string) {
    let errorMsg = '';
    errorMsg += this.checkEmpty('身分證字號', pidNo);
    if (errorMsg) {
      return errorMsg;
    }
    errorMsg += this.checkId(pidNo);
    if (errorMsg) {
      return errorMsg;
    }
    return '';
  }
 /**檢查是否為空**/
  private checkEmpty(field: string, value: string): string {
    if (!value) {
      return field + '不可為空';
    }
    return '';
  }

  /**檢查身分證字號格式 */
  private checkId(value: string) {
    return '';
  }
}
