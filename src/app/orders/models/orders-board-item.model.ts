export interface OrdersBoardItem {
  customer_id: string;
  customer_name: string;
  customer_phn: string;
  customer_email: string;
  image_path?: string;
  status: string;
  expected_delivery_date?: string;
  loading_date?: string;
  starting_date?: string;
  arrival_date?: string;
  loading_point?: string;
  unloading_point?: string;
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
