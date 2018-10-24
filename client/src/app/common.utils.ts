import { util, Long } from 'protobufjs';
import { google } from 'src/typings';

export { model, google } from '../typings';
export { Long } from 'protobufjs';

export class CommonUtils {

  static convertNumber2Long(n: number) {
    let bits = util.LongBits.fromNumber(n);
    return bits.toLong();
  }

  static convertLong2Number(l: Long) : number {
    if (l != undefined && l != null) {
      let bits = util.LongBits.from(l);
      return bits.toNumber();
    }
    return 0;
  }

  static convertTimestamp2Epoch(t: google.protobuf.ITimestamp) : number {
    if (t != null) {
      return t.nanos/1000000;
    }
    return 0;
  }

  static convertEpoch2Timestamp(n: number) : google.protobuf.ITimestamp {
    let t = new google.protobuf.Timestamp();
    t.nanos = n * 1000000;
    return t;
  }

  static convertEpoch2Date(l: number|Long) : Date {
    return new Date(CommonUtils.convertLong2Number(<Long>l));
  }
}
