export interface OrdersBoardItem {
  _id: string;
  customerName: string;
  customerId: string;
  cellNo: string;
  registrationNo: string;
  email: string;
  status: string;
  imagePath?: string;
  carModel: string;
  modelCode?: string;
  chasisNo: string;
  serviceId?: string;
  warrantyStartDate?: Date;
  makeYear?: number;
  nextServiceId?: string;
}
