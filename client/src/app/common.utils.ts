import { util, Long } from 'protobufjs';

export { model } from '../typings';

export class CommonUtils {
  static convertLong2Number(l: Long) : number {
    if (l != undefined && l != null) {
      let bits = util.LongBits.from(l);
      return bits.toNumber();
    }
    return 0;
  }

  static convertEpoche2Date(l: number|Long) : Date {
    return new Date(CommonUtils.convertLong2Number(<Long>l));
  }
}
