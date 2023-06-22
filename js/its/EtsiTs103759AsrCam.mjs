import { Time64, TwoDLocation, Psid } from 'Ieee1609Dot2js';
import { Uint8, Sequence, Null, OpenType, SequenceOf, BitString } from 'asnjs';
import { MbSingleObservation, V2xPduStream } from './EtsiTs103759BaseTypes.mjs';

const c_CamTgt_BeaconCommon    = 0;
const c_CamTgt_StaticCommon    = 1;
const c_CamTgt_SecurityCommon  = 2;
const c_CamTgt_PositionCommon  = 3;
const c_CamTgt_SpeedCommon     = 4;
const c_CamTgt_LongAccCommon   = 5;

const c_ObsBeacon_IntervalTooSmall                             = 1;

const c_ObsStatic_Change                                       = 1;

const c_ObsSecurity_MessageIdIncWithHeaderInfo                 = 1;
const c_ObsSecurity_HeaderIncWithSecurityProfile               = 2;
const c_ObsSecurity_HeaderPsidIncWithCertificate               = 3;
const c_ObsSecurity_MessageIncWithSsp                          = 4;
const c_ObsSecurity_HeaderTimeOutsideCertificateValidity       = 5;
const c_ObsSecurity_MessageLocationOutsideCertificateValidity  = 6;
const c_ObsSecurity_HeaderLocationOutsideCertificateValidity   = 7;

const c_ObsPosition_ChangeTooLarge                             = 4; 

const c_ObsSpeed_ValueTooLarge_VehicleType                     = 3;
const c_ObsSpeed_ValueTooLarge_DriveDirectionReverse           = 4;
const c_ObsSpeed_ChangeTooLarge                                = 5;

const c_ObsLongAcc_ValueTooLarge                               = 4;

class CamObservationsByTarget extends Sequence ([
	{
		name: 'tgtId',
		key: 'camTgtId',
		type: Uint8
	}, {
		name: 'observations',
		type: SequenceOf(OpenType({
			c_CamTgt_BeaconCommon: MbSingleObservation({ 
					c_Beacon_IntervalTooSmall: Null
				}, 'obsCamBeacon'),
			c_CamTgt_StaticCommon: MbSingleObservation({ 
					c_ObsStatic_Change: BitString()
				}, 'obsCamStatic'),
			c_CamTgt_SecurityCommon: MbSingleObservation({ 
					c_ObsSecurity_MessageIdIncWithHeaderInfo: Null,
					c_ObsSecurity_HeaderIncWithSecurityProfile: Null,
					c_ObsSecurity_HeaderPsidIncWithCertificate: Null,
					c_ObsSecurity_MessageIncWithSsp: Null,
					c_ObsSecurity_HeaderTimeOutsideCertificateValidity: Null,
					c_ObsSecurity_MessageLocationOutsideCertificateValidity: Null,
					c_ObsSecurity_HeaderLocationOutsideCertificateValidity: Null 
				}, 'obsCamSecurity'),
			c_CamTgt_PositionCommon: MbSingleObservation({
			        c_ObsPosition_ChangeTooLarge: Null 
			    }, 'obsCamPosition'),
		    c_CamTgt_SpeedCommon:  MbSingleObservation({
		            c_ObsSpeed_ValueTooLarge_VehicleType: Null,          
			        c_ObsSpeed_ValueTooLarge_DriveDirectionReverse: Null,
			        c_ObsSpeed_ChangeTooLarge: Null                     
			    }, 'obsCamSpeed'),
			c_CamTgt_LongAccCommon: MbSingleObservation({
			        c_ObsLongAcc_ValueTooLarge: Null 
			    }, 'obsCamLongAcc')
		}))
	}
]){}

class CamNonV2xPduEvidenceItem extends Sequence([
    {name: 'id', type: Uint8, key: 'MbEvCam'},
    {name: 'evidence', type:OpenType([],'MbEvCam')} 
]){}

export class AsrCam extends Sequence ([
	{
    	name: 'observations',
    	type: SequenceOf(CamObservationsByTarget)
   	}, {
    	name: 'v2xPduEvidence',
    	type: SequenceOf(V2xPduStream)
   	}, {
    	name: 'nonV2xPduEvidence',
    	type: SequenceOf(CamNonV2xPduEvidenceItem)
   	}
]){}
