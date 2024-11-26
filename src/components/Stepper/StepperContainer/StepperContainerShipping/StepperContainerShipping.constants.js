export const DELIVERY_METHODS_KEYS = ['normal', 'DHL']

export const DELIVERY_METHODS = {
  normal:{
    id: 'normal',
    label: '標準運送',
    description: '約 3~7 個工作天',
    price: 0
  },
  DHL: {
    id: 'DHL',
    label: 'DHL 貨運',
    description: '48 小時內送達',
    price: 500
  }
}
