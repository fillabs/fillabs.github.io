import { Uint8, Sequence, SequenceOf, Null, OpenType, OctetString } from 'asnjs';
import { Ieee1609Dot2Data, Ieee1609Dot2Certificate } from 'Ieee1609Dot2js';

export const MbSingleObservation = function (set, variant) {
	return Sequence([ 
		{ name: 'obsId', type: Uint8 , key: variant },
		{ name: 'obs', type: OpenType(set, variant) }
	]);
}                                                                              

const c_ObsPdu_etsiGn            = 1;
const c_ObsPdu_ieee1609Dot2Data  = 2;

export class V2xPduStream extends Sequence([
	{ name: 'type', type: Uint8, key: 'IdObsPdu' },
	{ name: 'v2xPdus', type: SequenceOf(OpenType({
	    c_ObsPdu_etsiGn: OctetString(),
	    c_ObsPdu_ieee1609Dot2Data: Ieee1609Dot2Data
	    }, 'IdObsPdu' ))
	},
	{ name: 'certificate', type: Ieee1609Dot2Certificate, optional:true },
	{ name: 'subjectPduIndex', type: Uint8 },
	{ extension:true }
]){}
