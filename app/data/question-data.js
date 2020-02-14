
module.exports = { 
'photo-id': {
  text : 'Do you have a photo ID?',
  name : 'photo-id',
  next : 'bank-account'
},
'bank-account': {
  text : 'Do you have a bank account?',
  name : 'bank-account',
  next : 'nino'
},
'bank-account': {
  text : 'Do you have a bank account?',
  name : 'bank-account',
  next : 'nino'
},
'nino': {
  text : 'Do you have a National Insurance Number?',
  name : 'nino',
  next : 'benefits'
},
'benefits': {
  text : 'Do you want to know more about claiming benefits?',
  name : 'benefits',
  next : 'housing'
},
'housing': {
  text : 'Are you looking for somewhere to live?',
  name : 'housing',
  next : 'support'
},
'support': {
  text : 'Do you feel you have enough support from other people or organisations?',
  name : 'support',
  next : 'employment'
},
'employment': {
  text : 'Are you looking for a job?',
  name : 'employment',
  next : 'education'
},
'education': {
  text : 'Are you currently in education or training?',
  name : 'education',
  next : 'END'
}

}