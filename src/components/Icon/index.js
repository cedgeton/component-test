import React from 'react';
import styled from 'styled-components';

const IconWrapper = styled.div`
  background: ${props => props.bg || "transparent"};
  width: ${props => props.w+'px' || "inherit"};
  height: ${props => props.w+'px' || "inherit"};
  padding: ${props => props.p+'px'};
  vertical-align: middle;
  border-radius: 100px;
  text-align:center;
  display: inline-block;
`;
const icons = {
   'activity': 'M13.874419,6.34883721 C14.7953493,6.34883721 15.5488376,5.59534884 15.5488376,4.6744186 C15.5488376,3.75348837 14.7953493,3 13.874419,3 C12.9534888,3 12.2000004,3.75348837 12.2000004,4.6744186 C12.2000004,5.59534884 12.9534888,6.34883721 13.874419,6.34883721 Z M10.8604655,17.9860465 L11.6558144,14.3023256 L13.4558144,15.9767442 L13.4558144,21 L15.130233,21 L15.130233,14.6790698 L13.4139539,12.9627907 L13.9162795,10.4511628 C15.0046516,11.7906977 16.6372097,12.627907 18.4790702,12.627907 L18.4790702,10.9534884 C16.930233,10.9534884 15.5906981,10.1162791 14.8372097,8.90232558 L14.0418609,7.5627907 C13.7488376,7.06046512 13.2046516,6.76744186 12.6186051,6.76744186 C12.4093027,6.76744186 12.2000004,6.80930233 11.9906981,6.89302326 L7.59534926,8.69302326 L7.59534926,12.627907 L9.26976786,12.627907 L9.26976786,9.82325581 L10.7348841,9.2372093 L9.43720972,15.9767442 L5.33488372,15.1813953 L5,16.8139535 C5,16.8139535 10.8604655,17.944186 10.8604655,17.9860465 Z',
   'add' : 'M12,3 C7.0275,3 3,7.0275 3,12 C3,16.9725 7.0275,21 12,21 C16.9725,21 21,16.9725 21,12 C21,7.0275 16.9725,3 12,3 Z M16.5,12.9 L12.9,12.9 L12.9,16.5 L11.1,16.5 L11.1,12.9 L7.5,12.9 L7.5,11.1 L11.1,11.1 L11.1,7.5 L12.9,7.5 L12.9,11.1 L16.5,11.1 L16.5,12.9 Z',
   'alert' : 'M3,19.5454545 L21,19.5454545 L12,4 L3,19.5454545 Z M12.8181818,17.0909091 L11.1818182,17.0909091 L11.1818182,15.4545455 L12.8181818,15.4545455 L12.8181818,17.0909091 Z M12.8181818,13.8181818 L11.1818182,13.8181818 L11.1818182,10.5454545 L12.8181818,10.5454545 L12.8181818,13.8181818 Z',
   'bookmark' : 'M17,3 L7,3 C5.9,3 5.01,3.9 5.01,5 L5,21 L12,18 L19,21 L19,5 C19,3.9 18.1,3 17,3 Z',
   'camera' : 'M9.3,4 L7.653,5.8 L4.8,5.8 C3.8055,5.8 3,6.6055 3,7.6 L3,18.4 C3,19.3944995 3.8055,20.2 4.8,20.2 L19.2,20.2 C20.1945,20.2 21,19.3944995 21,18.4 L21,7.6 C21,6.6055 20.1945,5.8 19.2,5.8 L16.347,5.8 L14.7,4 L9.3,4 Z M12,17.5 C9.516,17.5 7.5,15.484 7.5,13 C7.5,10.516 9.516,8.5 12,8.5 C14.484,8.5 16.5,10.516 16.5,13 C16.5,15.484 14.484,17.5 12,17.5 Z M14.88,13 C14.88,11.409421 13.590579,10.12 12,10.12 C10.409421,10.12 9.12,11.409421 9.12,13 C9.12,14.590579 10.409421,15.88 12,15.88 C13.590579,15.88 14.88,14.590579 14.88,13 Z',
   'caret-down' : 'M5.1225,6L12 12.8775 18.8775 6 21 8.1225 12 17.1225 3 8.1225z',
   'caret-right' : 'M6,5.1225L12.8775 12 6 18.8775 8.1225 21 17.121 12 8.1225 3z',
   'change' : 'M12,8.3975 L17.751,17.6 L6.249,17.6 L12,8.3975 Z M12,5 L3,19.4 L21,19.4 L12,5 Z',
   'chat' : 'M20.1,7.6 L18.3,7.6 L18.3,15.7 L6.6,15.7 L6.6,17.5 C6.6,17.995 7.005,18.4 7.5,18.4 L17.4,18.4 L21,22 L21,8.5 C21,8.005 20.595,7.6 20.1,7.6 Z M16.5,13 L16.5,4.9 C16.5,4.405 16.095,4 15.6,4 L3.9,4 C3.405,4 3,4.405 3,4.9 L3,17.5 L6.6,13.9 L15.6,13.9 C16.095,13.9 16.5,13.495 16.5,13 Z',
   'check' : 'M8.72029562,15.826606L4.45309835 11.5594088 3 13.002274 8.72029562 18.7225696 21 6.44286526 19.5571347 5z',
   'check-circle' : 'M12,3 C7.0275,3 3,7.0275 3,12 C3,16.968 7.0275,21 12,21 C16.968,21 21,16.968 21,12 C21,7.0275 16.968,3 12,3 Z M10.2,16.5 L5.7,12 L6.9735,10.7265 L10.2,13.953 L17.0265,7.1265 L18.3,8.4 L10.2,16.5 Z',
   'checkin' : 'M19.2,4 L4.8,4 C3.8055,4 3.009,4.8055 3.009,5.8 L3,22 L6.6,18.4 L19.2,18.4 C20.1945,18.4 21,17.5945 21,16.6 L21,5.8 C21,4.8055 20.1945,4 19.2,4 Z M6.6,10.3 L17.4,10.3 L17.4,12.1 L6.6,12.1 L6.6,10.3 Z M13.8,14.8 L6.6,14.8 L6.6,13 L13.8,13 L13.8,14.8 Z M17.4,9.4 L6.6,9.4 L6.6,7.6 L17.4,7.6 L17.4,9.4 Z',
   'close' : 'M12,3 C7.026,3 3,7.026 3,12 C3,16.9740006 7.026,21 12,21 C16.974,21 21,16.9740006 21,12 C21,7.026 16.974,3 12,3 Z M16.8,15.528 L15.528,16.8 L12.3,13.572 L9.072,16.8 L7.8,15.528 L11.028,12.3 L7.8,9.072 L9.072,7.8 L12.3,11.028 L15.528,7.8 L16.8,9.072 L13.572,12.3 L16.8,15.528 Z',
   'clock' : 'M11.991,3 C16.968,3 21,7.032 21,12 C21,16.968 16.968,21 11.991,21 C7.023,21 3,16.968 3,12 C3,7.032 7.023,3 11.991,3 Z M12.45,7.5 L11.1,7.5 L11.1,12.9 L15.825,15.735 L16.5,14.628 L12.45,12.225 L12.45,7.5 Z',
   'copy' : 'M6.273,3 L6.273,4.636 L19.364,4.636 L19.364,17.727 L21,17.727 L21,4.636 C21,3.732 20.268,3 19.364,3 L6.273,3 Z M4.637,6.273 C3.732,6.273 3,7.005 3,7.909 L3,19.363 C3,20.268 3.732,21 4.637,21 L16.091,21 C16.995,21 17.727,20.268 17.727,19.363 L17.727,7.909 C17.727,7.005 16.995,6.273 16.091,6.273 L4.637,6.273 Z',
   'delete' : 'M6,19 C6,20.1049995 6.895,21 8,21 L16,21 C17.105,21 18,20.1049995 18,19 L18,7 L6,7 L6,19 Z M19,4 L15.5,4 L14.5,3 L9.5,3 L8.5,4 L5,4 L5,6 L19,6 L19,4 Z',
   'disposition-happy' : 'M11.991,3 C7.023,3 3,7.032 3,12 C3,16.968 7.023,21 11.991,21 C16.968,21 21,16.968 21,12 C21,7.032 16.968,3 11.991,3 Z M12,19.2 C8.022,19.2 4.8,15.978 4.8,12 C4.8,8.022 8.022,4.8 12,4.8 C15.978,4.8 19.2,8.022 19.2,12 C19.2,15.978 15.978,19.2 12,19.2 Z M12,15.6 C13.332,15.6 14.475,14.8710009 15.105,13.8 L16.608,13.8 C15.888,15.6449991 14.097,16.95 12,16.95 C9.903,16.95 8.112,15.6449991 7.392,13.8 L8.895,13.8 C9.525,14.871 10.668,15.6 12,15.6 Z M16.5,9.75 C16.5,10.495587 15.895587,11.1 15.15,11.1 C14.404413,11.1 13.8,10.495587 13.8,9.75 C13.8,9.004413 14.404413,8.4 15.15,8.4 C15.895587,8.4 16.5,9.004413 16.5,9.75 Z M10.2,9.75 C10.2,10.495587 9.5955843,11.1 8.85,11.1 C8.1044157,11.1 7.5,10.495587 7.5,9.75 C7.5,9.004413 8.1044157,8.4 8.85,8.4 C9.5955843,8.4 10.2,9.004413 10.2,9.75 Z',
   'disposition-neutral' : 'M11.991,3 C7.023,3 3,7.032 3,12 C3,16.968 7.023,21 11.991,21 C16.968,21 21,16.968 21,12 C21,7.032 16.968,3 11.991,3 Z M12,19.2 C8.022,19.2 4.8,15.978 4.8,12 C4.8,8.022 8.022,4.8 12,4.8 C15.978,4.8 19.2,8.022 19.2,12 C19.2,15.978 15.978,19.2 12,19.2 Z M9.3,15.15 L14.7,15.15 L14.7,13.8 L9.3,13.8 L9.3,15.15 Z M16.5,9.75 C16.5,9.004413 15.895587,8.4 15.15,8.4 C14.404413,8.4 13.8,9.004413 13.8,9.75 C13.8,10.495587 14.404413,11.1 15.15,11.1 C15.895587,11.1 16.5,10.495587 16.5,9.75 Z M10.2,9.75 C10.2,9.004413 9.5955843,8.4 8.85,8.4 C8.1044157,8.4 7.5,9.004413 7.5,9.75 C7.5,10.495587 8.1044157,11.1 8.85,11.1 C9.5955843,11.1 10.2,10.495587 10.2,9.75 Z" id="Combined-Shape',
   'disposition-sad' : 'M11.991,3 C16.968,3 21,7.032 21,12 C21,16.968 16.968,21 11.991,21 C7.023,21 3,16.968 3,12 C3,7.032 7.023,3 11.991,3 Z M12,19.2 C15.978,19.2 19.2,15.978 19.2,12 C19.2,8.022 15.978,4.8 12,4.8 C8.022,4.8 4.8,8.022 4.8,12 C4.8,15.978 8.022,19.2 12,19.2 Z M16.5,9.75 C16.5,10.495587 15.895587,11.1 15.15,11.1 C14.404413,11.1 13.8,10.495587 13.8,9.75 C13.8,9.004413 14.404413,8.4 15.15,8.4 C15.895587,8.4 16.5,9.004413 16.5,9.75 Z M10.2,9.75 C10.2,10.495587 9.5955843,11.1 8.85,11.1 C8.1044157,11.1 7.5,10.495587 7.5,9.75 C7.5,9.004413 8.1044157,8.4 8.85,8.4 C9.5955843,8.4 10.2,9.004413 10.2,9.75 Z M12,13.8 C14.097,13.8 15.888,15.105 16.608,16.95 L15.105,16.95 C14.475,15.8789991 13.332,15.15 12,15.15 C10.668,15.15 9.516,15.8789991 8.895,16.95 L7.392,16.95 C8.112,15.105 9.903,13.8 12,13.8 Z',
   'note' : 'M6.8,3 C5.8055,3 5.009,3.8055 5.009,4.8 L5,19.2 C5,20.1944995 5.7965,21 6.791,21 L17.6,21 C18.5945,21 19.4,20.1944995 19.4,19.2 L19.4,8.4 L14,3 L6.8,3 Z M13.1,9.3 L13.1,4.35 L18.05,9.3 L13.1,9.3 Z',
   'edit' : 'M3,17.2494791 L3,21 L6.75052091,21 L17.8170579,9.93346298 L14.066537,6.18294208 L3,17.2494791 Z M20.7074594,7.04306154 C21.0975135,6.65300736 21.0975135,6.01791916 20.7074594,5.62786498 L18.372135,3.29254063 C17.9820808,2.90248646 17.3469926,2.90248646 16.9569385,3.29254063 L15.1266843,5.12279483 L18.8772052,8.87331574 L20.7074594,7.04306154 Z',
   'event' : 'M16.6,12.9 L12.1,12.9 L12.1,17.4 L16.6,17.4 L16.6,12.9 Z M15.7,3 L15.7,4.8 L8.5,4.8 L8.5,3 L6.7,3 L6.7,4.8 L5.8,4.8 C4.8055,4.8 4.009,5.6055 4.009,6.6 L4,19.2 C4,20.1944996 4.8055,21 5.8,21 L18.4,21 C19.3945,21 20.2,20.1944996 20.2,19.2 L20.2,6.6 C20.2,5.6055 19.3945,4.8 18.4,4.8 L17.5,4.8 L17.5,3 L15.7,3 Z M18.4,19.2 L5.8,19.2 L5.8,9.3 L18.4,9.3 L18.4,19.2 Z',
   'external' : 'M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.895,3 3,3.895 3,5 L3,19 C3,20.1049995 3.895,21 5,21 L19,21 C20.105,21 21,20.1049995 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.585,5 L7.755,14.83 L9.17,16.245 L19,6.415 L19,10 L21,10 L21,3 L14,3 Z',
   'eye' : 'M12,6 C7.90909091,6 4.41545455,8.54454545 3,12.1363636 C4.41545455,15.7281818 7.90909091,18.2727273 12,18.2727273 C16.0909091,18.2727273 19.5845455,15.7281818 21,12.1363636 C19.5845455,8.54454545 16.095,6 12,6 Z M12,16.2272727 C9.74181818,16.2272727 7.90909091,14.3945455 7.90909091,12.1363636 C7.90909091,9.87818182 9.74181818,8.04545455 12,8.04545455 C14.2581818,8.04545455 16.0909091,9.87818182 16.0909091,12.1363636 C16.0909091,14.3945455 14.2581818,16.2272727 12,16.2272727 Z M12,9.68181818 C10.6459091,9.68181818 9.54545455,10.7822727 9.54545455,12.1363636 C9.54545455,13.4904545 10.6459091,14.5909091 12,14.5909091 C13.3540909,14.5909091 14.4545455,13.4904545 14.4545455,12.1363636 C14.4545455,10.7822727 13.3540909,9.68181818 12,9.68181818 Z',
   'genetics' : 'M8.09772002,3.96108082 C8.11143518,3.96639612 8.64803675,4.18361047 9.28698635,4.80593061 L4.72741258,9.36550535 C4.18103865,8.82650277 3.95251159,8.38041934 3.9279958,8.33018798 L3,8.7738704 C3.08057601,8.94222539 4.98268445,12.7500398 11.4174516,12.4397384 C11.4488252,18.8818762 15.3512762,20.5804875 15.5237424,20.652149 L15.9178794,19.7020377 C15.9034807,19.6960374 15.3423606,19.4496807 14.6754674,18.7836425 L19.2336677,14.2254393 C19.8085029,14.7817573 20.037029,15.2568134 20.0606888,15.3087597 L20.5297435,15.0978897 L21,14.8897636 C20.9255956,14.7219244 19.1318354,10.8590766 12.4659685,11.3341327 C12.5883759,4.65420751 8.63500759,3.06548882 8.46356803,3 L8.09772002,3.96108082 Z M9.95748228,5.58991844 C10.1561795,5.8671336 10.3511061,6.18686625 10.5312861,6.55528799 L6.50008574,10.5864883 C6.12823643,10.4100789 5.80507376,10.2184096 5.5244286,10.0231424 L9.95748228,5.58991844 Z M10.9473679,7.59386022 C11.0716606,7.97771213 11.1777817,8.4001358 11.2597297,8.86284626 L8.83404777,11.2887009 C8.3661923,11.2137807 7.93862361,11.1128047 7.54928856,10.9922825 L10.9473679,7.59386022 Z M12.4913408,13.4831127 C12.4620252,13.1297781 12.4457387,12.7582694 12.4452254,12.3667036 C12.8695344,12.3341307 13.2720737,12.3192162 13.6528362,12.3214445 L12.4913408,13.4831127 Z M15.0228007,12.4063068 C15.5064269,12.465624 15.9487398,12.5523716 16.3495617,12.6608936 L12.9996557,16.0106269 C12.8697071,15.631234 12.7570715,15.2151522 12.6674072,14.7615276 L15.0228007,12.4063068 Z M14.0089148,17.9955406 C13.8088456,17.7171237 13.6118634,17.4003054 13.4285964,17.0363427 L17.4272238,13.0378855 C17.808159,13.2046958 18.1400646,13.3886488 18.4260226,13.5782601 L14.0089148,17.9955406 Z M11.4356234,11.4095636 C10.9850834,11.4333937 10.5611174,11.4342524 10.159607,11.4179659 L11.4135083,10.1638943 C11.4385401,10.5547741 11.4460812,10.9703378 11.4356234,11.4095636 Z',
   'heart' : 'M12,20.5150004 L10.695,19.3315 C6.06,15.124 3,12.3475 3,8.95 C3,6.1735 5.1735,4 7.95,4 C9.516,4 11.019,4.729 12,5.8765 C12.981,4.729 14.484,4 16.05,4 C18.8265,4 21,6.1735 21,8.95 C21,12.3475 17.94,15.124 13.305,19.3315 L12,20.5150004 Z',
   'home' : 'M10.2,19.3L10.2 13.9 13.8 13.9 13.8 19.3 18.3 19.3 18.3 12.1 21 12.1 12 4 3 12.1 5.7 12.1 5.7 19.3z',
   'imaging' : 'M11,9 L13,9 L13,11 L11,11 L11,9 Z M9,11 L11,11 L11,13 L9,13 L9,11 Z M13,11 L15,11 L15,13 L13,13 L13,11 Z M15,9 L17,9 L17,11 L15,11 L15,9 Z M7,9 L9,9 L9,11 L7,11 L7,9 Z M19,3 L5,3 C3.9,3 3,3.9 3,5 L3,19 C3,20.1000005 3.9,21 5,21 L19,21 C20.1,21 21,20.1000005 21,19 L21,5 C21,3.9 20.1,3 19,3 Z M9,18 L7,18 L7,16 L9,16 L9,18 Z M13,18 L11,18 L11,16 L13,16 L13,18 Z M17,18 L15,18 L15,16 L17,16 L17,18 Z M19,11 L17,11 L17,13 L19,13 L19,15 L17,15 L17,13 L15,13 L15,15 L13,15 L13,13 L11,13 L11,15 L9,15 L9,13 L7,13 L7,15 L5,15 L5,13 L7,13 L7,11 L5,11 L5,5 L19,5 L19,11 Z',
   'info' : 'M12,3 C7.032,3 3,7.032 3,12 C3,16.968 7.032,21 12,21 C16.968,21 21,16.968 21,12 C21,7.032 16.968,3 12,3 Z M12.9,16.5 L11.1,16.5 L11.1,11.1 L12.9,11.1 L12.9,16.5 Z M12.9,9.3 L11.1,9.3 L11.1,7.5 L12.9,7.5 L12.9,9.3 Z',
   'issues' : 'M18.0909091,4.63636364 L14.6668182,4.63636364 C14.3313636,3.68727273 13.4313636,3 12.3636364,3 C11.2959091,3 10.3959091,3.68727273 10.0604545,4.63636364 L6.63636364,4.63636364 C5.73227273,4.63636364 5,5.36863636 5,6.27272727 L5,19.3636364 C5,20.2677269 5.73227273,21 6.63636364,21 L18.0909091,21 C18.995,21 19.7272727,20.2677269 19.7272727,19.3636364 L19.7272727,6.27272727 C19.7272727,5.36863636 18.995,4.63636364 18.0909091,4.63636364 Z M12.3636364,4.63636364 C12.8136364,4.63636364 13.1818182,5.00045455 13.1818182,5.45454545 C13.1818182,5.90863636 12.8136364,6.27272727 12.3636364,6.27272727 C11.9136364,6.27272727 11.5454545,5.90863636 11.5454545,5.45454545 C11.5454545,5.00045455 11.9136364,4.63636364 12.3636364,4.63636364 Z M18.0909091,19.3636364 L6.63636364,19.3636364 L6.63636364,6.27272727 L8.27272727,6.27272727 L8.27272727,8.72727273 L16.4545455,8.72727273 L16.4545455,6.27272727 L18.0909091,6.27272727 L18.0909091,19.3636364 Z M9.5,10.2 L15.35,10.2 L15.35,11.1 L9.5,11.1 L9.5,10.2 Z M9.5,12 L15.35,12 L15.35,12.9 L9.5,12.9 L9.5,12 Z M9.5,13.8 L15.35,13.8 L15.35,14.7 L9.5,14.7 L9.5,13.8 Z M9.5,15.6 L15.35,15.6 L15.35,16.5 L9.5,16.5 L9.5,15.6 Z',
   'lab' : 'M9.492551,3 L13.857362,3 C14.100107,3 14.29712,3.198237 14.29712,3.442485 L14.29712,9.586446 C15.4765197,11.957553 17.9362499,16.9696127 18.5,18.6421686 L18.5,19.7755784 C18.2403988,20.4827909 17.5788899,21 16.827044,21 L6.7924406,21 C6.2829815,21 5.8001282,20.7962339 5.4672317,20.4413583 C5.16367649,20.1173502 4.99999954,19.6851474 5,19.2138147 C5,19.1740605 5.00116447,19.1340279 5.00350758,19.0937583 C5.05627844,18.1893114 8.292452,11.219007 9.052793,9.592197 L9.052793,3.442485 C9.052793,3.198237 9.249806,3 9.492551,3 Z M16.827044,20.1150222 C17.311874,20.1150222 17.73734,19.6497453 17.73734,19.1198655 C17.6672,18.5656482 15.483143,13.945626 13.463999,9.889329 C13.433216,9.827823 13.417388,9.7599 13.417388,9.691095 L13.417388,3.884979 L9.932087,3.884979 L9.932087,9.690873 C9.932087,9.755919 9.917795,9.820302 9.890312,9.879375 C7.9881407,13.944294 5.9366723,18.5742768 5.8814831,19.1475207 C5.8654316,19.4211999 5.9434892,19.6594803 6.1072988,19.8340422 C6.2748461,20.0125863 6.5244083,20.1150222 6.7926605,20.1150222 L16.827044,20.1150222 Z M10.225187,11.242458 L13.193771,11.242458 C13.365932,11.242458 13.522046,11.343345 13.593725,11.500869 C13.621214,11.561715 16.353644,17.5758 16.686101,18.2008164 C16.756901,18.3342267 16.973264,18.7406523 16.751405,19.1130066 C16.527569,19.4889009 16.038998,19.5645663 15.323075,19.5645663 L7.9852823,19.5658938 L7.9824239,19.5658938 C7.6156664,19.5658938 7.1147825,19.5650091 6.8757746,19.1857959 C6.6429227,18.8165394 6.8529071,18.3682983 6.9219491,18.2209491 L9.82193,11.508615 C9.891629,11.346888 10.050164,11.242458 10.225187,11.242458 Z',
   'left-arrow' : 'M3,12.0000625L11.9989375 20.999 13.5863235 19.413864 7.30765492 13.1250703 20.999 13.1250703 20.999 10.8739297 7.30765492 10.8739297 13.5863235 4.58626102 11.9989375 3z',
   'list' : 'M12.8181818,11.5454545 L18.5454545,11.5454545 L18.5454545,12.7727273 L12.8181818,12.7727273 L12.8181818,11.5454545 Z M12.8181818,9.5 L18.5454545,9.5 L18.5454545,10.7272727 L12.8181818,10.7272727 L12.8181818,9.5 Z M12.8181818,13.5909091 L18.5454545,13.5909091 L18.5454545,14.8181818 L12.8181818,14.8181818 L12.8181818,13.5909091 Z M19.3636364,5 L4.63636364,5 C3.73636364,5 3,5.73636364 3,6.63636364 L3,17.2727273 C3,18.1727273 3.73636364,18.9090909 4.63636364,18.9090909 L19.3636364,18.9090909 C20.2636364,18.9090909 21,18.1727273 21,17.2727273 L21,6.63636364 C21,5.73636364 20.2636364,5 19.3636364,5 Z M19.3636364,17.2727273 L12,17.2727273 L12,6.63636364 L19.3636364,6.63636364 L19.3636364,17.2727273 Z',
   'location' : 'M12.3,3 C8.8215,3 6,5.8215 6,9.3 C6,14.025 12.3,21 12.3,21 C12.3,21 18.6,14.025 18.6,9.3 C18.6,5.8215 15.7785,3 12.3,3 Z M12.3,11.55 C11.058,11.55 10.05,10.542 10.05,9.3 C10.05,8.058 11.058,7.05 12.3,7.05 C13.542,7.05 14.55,8.058 14.55,9.3 C14.55,10.542 13.542,11.55 12.3,11.55 Z',
   'medication' : 'M19.0781288,19.0968759 C17.5406229,20.6343755 15.028125,20.6343755 13.4906248,19.0968759 L9.19687582,14.8031269 L14.7843743,9.2156229 L19.0781288,13.5093718 C20.6156235,15.0468777 20.6156235,17.5593745 19.0781288,19.0968759 M13.3968762,9.14062179 C13.265627,9.27187652 13.0593768,9.27187652 12.9281221,9.14062179 L9.59062324,5.80312296 C8.54062454,4.75312426 6.81562542,4.75312426 5.76562505,5.80312296 C5.63437535,5.93437768 5.42812511,5.93437768 5.29687541,5.80312296 C5.1656246,5.67187382 5.1656246,5.46562358 5.29687541,5.33437444 C6.60937461,4.02187188 8.72812731,4.02187188 10.0406243,5.33437444 L13.3781231,8.67187327 C13.5281253,8.80312241 13.5281253,9.00937265 13.3968762,9.14062179 M19.6218784,12.9656222 L15.3281239,8.67187327 L11.0343749,4.37812433 C9.19687582,2.54062522 6.21562496,2.54062522 4.37812474,4.37812433 C2.54062509,6.21562344 2.54062509,9.19687542 4.37812474,11.0343745 L8.67187368,15.3281235 L12.9656226,19.6218752 C14.8031273,21.4593749 17.7843737,21.4593749 19.6218784,19.6218752 C21.4406244,17.8031264 21.4406244,14.8031269 19.6218784,12.9656222',
   'menu-hamburger' : 'M3,18 L21,18 L21,16 L3,16 L3,18 Z M3,13 L21,13 L21,11 L3,11 L3,13 Z M3,6 L3,8 L21,8 L21,6 L3,6 Z',
   'menu-kebab' : 'M12.25,7.5 C13.4875,7.5 14.5,6.4875 14.5,5.25 C14.5,4.0125 13.4875,3 12.25,3 C11.0125,3 10,4.0125 10,5.25 C10,6.4875 11.0125,7.5 12.25,7.5 Z M12.25,9.75 C11.0125,9.75 10,10.7625 10,12 C10,13.2375 11.0125,14.25 12.25,14.25 C13.4875,14.25 14.5,13.2375 14.5,12 C14.5,10.7625 13.4875,9.75 12.25,9.75 Z M12.25,16.5 C11.0125,16.5 10,17.5125 10,18.75 C10,19.9875 11.0125,21 12.25,21 C13.4875,21 14.5,19.9875 14.5,18.75 C14.5,17.5125 13.4875,16.5 12.25,16.5 Z',
   'menu-meatball' : 'M5.25,10 C4.0125,10 3,11.0125 3,12.25 C3,13.4875 4.0125,14.5 5.25,14.5 C6.4875,14.5 7.5,13.4875 7.5,12.25 C7.5,11.0125 6.4875,10 5.25,10 Z M18.75,10 C17.5125,10 16.5,11.0125 16.5,12.25 C16.5,13.4875 17.5125,14.5 18.75,14.5 C19.9875,14.5 21,13.4875 21,12.25 C21,11.0125 19.9875,10 18.75,10 Z M12,10 C10.7625,10 9.75,11.0125 9.75,12.25 C9.75,13.4875 10.7625,14.5 12,14.5 C13.2375,14.5 14.25,13.4875 14.25,12.25 C14.25,11.0125 13.2375,10 12,10 Z',
   'message' : 'M19.2,4 L4.8,4 C3.8055,4 3,4.8055 3,5.8 L3,22 L6.6,18.4 L19.2,18.4 C20.1945,18.4 21,17.5945 21,16.6 L21,5.8 C21,4.8055 20.1945,4 19.2,4 Z',
   'notification' : 'M12.3846154,21 C13.4046154,21 14.2307692,20.1738457 14.2307692,19.1538462 L10.5384615,19.1538462 C10.5384615,20.1738457 11.3646154,21 12.3846154,21 Z M17.9230769,15.4615385 L17.9230769,10.8461538 C17.9230769,8.00769231 16.4138462,5.64 13.7692308,5.01230769 L13.7692308,4.38461538 C13.7692308,3.61846154 13.1507692,3 12.3846154,3 C11.6184615,3 11,3.61846154 11,4.38461538 L11,5.01230769 C8.35538462,5.64 6.84615385,8.00769231 6.84615385,10.8461538 L6.84615385,15.4615385 L5,17.3076923 L5,18.2307692 L19.7692308,18.2307692 L19.7692308,17.3076923 L17.9230769,15.4615385 Z',
   'plus' : 'M21,13.2857143L13.2857143 13.2857143 13.2857143 21 10.7142857 21 10.7142857 13.2857143 3 13.2857143 3 10.7142857 10.7142857 10.7142857 10.7142857 3 13.2857143 3 13.2857143 10.7142857 21 10.7142857z',
   'profile-circle' : 'M11.8570612,20.1089109 C9.46942151,20.1089109 7.32307203,19.0616627 5.85148515,17.404168 C6.68773747,16.9716448 7.86845398,16.5353504 9.54048643,16.1626969 C10.2749813,15.9988802 10.1564611,14.7097962 10.1564611,14.1040281 C10.1571694,14.0809288 9.97372274,13.9562395 9.94775217,13.9307831 C9.66396468,13.6519412 9.72983549,13.2698595 9.67813044,12.9111127 C9.67128366,12.8639713 9.5784979,12.2815382 9.58794174,12.2791811 C9.58794174,12.2791811 9.18492573,12.3260869 9.04279589,11.893328 C9.04279589,11.893328 8.82960112,10.899114 8.69927609,10.6768419 C8.69927609,10.6768419 8.49788613,10.1269364 8.95992616,10.1036014 C8.95992616,10.1036014 8.78214581,9.0391466 8.78214581,8.94557074 C8.78214581,8.94557074 8.40297551,7.23787033 9.38655178,6.6764152 C9.38655178,6.6764152 10.1210467,5.93959374 10.9148017,5.7639917 C10.9148017,5.7639917 11.0925821,5.71732162 11.1872566,5.7639917 C11.1872566,5.7639917 11.293972,5.53016991 12.0641174,5.4950495 C12.0641174,5.4950495 14.6942278,5.60041073 15.1326582,7.401687 C15.1326582,7.401687 15.4051131,9.13272245 14.9192274,10.1971773 C14.9192274,10.1971773 15.4525684,10.1153868 15.2037231,10.7937528 C15.1338387,10.9842044 15.0863834,11.1817272 15.0493163,11.3806643 C15.016735,11.5574449 15.0233457,11.7728815 14.9612525,11.9407052 C14.8779105,12.1660415 14.6720348,12.1891408 14.4645063,12.135871 C14.3932053,12.325144 14.375262,12.6004503 14.3499997,12.8074015 C14.3070302,13.1595484 14.3422085,13.9748604 13.8412127,14.0455727 C13.8412127,14.7934724 13.5989781,16.0215081 14.5757076,16.2796078 C14.5757076,16.2796078 16.4097019,16.552557 17.970297,17.2804216 C16.4965853,19.0091 14.3037249,20.1089109 11.8570612,20.1089109 M12,3 C7.02939474,3 3,7.02939474 3,12 C3,16.9706053 7.02939474,21 12,21 C16.9706053,21 21,16.9706053 21,12 C21,7.02939474 16.9706053,3 12,3',
   'profile' : 'M3,20.2490785 C3,20.0376873 3,19.8946478 3,19.8199601 C3.16704032,19.6806663 3.39754481,19.5244611 3.74995994,19.3421863 C4.9086684,18.7428837 6.54466531,18.2974046 8.86142798,17.7810572 C9.87914171,17.5540733 9.71492047,15.7679228 9.71492047,14.9285724 C9.71590187,14.8965661 9.46171879,14.7237971 9.42573405,14.6885248 C9.03251904,14.3021624 9.12378941,13.7727511 9.05214707,13.2756728 C9.04266019,13.2103537 8.91409654,12.4033364 8.9271819,12.4000704 C8.9271819,12.4000704 8.36876424,12.4650629 8.1718296,11.8654337 C8.1718296,11.8654337 7.87642764,10.487854 7.6958497,10.1798745 C7.6958497,10.1798745 7.41680443,9.41792731 8.05700558,9.38559436 C8.05700558,9.38559436 7.81067372,7.91068928 7.81067372,7.78103088 C7.81067372,7.78103088 7.28529658,5.4148468 8.64813664,4.63689643 C8.64813664,4.63689643 9.66585037,3.61595903 10.7656747,3.37264542 C10.7656747,3.37264542 11.0120066,3.30797952 11.1431873,3.37264542 C11.1431873,3.37264542 11.2910519,3.04866272 12.3581628,3 C12.3581628,3 16.0024351,3.14598817 16.6099228,5.64183065 C16.6099228,5.64183065 16.9874354,8.04034768 16.3141937,9.51525276 C16.3141937,9.51525276 17.0531893,9.40192413 16.7083901,10.3418659 C16.6115585,10.605755 16.5458046,10.879442 16.4944445,11.1550885 C16.4493001,11.4000351 16.4584598,11.6985434 16.3724236,11.9310793 C16.2569453,12.2433046 15.9716845,12.275311 15.6841337,12.2015004 C15.5853393,12.4637565 15.5604771,12.84522 15.5254738,13.1319708 C15.4659354,13.6199044 15.5146783,14.7495981 14.8205001,14.8475768 C14.8205001,15.8838642 14.4848607,17.5854265 15.8382138,17.9430485 C15.8382138,17.9430485 19.1882585,18.8757705 20.5417458,19.4750732 C20.7208782,19.5543901 20.8726346,19.6343744 21,19.7118357 C21,19.8932073 21,20.0722882 21,20.2490785 L3,20.2490785 Z',
   'question' : 'M12,3 C7.0275,3 3,7.0275 3,12 C3,16.9725 7.0275,21 12,21 C16.9725,21 21,16.9725 21,12 C21,7.0275 16.9725,3 12,3 Z M12.9,18.3 L11.1,18.3 L11.1,16.5 L12.9,16.5 L12.9,18.3 Z M14.7585,11.3295 L13.953,12.1575 C13.305,12.8055 12.9,13.35 12.9,14.7 L11.1,14.7 L11.1,14.25 C11.1,13.2555 11.505,12.3555 12.153,11.703 L13.2735,10.569 C13.5975,10.245 13.8,9.795 13.8,9.3 C13.8,8.3055 12.9945,7.5 12,7.5 C11.0055,7.5 10.2,8.3055 10.2,9.3 L8.4,9.3 C8.4,7.311 10.011,5.7 12,5.7 C13.989,5.7 15.6,7.311 15.6,9.3 C15.6,10.092 15.2805,10.8075 14.7585,11.3295 Z',
   'refresh' : 'M11.5454545,5.45454545 L11.5454545,3 L8.27272727,6.27272727 L11.5454545,9.54545455 L11.5454545,7.09090909 C14.2536364,7.09090909 16.4545455,9.29181818 16.4545455,12 C16.4545455,12.8263636 16.25,13.6118182 15.8818182,14.2909091 L17.0763636,15.4854545 C17.7145455,14.4790909 18.0909091,13.2845455 18.0909091,12 C18.0909091,8.38363636 15.1618182,5.45454545 11.5454545,5.45454545 Z M11.5454545,16.9090909 C8.83727355,16.9090909 6.63636364,14.708181 6.63636364,12 C6.63636364,11.1736364 6.84090909,10.3881818 7.20909091,9.70909091 L6.01454545,8.51454545 C5.37636364,9.52090909 5,10.7154545 5,12 C5,15.6163636 7.92909091,18.5454545 11.5454545,18.5454545 L11.5454545,21 L14.8181818,17.7272727 L11.5454545,14.4545455 L11.5454545,16.9090909 Z',
   'remove' : 'M12,3 C7.0275,3 3,7.0275 3,12 C3,16.9725 7.0275,21 12,21 C16.9725,21 21,16.9725 21,12 C21,7.0275 16.9725,3 12,3 Z M16.5,12.9 L7.5,12.9 L7.5,11.1 L16.5,11.1 L16.5,12.9 Z',
   'right-arrow' : 'M12,3L10.41375 4.58625 16.69125 10.875 3 10.875 3 13.125 16.69125 13.125 10.41375 19.41375 12 21 21 12z',
   'right-arrow-circle' : 'M12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 Z M12,6.6 L11.046,7.554 L14.817,11.325 L6.6,11.325 L6.6,12.675 L14.817,12.675 L11.046,16.4460004 L12,17.4 L17.4,12 L12,6.6 Z',
   'scan' : 'M17.7272727,12.3636364 L16.0909091,12.3636364 L16.0909091,14.8181818 L13.6363636,14.8181818 L13.6363636,16.4545455 L17.7272727,16.4545455 L17.7272727,12.3636364 Z M7.90909091,9.90909091 L10.3636364,9.90909091 L10.3636364,8.27272727 L6.27272727,8.27272727 L6.27272727,12.3636364 L7.90909091,12.3636364 L7.90909091,9.90909091 Z M19.3636364,5 L4.63636364,5 C3.73227273,5 3,5.73227273 3,6.63636364 L3,18.0909091 C3,18.9949996 3.73227273,19.7272727 4.63636364,19.7272727 L19.3636364,19.7272727 C20.2677273,19.7272727 21,18.9949996 21,18.0909091 L21,6.63636364 C21,5.73227273 20.2677273,5 19.3636364,5 Z M19.3636364,18.1031814 L4.63636364,18.1031814 L4.63636364,6.62409091 L19.3636364,6.62409091 L19.3636364,18.1031814 Z',
   'scribe' : 'M19.2,4 C20.1945,4 21,4.8055 21,5.8 L21,16.6 C21,17.5945 20.1945,18.4 19.2,18.4 L6.6,18.4 L3,22 L3.009,5.8 C3.009,4.8055 3.8055,4 4.8,4 L19.2,4 Z M9.75,7.6 L9.75,14.8 L15.4071429,11.2 L9.75,7.6 Z',
   'search' : 'M15.864494,14.3207547 L15.0463122,14.3207547 L14.7632933,14.0377358 C15.7718696,12.8696398 16.3790738,11.3516295 16.3790738,9.68953688 C16.3790738,5.9948542 13.3842196,3 9.68953688,3 C5.9948542,3 3,5.9948542 3,9.68953688 C3,13.3842196 5.9948542,16.3790738 9.68953688,16.3790738 C11.3516295,16.3790738 12.8696398,15.7718696 14.0377358,14.7684391 L14.3207547,15.051458 L14.3207547,15.864494 L19.4665523,21 L21,19.4665523 L15.864494,14.3207547 Z M9.68953688,14.3207547 C7.13207547,14.3207547 5.05831904,12.2469983 5.05831904,9.68953688 C5.05831904,7.13207547 7.13207547,5.05831904 9.68953688,5.05831904 C12.2469983,5.05831904 14.3207547,7.13207547 14.3207547,9.68953688 C14.3207547,12.2469983 12.2469983,14.3207547 9.68953688,14.3207547 Z',
   'settings' : 'M18.4414091,12.877499 C18.4774091,12.589499 18.5044091,12.2969991 18.5044091,11.9999991 C18.5044091,11.7029991 18.4774091,11.4104992 18.4414091,11.1224992 L20.3449089,9.63299934 C20.5159089,9.49799935 20.5654089,9.25499937 20.4529089,9.05699939 L18.6529091,5.93849971 C18.5404091,5.74499973 18.3064091,5.66399973 18.1039092,5.74499973 L15.8629094,6.64949964 C15.3994094,6.29399967 14.8909095,5.9924997 14.3419095,5.76299972 L14.0044096,3.37799996 C13.9639096,3.16649998 13.7794096,3 13.5544096,3 L9.95440998,3 C9.72941,3 9.54491002,3.16649998 9.50891002,3.37799996 L9.17141006,5.76299972 C8.62241011,5.9924997 8.11391016,6.28949967 7.65041021,6.64949964 L5.40941043,5.74499973 C5.20691045,5.66849973 4.97291003,5.74499973 4.86041004,5.93849971 L3.06041022,9.05699939 C2.94791023,9.25049937 2.99741023,9.49349935 3.16841021,9.63299934 L5.06741002,11.1224992 C5.03141047,11.4104992 5.00441047,11.7029991 5.00441047,11.9999991 C5.00441047,12.2969991 5.03141047,12.589499 5.06741047,12.877499 L3.16841111,14.3669989 C2.99741068,14.5019988 2.94791068,14.7449988 3.06041067,14.9429988 L4.86041049,18.0614985 C4.97291048,18.2549985 5.2069109,18.3359994 5.40941088,18.2549985 L7.65041021,17.3504986 C8.11391016,17.7059985 8.62241011,18.0074985 9.17141006,18.2369985 L9.50891002,20.622 C9.54491002,20.8335005 9.72941,21 9.95440998,21 L13.5544096,21 C13.7794096,21 13.9639096,20.8335005 13.9999096,20.622 L14.3374095,18.2369985 C14.8864095,18.007503 15.3949094,17.7104985 15.8584094,17.3504986 L18.0994092,18.2549985 C18.3019091,18.3314985 18.5359091,18.2549985 18.6484091,18.0614985 L20.4484089,14.9429988 C20.5609089,14.7494988 20.5114089,14.5064988 20.3404089,14.3669989 L18.4414091,12.877499 Z M11.7544098,15.1499988 C10.01291,15.1499988 8.60441011,13.7414989 8.60441011,11.9999991 C8.60441011,10.2584993 10.01291,8.84999942 11.7544098,8.84999942 C13.4959096,8.84999942 14.9044095,10.2584993 14.9044095,11.9999991 C14.9044095,13.7414989 13.4959096,15.1499988 11.7544098,15.1499988 Z',
   'sheild' : 'M12.3636364,3 L5,6.27272727 L5,11.1818182 C5,15.7227265 8.14181818,19.9690909 12.3636364,21 C16.5854545,19.9690909 19.7272727,15.7227265 19.7272727,11.1818182 L19.7272727,6.27272727 L12.3636364,3 Z M10.7272727,16.0909091 L7.45454545,12.8181818 L8.60818182,11.6645455 L10.7272727,13.7754545 L16.1190909,8.38363636 L17.2727273,9.54545455 L10.7272727,16.0909091 Z',
   'star' : 'M12,16.743L17.562 20.1 16.086 13.773 21 9.516 14.529 8.967 12 3 9.471 8.967 3 9.516 7.914 13.773 6.438 20.1z',
   'work' : 'M12,7.6 L12,4 L3,4 L3,20.2 L21,20.2 L21,7.6 L12,7.6 Z M6.6,18.4 L4.8,18.4 L4.8,16.6 L6.6,16.6 L6.6,18.4 Z M6.6,14.8 L4.8,14.8 L4.8,13 L6.6,13 L6.6,14.8 Z M6.6,11.2 L4.8,11.2 L4.8,9.4 L6.6,9.4 L6.6,11.2 Z M6.6,7.6 L4.8,7.6 L4.8,5.8 L6.6,5.8 L6.6,7.6 Z M10.2,18.4 L8.4,18.4 L8.4,16.6 L10.2,16.6 L10.2,18.4 Z M10.2,14.8 L8.4,14.8 L8.4,13 L10.2,13 L10.2,14.8 Z M10.2,11.2 L8.4,11.2 L8.4,9.4 L10.2,9.4 L10.2,11.2 Z M10.2,7.6 L8.4,7.6 L8.4,5.8 L10.2,5.8 L10.2,7.6 Z M19.2,18.4 L12,18.4 L12,16.6 L13.8,16.6 L13.8,14.8 L12,14.8 L12,13 L13.8,13 L13.8,11.2 L12,11.2 L12,9.4 L19.2,9.4 L19.2,18.4 Z M17.4,11.2 L15.6,11.2 L15.6,13 L17.4,13 L17.4,11.2 Z M17.4,14.8 L15.6,14.8 L15.6,16.6 L17.4,16.6 L17.4,14.8 Z',
};



export default class Icon extends React.Component {
  render(){
    var ico = icons[this.props.name]
    var p = this.props.p != null ? this.props.p : 3;
    var w = this.props.w != null ? this.props.w-p : 30;
    return (
      <IconWrapper className={this.props.className} bg={this.props.bg} w={w} h={w} p={p}>
        <svg width={w+"px"} height={w+"px"} style={{fill: this.props.color}} viewBox="0 0 24 24">
          <path d={ico}></path>
        </svg>
      </IconWrapper>
    )
  }
}
