export const statusList: string[] = [
  'ordersPlaced',
  'detailsCollected',
  'orderConfirmed',
  'loadCompleted',
  'inTransit',
  'uploadComplete',
  'consignmentDone'
];

export const statusDictionary = {
  'ordersPlaced': 'First Day',
  'detailsCollected': 'Third Day',
  'orderConfirmed': 'Complaint' ,
  'loadCompleted': 'In Progress',
  'inTransit': 'Resolation',
  'uploadComplete': 'Resolation',
  'consignmentDone': 'Resolation'
};

export const ordersBoardColors = {
  ordersPlaced: {bgColor: 'rgb(196, 23, 23)', color: '#0e0e0e'},
  detailsCollected: {bgColor: 'rgba(255, 193, 7, 0.75)', color: '#0e0e0e'},
  orderConfirmed: {bgColor: '#eeff41', color: '#0e0e0e'},
  loadCompleted: {bgColor: '#8bc34a', color: '#0e0e0e'},
  inTransit: {bgColor: 'rgb(124,252,0)', color: '#0e0e0e'},
  uploadComplete: {bgColor: 'rgb(0,255,0)', color: '#0e0e0e'},
  consignmentDone: {bgColor: '#rgb(0,128,0)', color: '#0e0e0e'}
};
