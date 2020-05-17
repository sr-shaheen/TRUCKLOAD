export interface Order {
  customer_id: string;
  name: string;
  phone: string;
  email: string;
  expected_delivery_date: string;
  loading_date: string;
  starting_date: string;
  loading_point: string;
  unloading_point: string;
  orientation: string;
  number_of_consignment:string;
  truck_type?: TruckType[];
  status:string;
  order_id:string;
  pk:string;
  sk:string;
  comment?:string
}
export interface TruckType {
  capacity: string;
  quantity: number;
  type: string;
}
