export interface OrdersBoardItem {
  customer_id: string;
 name: string;
 phone: string;
 email: string;
  image_path?: string;
  status: string;
  expected_delivery_date?: string;
  loading_date?: string;
  starting_date?: string;
  arrival_date?: string;
  loading_point?: string;
  unloading_point?: string;
  number_of_consignment:string;
  truck_type?:TruckType[];
}
export interface TruckType {
  type: string;
  capacity: string;
  quantity: string;
}
export interface MovingItem {
  item: OrdersBoardItem;
  title?: string;
}
