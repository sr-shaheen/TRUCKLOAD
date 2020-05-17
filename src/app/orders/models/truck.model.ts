export interface Truck {
  truck_reg: string;
  vendor_name: string;
  vendor_phn?: string;
 // device_id: string;
  status:string;
  capacity: number;
  type: string;
  is_available?: boolean;
}
export interface TruckList {
  capacity: string;
  created_at?: Date;
  device_id?: string;
  orientation: string;
  phone: string;
  pk: string;
  sk: string;
  status: string;
  truck_id: string;
  truck_reg: string;
  type: string;
  vendor_id: string;
  vendor_name: string;
}
