import { Schema, model } from 'mongoose'
import validator from 'validator'

// 定義資料結構，包含哪些欄位
const schema = new Schema({
  // 欄位名稱
  account: {
    // 資料型態
    type: String,
    // 設定為必填欄位
    required: [true, '缺少 account 欄位'],
    // 文字長度
    minLength: [4, 'account 必須 4 個字以上'],
    maxLength: [20, 'account 必須 20 字以下'],
    // 欄位資料不可重複
    unique: true,
    // Regex
    match: [/^[A-Za-z1-9]+$/, 'account 只能是英數字'],
    // 自動去除前後空白
    trim: true
  },
  email: {
    type: String,
    required: [true, '缺少 email 欄位'],
    unique: true,
    // 自訂驗證
    validate: {
      // 自訂驗證 function
      validator (value) {
        return validator.isEmail(value)
      },
      // 自訂錯誤訊息
      message: 'email 欄位格式錯誤'
    }
  }
})

// 將結構轉換成可以操作的 model 物件匯出
// 設定資料 collection 的名字為 users
export default model('users', schema)
