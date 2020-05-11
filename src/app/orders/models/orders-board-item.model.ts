export interface OrdersBoardItem {
  customerId: string;
  customerName: string;
  cellNo: string;
  email: string;
  imagePath?: string;
  status: string;
  loadingDate?: string;
  arrivalDate?: string;
  loadingPoint?: string;
  unloadingPoint: string;
  vehicalReg?: string;
  driverPhn?: Date;
}
export interface MovingItem {
  item: OrdersBoardItem;
  title?: string;
}
