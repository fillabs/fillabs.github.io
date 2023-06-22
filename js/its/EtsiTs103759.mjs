import { Time64, TwoDLocation, Psid } from 'Ieee1609Dot2js';
import { Uint8, Sequence, Null, OpenType } from 'asnjs';
import { AsrCam } from './EtsiTs103759AsrCam.mjs';

const c_AsrAppAgnostic = 270549119;
const c_AsrCam  = 36;
const c_AsrDenm = 37;
const c_AsrBsm  = 32;

class AsrAppAgnostic extends Null { }
class AsrDenm extends Null { }
class AsrBsm extends Null { }

class AidSpecificReport extends Sequence ([
	{ name: 'aid', type: Psid},
	{ name: 'content', type: OpenType({
            c_AsrAppAgnostic: AsrAppAgnostic,
            c_AsrCam:         AsrCam,
            c_AsrDenm:        AsrDenm,
            c_AsrBsm:         AsrBsm,
        }, 'aid')
	}
]) {}

export class EtsiTs103759Data extends Sequence([
    { name: 'version',             type: Uint8  },
    { name: 'generationTime',      type: Time64 },
    { name: 'observationLocation', type: TwoDLocation },
    { name: 'report',              type: AidSpecificReport }
]) { }

