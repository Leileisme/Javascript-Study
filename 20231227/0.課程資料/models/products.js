import { Schema, model } from 'mongoose'

const schema = new Schema({
  name: {
    type: String,
    required: [true, '缺少商品名稱']
  },
  price: {
    type: Number,
    required: [true, '缺少商品價格'],
    min: [0, '商品價格不能小於 0']
  },
  category: {
    type: String,
    enum: {
      // 限制欄位只能有這些值
      values: ['遊戲', '衣服', '手機'],
      // {VALUE} 會被自動替換為傳入的值
      message: '查無 {VALUE} 分類'
    }
  }
})

export default model('products', schema)
