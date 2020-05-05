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
  detailsCollected: { bgColor: 'rgba(255, 193, 7, 0.75)', color: '#FFFFFF' },
  orderConfirmed: { bgColor: '#eeff41', color: '#FFFFFF' },
  loadCompleted: { bgColor: '#E9DB0F', color: '#FFFFFF' },
  inTransit: { bgColor: 'rgb(124,252,0)', color: '#FFFFFF' },
  uploadComplete: { bgColor: 'rgb(0,255,0)', color: '#FFFFFF' },
  consignmentDone: { bgColor: 'rgb(0,128,0)', color: '#FFFFFF' },
};
