export class G0021OutputVO {
  HEADER: {
    TXNID;
    TXNNAME;
  };
  LOOPVO: {
      WSNO;
      TLRNO;
      APPSEQ;
      STUSDAT;
      STUSTM;
      ACTNOT;
      CDSTUS;
      SEQNO;
      HOTTYPE;
      STATUS;
      RCVNO;
    }[];
  NAME: string;
  ADDR: string;
}
