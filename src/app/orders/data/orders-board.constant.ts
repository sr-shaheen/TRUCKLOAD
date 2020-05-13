export const statusList: string[] = [
  'ordersPlaced',
  'detailsCollected',
  'orderConfirmed',
  'loadCompleted',
  'inTransit',
  'uploadComplete',
  'consignmentDone',
];

export const statusDictionary = {
  ordersPlaced: 'Orders Placed',
  detailsCollected: 'Details Collected',
  orderConfirmed: 'Order Confirmed',
  loadCompleted: 'Load Completed',
  inTransit: 'In Transit',
  uploadComplete: 'Upload Complete',
  consignmentDone: 'Consignment Done',
};

export const ordersBoardColors = {
  ordersPlaced: { bgColor: 'rgb(196, 23, 23)', color: '#FFFFFF' },
  detailsCollected: { bgColor: '#E65100', color: '#FFFFFF' },
  orderConfirmed: { bgColor: '#FFC107', color: '#FFFFFF' }, 
  loadCompleted: { bgColor: 'rgba(51, 153, 102, 0.75)', color: '#FFFFFF' },
  inTransit: { bgColor: 'rgb(139,195,74)', color: '#FFFFFF' },
  uploadComplete: { bgColor: 'rgb(0,153,0)', color: '#FFFFFF' },
  consignmentDone: { bgColor: 'rgb(0,102,34)', color: '#FFFFFF' },
};
